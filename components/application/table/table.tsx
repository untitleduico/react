"use client";

import type { ComponentPropsWithRef, HTMLAttributes, PointerEvent, ReactNode, Ref, TdHTMLAttributes, ThHTMLAttributes } from "react";
import { createContext, isValidElement, useContext, useLayoutEffect, useRef, useState } from "react";
import { ArrowDown, ChevronRight, ChevronSelectorVertical, Copy01, DotsGrid, Edit01, HelpCircle, Trash01 } from "@untitledui/icons";
import type {
    CellProps as AriaCellProps,
    ColumnProps as AriaColumnProps,
    DropIndicatorProps as AriaDropIndicatorProps,
    ResizableTableContainerProps as AriaResizableTableContainerProps,
    RowProps as AriaRowProps,
    TableFooterProps as AriaTableFooterProps,
    TableHeaderProps as AriaTableHeaderProps,
    TableLayoutProps as AriaTableLayoutProps,
    TableLoadMoreItemProps as AriaTableLoadMoreItemProps,
    TableProps as AriaTableProps,
    ColumnRenderProps,
    Key,
} from "react-aria-components";
import {
    Button as AriaButton,
    Cell as AriaCell,
    Collection as AriaCollection,
    CollectionRendererContext as AriaCollectionRendererContext,
    Column as AriaColumn,
    ColumnResizer as AriaColumnResizer,
    DropIndicator as AriaDropIndicator,
    Group as AriaGroup,
    ResizableTableContainer as AriaResizableTableContainer,
    Row as AriaRow,
    Table as AriaTable,
    TableBody as AriaTableBody,
    TableColumnResizeStateContext as AriaTableColumnResizeStateContext,
    TableFooter as AriaTableFooter,
    TableHeader as AriaTableHeader,
    TableLayout as AriaTableLayout,
    TableLoadMoreItem as AriaTableLoadMoreItem,
    Virtualizer as AriaVirtualizer,
    useLocale,
    useTableOptions,
} from "react-aria-components";
import { Badge } from "@/components/base/badges/badges";
import { Checkbox } from "@/components/base/checkbox/checkbox";
import { Dropdown } from "@/components/base/dropdown/dropdown";
import { Tooltip, TooltipTrigger } from "@/components/base/tooltip/tooltip";
import { cx } from "@/utils/cx";

export const TableRowActionsDropdown = () => (
    <Dropdown.Root>
        <Dropdown.DotsButton />

        <Dropdown.Popover className="w-min">
            <Dropdown.Menu>
                <Dropdown.Item icon={Edit01}>
                    <span className="pr-4">Edit</span>
                </Dropdown.Item>
                <Dropdown.Item icon={Copy01}>
                    <span className="pr-4">Copy link</span>
                </Dropdown.Item>
                <Dropdown.Item icon={Trash01}>
                    <span className="pr-4">Delete</span>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown.Popover>
    </Dropdown.Root>
);

const TableContext = createContext<{ size: "sm" | "md" }>({ size: "md" });

/**
 * Joins a part's own classes with its `className` prop, which React Aria allows to be a function of the render state. A string
 * keeps the result static, so React Aria's re-renders on focus and selection changes don't rebuild it for every cell.
 */
const withClassName = <T,>(base: string, className: string | ((state: T) => string) | undefined) =>
    typeof className === "function" ? (state: T) => cx(base, className(state)) : cx(base, className);

/** Whether the table is rendered inside a `Table.ResizableContainer`, which then acts as the scroll container. */
const TableResizableContext = createContext(false);

/** Whether the table renders only the rows and columns in view. Its parts are then `div`s that React Aria positions. */
const useIsVirtualized = () => useContext(AriaCollectionRendererContext).isVirtualized ?? false;

interface TableVirtualizerLayoutOptions extends AriaTableLayoutProps {
    /** The ids of the columns that stay visible while the table scrolls horizontally. */
    stickyColumns?: Key[];
    /** Whether the footer stays at the bottom of the table while it scrolls. */
    stickyFooter?: boolean;
}

/** Whether a virtualized table keeps its footer at the bottom. `Table.Footer` then marks itself for the table's styles. */
const TableStickyFooterContext = createContext(false);

// React Aria's table layout with sticky columns: they're always rendered, and stick to the start of the table. The header,
// body and footer don't clip their content, as a clipping parent would keep the sticky cells from sticking.
class StickyTableLayout<T> extends AriaTableLayout<T, TableVirtualizerLayoutOptions> {
    private stickyColumns = new Set<Key>();
    private stickyFooter = false;

    update(invalidationContext: Parameters<AriaTableLayout<T, TableVirtualizerLayoutOptions>["update"]>[0]) {
        this.stickyColumns = new Set(invalidationContext.layoutOptions?.stickyColumns);
        this.stickyFooter = invalidationContext.layoutOptions?.stickyFooter ?? false;
        super.update(invalidationContext);
    }

    protected isStickyColumn(node: { type: string; key: Key; index: number; colIndex?: number | null }) {
        const key = node.type === "column" ? node.key : this.collection.columns[node.colIndex ?? node.index]?.key;
        return key != null && this.stickyColumns.has(key);
    }

    protected buildCollection() {
        const nodes = super.buildCollection();
        for (const node of nodes) {
            node.layoutInfo.allowOverflow = true;
            // A sticky footer is laid out in the flow, so the table's styles can move it to the bottom of the view.
            if (this.stickyFooter && node.node?.type === "tablefooter") {
                node.layoutInfo.isSticky = true;
                node.layoutInfo.zIndex = 1;
            }
        }
        return nodes;
    }

    // React Aria only lays out the rows near the area in view. A sticky footer is always in view, so all its rows are laid out.
    protected buildRowGroup(...args: Parameters<AriaTableLayout<T>["buildRowGroup"]>) {
        if (!this.stickyFooter || args[1].type !== "tablefooter") return super.buildRowGroup(...args);

        const requestedRect = this.requestedRect;
        const fullHeight = requestedRect.copy();
        fullHeight.y = 0;
        fullHeight.height = Number.MAX_SAFE_INTEGER;
        this.requestedRect = fullHeight;
        try {
            return super.buildRowGroup(...args);
        } finally {
            this.requestedRect = requestedRect;
        }
    }

    // React Aria lays out a row's cells up to the edge of the area in view, and finds sticky cells by their column index among
    // them, so a column stuck to the right edge would never be found. Rows then lay out all their cells; only the cells in
    // view and the sticky ones are rendered.
    protected buildRow(...args: Parameters<AriaTableLayout<T>["buildRow"]>) {
        const lastColumn = this.collection.columns[this.collection.columns.length - 1];
        if (!lastColumn || !this.stickyColumns.has(lastColumn.key)) return super.buildRow(...args);

        const requestedRect = this.requestedRect;
        const fullWidth = requestedRect.copy();
        fullWidth.width = Number.MAX_SAFE_INTEGER;
        this.requestedRect = fullWidth;
        try {
            return super.buildRow(...args);
        } finally {
            this.requestedRect = requestedRect;
        }
    }
}

interface TableVirtualizerProps {
    children: ReactNode;
    /** The height of each row, in pixels. */
    rowHeight: number;
    /** The height of the header, in pixels. */
    headingHeight: number;
    /** The ids of the columns that stay visible while the table scrolls horizontally. They must come first. */
    stickyColumns?: Key[];
    /** Whether the footer stays at the bottom of the table while it scrolls. */
    stickyFooter?: boolean;
}

/**
 * Renders only the rows and columns in view, so large tables stay fast. The table's parts become `div`s that React Aria
 * positions, and the table scrolls itself, so give `Table` a height and `overflow-auto`.
 */
const TableVirtualizer = ({ children, rowHeight, headingHeight, stickyColumns, stickyFooter = false }: TableVirtualizerProps) => {
    const layoutOptions: TableVirtualizerLayoutOptions = { rowHeight, headingHeight, stickyColumns, stickyFooter };

    return (
        <AriaVirtualizer layout={StickyTableLayout} layoutOptions={layoutOptions}>
            <TableStickyFooterContext.Provider value={stickyFooter}>{children}</TableStickyFooterContext.Provider>
        </AriaVirtualizer>
    );
};
TableVirtualizer.displayName = "TableVirtualizer";

const TableCardRoot = ({ children, className, size = "md", ...props }: HTMLAttributes<HTMLDivElement> & { size?: "sm" | "md" }) => {
    return (
        <TableContext.Provider value={{ size }}>
            <div {...props} className={cx("overflow-hidden rounded-xl bg-primary shadow-xs ring-1 ring-secondary", className)}>
                {children}
            </div>
        </TableContext.Provider>
    );
};

interface TableCardHeaderProps {
    /** The title of the table card header. */
    title: string;
    /** The badge displayed next to the title. */
    badge?: ReactNode;
    /** The description of the table card header. */
    description?: string;
    /** The content displayed after the title and badge. */
    contentTrailing?: ReactNode;
    /** The class name of the table card header. */
    className?: string;
}

const TableCardHeader = ({ title, badge, description, contentTrailing, className }: TableCardHeaderProps) => {
    const { size } = useContext(TableContext);

    return (
        <div
            className={cx(
                "relative flex flex-col items-start gap-4 border-b border-secondary bg-primary px-4 md:flex-row",
                size === "sm" ? "py-4 md:px-5" : "py-5 md:px-6",
                className,
            )}
        >
            <div className="flex flex-1 flex-col gap-0.5">
                <div className="flex items-center gap-2">
                    <h2 className="text-md font-semibold text-primary">{title}</h2>
                    {badge ? (
                        isValidElement(badge) ? (
                            badge
                        ) : (
                            <Badge color="gray" size="sm" type="modern">
                                {badge}
                            </Badge>
                        )
                    ) : null}
                </div>
                {description && <p className="text-sm text-tertiary">{description}</p>}
            </div>
            {contentTrailing}
        </div>
    );
};

interface TableRootProps extends AriaTableProps, Omit<ComponentPropsWithRef<"table">, "className" | "slot" | "style"> {
    size?: "sm" | "md";
    /** The class name of the scroll container wrapping the table. Use it to set a height for sticky headers or infinite scrolling. */
    wrapperClassName?: string;
}

const TableRoot = ({ className, size = "md", wrapperClassName, ...props }: TableRootProps) => {
    const context = useContext(TableContext);
    const isResizable = useContext(TableResizableContext);
    const isVirtualized = useIsVirtualized();

    const table = (
        <AriaTable
            className={(state) =>
                cx(
                    "w-full overflow-x-hidden",
                    // A virtualized table's content box lays out the sticky header and footer boxes in a column. The footer's box,
                    // which React Aria places by its top, stays at the bottom of the view instead.
                    isVirtualized &&
                        "[&>[role=presentation]]:flex [&>[role=presentation]]:flex-col [&>[role=presentation]>[role=presentation]:has(>[data-sticky-footer])]:top-auto! [&>[role=presentation]>[role=presentation]:has(>[data-sticky-footer])]:bottom-0 [&>[role=presentation]>[role=presentation]:has(>[data-sticky-footer])]:mt-auto",
                    typeof className === "function" ? className(state) : className,
                )
            }
            {...props}
        />
    );

    return (
        <TableContext.Provider value={{ size: context?.size ?? size }}>
            {/* A resizable container already scrolls, so the table can't be wrapped in another scroll container. */}
            {isResizable || isVirtualized ? table : <div className={cx("overflow-x-auto", wrapperClassName)}>{table}</div>}
        </TableContext.Provider>
    );
};
TableRoot.displayName = "Table";

const TableResizableContainer = ({ className, ...props }: AriaResizableTableContainerProps & { ref?: Ref<HTMLDivElement> }) => {
    return (
        <TableResizableContext.Provider value={true}>
            <AriaResizableTableContainer {...props} className={cx("relative w-full overflow-auto", className)} />
        </TableResizableContext.Provider>
    );
};
TableResizableContainer.displayName = "TableResizableContainer";

interface TableHeaderProps<T extends object>
    extends AriaTableHeaderProps<T>, Omit<ComponentPropsWithRef<"thead">, "children" | "className" | "slot" | "style"> {
    bordered?: boolean;
    size?: "sm" | "md";
    /** Props of the checkbox column the header adds when rows are selected with checkboxes, such as a width or a sticky position. */
    selectionColumnProps?: Omit<AriaColumnProps, "children" | "className"> & { className?: string };
}

const TableHeader = <T extends object>({
    columns,
    children,
    bordered = true,
    className,
    size: sizeProp,
    selectionColumnProps,
    dependencies,
    ...props
}: TableHeaderProps<T>) => {
    const context = useContext(TableContext);
    const { selectionBehavior, selectionMode, allowsDragging } = useTableOptions();
    const isVirtualized = useIsVirtualized();

    const size = sizeProp ?? context.size;
    // Virtualized columns are positioned by React Aria, so they fill their box, and the header row lays out the sticky ones.
    const virtualizedColumnClassName = isVirtualized && "flex size-full items-center";

    return (
        <AriaTableHeader
            {...props}
            className={(state) =>
                cx(
                    "relative bg-secondary",
                    size === "sm" ? "h-9" : "h-11",

                    // Row border—using an "after" pseudo-element to avoid the border taking up space.
                    bordered &&
                        !isVirtualized &&
                        "[&>tr>th]:after:pointer-events-none [&>tr>th]:after:absolute [&>tr>th]:after:inset-x-0 [&>tr>th]:after:bottom-0 [&>tr>th]:after:h-px [&>tr>th]:after:bg-border-secondary [&>tr>th]:focus-visible:after:bg-transparent",
                    isVirtualized && "size-full [&>[role=row]]:flex [&>[role=row]]:size-full",
                    isVirtualized &&
                        bordered &&
                        "after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:z-30 after:h-px after:bg-border-secondary",

                    typeof className === "function" ? className(state) : className,
                )
            }
        >
            {allowsDragging && <AriaColumn className={cx("relative w-0 py-2 pr-0 pl-4", size === "sm" ? "md:pl-5" : "md:pl-6", virtualizedColumnClassName)} />}
            {selectionBehavior === "toggle" && (
                <AriaColumn
                    {...selectionColumnProps}
                    className={cx(
                        "relative py-2 pr-0 pl-4",
                        size === "sm" ? "w-9 md:pl-5" : "w-11 md:pl-6",
                        virtualizedColumnClassName,
                        selectionColumnProps?.className,
                    )}
                >
                    {selectionMode === "multiple" && (
                        <div className="flex items-start">
                            <Checkbox slot="selection" size="md" />
                        </div>
                    )}
                </AriaColumn>
            )}
            <AriaCollection items={columns} dependencies={dependencies}>
                {children}
            </AriaCollection>
        </AriaTableHeader>
    );
};

TableHeader.displayName = "TableHeader";

interface TableColumnResizerProps {
    /** The id of the column. */
    columnKey: Key;
    /** Whether arrow keys can focus the divider to resize with the keyboard. */
    isFocusable: boolean;
}

// Dragging the divider resizes the column in the DOM, and React Aria gets the new width once, on release. React Aria's own
// resizer re-renders every row on each pointer move, which lags on larger tables. It still handles keyboard resizing.
const TableColumnResizer = ({ columnKey, isFocusable }: TableColumnResizerProps) => {
    const layoutState = useContext(AriaTableColumnResizeStateContext);
    const latestLayoutState = useRef(layoutState);
    useLayoutEffect(() => {
        latestLayoutState.current = layoutState;
    });
    const { direction } = useLocale();
    const [isResizing, setIsResizing] = useState(false);

    const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
        const handle = event.currentTarget;
        const header = handle.closest<HTMLElement>("th, [role=columnheader]");
        const state = latestLayoutState.current;
        if (event.button !== 0 || !header || !state) return;
        // Keeps the header from sorting, and the text from being selected.
        event.preventDefault();
        event.stopPropagation();

        handle.setPointerCapture(event.pointerId);
        const minWidth = state.getColumnMinWidth(columnKey);
        const maxWidth = state.getColumnMaxWidth(columnKey);
        const startX = event.clientX;
        const startWidth = header.getBoundingClientRect().width;
        let width = startWidth;
        setIsResizing(true);

        // A virtualized table only renders the cells in view, so it can follow the pointer through React Aria's state, once per
        // frame. A full table resizes the header in the DOM until release.
        const isVirtualized = header.tagName !== "TH";
        let frame = 0;

        const handleMove = (moveEvent: globalThis.PointerEvent) => {
            const delta = (moveEvent.clientX - startX) * (direction === "rtl" ? -1 : 1);
            width = Math.round(Math.min(Math.max(startWidth + delta, minWidth), maxWidth));
            if (!isVirtualized) header.style.width = `${width}px`;
            else if (!frame) {
                frame = requestAnimationFrame(() => {
                    frame = 0;
                    latestLayoutState.current?.updateResizedColumns(columnKey, width);
                });
            }
        };
        const handleEnd = () => {
            handle.removeEventListener("pointermove", handleMove);
            handle.removeEventListener("pointerup", handleEnd);
            handle.removeEventListener("pointercancel", handleEnd);
            cancelAnimationFrame(frame);
            setIsResizing(false);
            if (width !== startWidth) latestLayoutState.current?.updateResizedColumns(columnKey, width);
        };

        handle.addEventListener("pointermove", handleMove);
        handle.addEventListener("pointerup", handleEnd);
        handle.addEventListener("pointercancel", handleEnd);
    };

    return (
        <>
            <div
                aria-hidden="true"
                data-resizing={isResizing || undefined}
                onPointerDown={handlePointerDown}
                className={cx(
                    // A 16px hit area centered on the column divider. On the last column, it stays inside so it can't overflow the table.
                    "absolute inset-y-0 -end-2 z-10 flex w-4 cursor-col-resize touch-none justify-center in-[th:last-child]:end-0 in-[th:last-child]:justify-end",
                    "in-[[role=presentation]:last-child>[role=columnheader]]:end-0 in-[[role=presentation]:last-child>[role=columnheader]]:justify-end",
                    "after:h-full after:w-px after:bg-border-secondary after:transition after:duration-100 after:ease-linear",
                    "hover:after:w-0.5 hover:after:bg-fg-brand-primary data-resizing:after:w-0.5 data-resizing:after:bg-fg-brand-primary",
                )}
            />
            <AriaColumnResizer
                data-react-aria-prevent-focus={!isFocusable || undefined}
                className={(resizerState) =>
                    cx(
                        "pointer-events-none absolute inset-y-0 -end-2 z-10 flex w-4 justify-center outline-hidden in-[th:last-child]:end-0 in-[th:last-child]:justify-end",
                        (resizerState.isResizing || resizerState.isFocusVisible) && "after:h-full after:w-0.5 after:bg-fg-brand-primary",
                    )
                }
            />
        </>
    );
};

interface TableHeadProps extends AriaColumnProps, Omit<ThHTMLAttributes<HTMLTableCellElement>, "children" | "className" | "style" | "id"> {
    ref?: Ref<HTMLTableCellElement>;
    label?: string;
    tooltip?: string;
    /** Whether the column can be resized. Requires the table to be wrapped in a `Table.ResizableContainer`, and an `id`. */
    allowsResizing?: boolean;
    /**
     * The alignment of the header content, such as "right" for number columns.
     * @default "left"
     */
    align?: "left" | "center" | "right";
    /** Content at the end of the header, after the sort indicator, such as a column menu. */
    contentTrailing?: ReactNode | ((state: ColumnRenderProps) => ReactNode);
    /**
     * Whether arrow keys can focus the resize divider, which then resizes with the arrow keys. Turn it off when something
     * else starts keyboard resizing, such as a column menu calling `startResize`, so arrow keys focus the header itself.
     * @default true
     */
    isResizerFocusable?: boolean;
}

const TableHead = ({
    className,
    tooltip,
    label,
    children,
    allowsResizing,
    align = "left",
    contentTrailing,
    isResizerFocusable = true,
    ...props
}: TableHeadProps) => {
    const { selectionBehavior, allowsDragging } = useTableOptions();
    const isVirtualized = useIsVirtualized();

    return (
        <AriaColumn
            {...props}
            className={withClassName(
                cx(
                    "relative p-0 px-6 py-2 outline-hidden focus-visible:z-1 focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-bg-primary focus-visible:ring-inset",
                    selectionBehavior === "toggle" && (allowsDragging ? "nth-3:pl-3" : "nth-2:pl-3"),
                    "allows-sorting:cursor-pointer",
                    isVirtualized && "flex size-full items-center",
                ),
                className,
            )}
        >
            {(state) => (
                <AriaGroup
                    className={cx(
                        "flex items-center gap-1",
                        allowsResizing && "min-w-0",
                        (contentTrailing || align !== "left") && "w-full",
                        align === "center" && "justify-center",
                        align === "right" && "justify-end",
                    )}
                >
                    <div className={cx("flex items-center gap-1", allowsResizing && "min-w-0")}>
                        {label && <span className={cx("text-xs font-semibold whitespace-nowrap text-quaternary", allowsResizing && "truncate")}>{label}</span>}
                        {typeof children === "function" ? children(state) : children}
                    </div>

                    {tooltip && (
                        <Tooltip title={tooltip} placement="top">
                            <TooltipTrigger className="cursor-pointer text-fg-quaternary transition duration-100 ease-linear hover:text-fg-quaternary_hover focus:text-fg-quaternary_hover">
                                <HelpCircle className="size-4" />
                            </TooltipTrigger>
                        </Tooltip>
                    )}

                    {state.allowsSorting &&
                        (state.sortDirection ? (
                            <ArrowDown className={cx("size-3 stroke-[3px] text-fg-quaternary", state.sortDirection === "ascending" && "rotate-180")} />
                        ) : (
                            <ChevronSelectorVertical size={12} strokeWidth={3} className="shrink-0 text-fg-quaternary" />
                        ))}

                    {contentTrailing && (
                        <div className={cx("flex shrink-0 items-center", align === "left" && "ms-auto")}>
                            {typeof contentTrailing === "function" ? contentTrailing(state) : contentTrailing}
                        </div>
                    )}

                    {allowsResizing && props.id !== undefined && <TableColumnResizer columnKey={props.id} isFocusable={isResizerFocusable} />}
                </AriaGroup>
            )}
        </AriaColumn>
    );
};
TableHead.displayName = "TableHead";

interface TableRowProps<T extends object>
    extends AriaRowProps<T>, Omit<ComponentPropsWithRef<"tr">, "children" | "className" | "onClick" | "slot" | "style" | "id"> {
    highlightSelectedRow?: boolean;
    size?: "sm" | "md";
    /** Props of the checkbox cell the row adds when rows are selected with checkboxes, such as a sticky position. `children` replaces the checkbox. */
    selectionCellProps?: Omit<AriaCellProps, "className"> & { className?: string };
}

const TableRow = <T extends object>({
    columns,
    children,
    className,
    highlightSelectedRow = true,
    size: sizeProp,
    selectionCellProps,
    dependencies,
    ...props
}: TableRowProps<T>) => {
    const context = useContext(TableContext);
    const { selectionBehavior, allowsDragging } = useTableOptions();
    const isDragHandlePressed = useRef(false);
    const isVirtualized = useIsVirtualized();

    const size = sizeProp ?? context.size;
    const virtualizedCellClassName = isVirtualized && "size-full content-center";

    return (
        <AriaRow
            {...props}
            className={withClassName(
                cx(
                    "relative outline-focus-ring transition-colors after:pointer-events-none hover:bg-secondary focus-visible:outline-2 focus-visible:-outline-offset-2",
                    size === "sm" ? "h-14" : "h-18",
                    highlightSelectedRow && "selected:bg-secondary",
                    "disabled:cursor-not-allowed disabled:hover:bg-transparent dragging:opacity-50 drop-target:bg-brand-primary",

                    // Row border—using an "after" pseudo-element to avoid the border taking up space. It's hidden on the last row unless the
                    // loading row (also `role="row"`) follows it. `:last-child` won't do, as `Table.LoadMoreItem` always adds a hidden row.
                    !isVirtualized &&
                        "[&:not(:has(~[role=row]))>td]:after:hidden [&>td]:after:absolute [&>td]:after:inset-x-0 [&>td]:after:bottom-0 [&>td]:after:h-px [&>td]:after:w-full [&>td]:after:bg-border-secondary [&>td]:focus-visible:after:opacity-0 focus-visible:[&>td]:after:opacity-0",
                    // A virtualized row holds positioned cells; the sticky ones are laid out in a flex row. Its border sits above them.
                    isVirtualized &&
                        "flex size-full after:absolute after:inset-x-0 after:bottom-0 after:z-10 after:h-px after:bg-border-secondary focus-visible:after:opacity-0",
                ),
                className,
            )}
        >
            {allowsDragging && (
                <AriaCell className={cx("relative h-px p-0", virtualizedCellClassName)}>
                    {/* React Aria disables pointer events on the drag button so the row receives the drag. This wrapper fills the cell to
                    show the grab cursor. It takes focus on press so the cell doesn't move focus into the drag button, which cancels the drag.
                    Keyboard focus is passed on to the drag button. */}
                    <div
                        tabIndex={-1}
                        onPointerDown={() => (isDragHandlePressed.current = true)}
                        onFocus={(event) => {
                            if (!isDragHandlePressed.current) event.currentTarget.querySelector("button")?.focus();
                            isDragHandlePressed.current = false;
                        }}
                        className={cx(
                            "group/drag flex h-full cursor-grab items-center py-2 pr-0 pl-4 outline-hidden active:cursor-grabbing",
                            size === "sm" ? "md:pl-5" : "md:pl-6",
                        )}
                    >
                        <AriaButton
                            slot="drag"
                            className="flex rounded-xs text-fg-quaternary outline-focus-ring transition duration-100 ease-linear group-hover/drag:text-fg-quaternary_hover focus-visible:outline-2 focus-visible:outline-offset-2"
                        >
                            <DotsGrid className="size-4" aria-hidden="true" />
                        </AriaButton>
                    </div>
                </AriaCell>
            )}
            {selectionBehavior === "toggle" && (
                <AriaCell
                    {...selectionCellProps}
                    className={cx("relative py-2 pr-0 pl-4", size === "sm" ? "md:pl-5" : "md:pl-6", virtualizedCellClassName, selectionCellProps?.className)}
                >
                    {selectionCellProps?.children !== undefined ? (
                        selectionCellProps.children
                    ) : (
                        <div className="flex items-end">
                            <Checkbox slot="selection" size="md" />
                        </div>
                    )}
                </AriaCell>
            )}
            <AriaCollection items={columns} dependencies={dependencies}>
                {children}
            </AriaCollection>
        </AriaRow>
    );
};

TableRow.displayName = "TableRow";

interface TableCellProps extends AriaCellProps, Omit<TdHTMLAttributes<HTMLTableCellElement>, "children" | "className" | "style" | "id"> {
    ref?: Ref<HTMLTableCellElement>;
    size?: "sm" | "md";
}

const TableCell = ({ className, children, size: sizeProp, ...props }: TableCellProps) => {
    const context = useContext(TableContext);
    const { selectionBehavior, allowsDragging } = useTableOptions();
    const isVirtualized = useIsVirtualized();

    const size = sizeProp ?? context.size;

    return (
        <AriaCell
            {...props}
            className={withClassName(
                cx(
                    "relative text-sm text-tertiary outline-focus-ring focus-visible:z-1 focus-visible:outline-2 focus-visible:-outline-offset-2",
                    size === "sm" && "px-5 py-3",
                    size === "md" && "px-6 py-4",

                    selectionBehavior === "toggle" && (allowsDragging ? "nth-3:pl-3" : "nth-2:pl-3"),
                    "disabled:opacity-50",
                    // A virtualized cell is a div in a positioned box: it fills the box and centers its content like a <td>.
                    isVirtualized && "size-full content-center",
                ),
                className,
            )}
        >
            {(state) => {
                const content = typeof children === "function" ? children(state) : children;

                if (!state.isTreeColumn) return content;

                // The tree column indents nested rows and renders the expand/collapse button.
                return (
                    <div className="flex items-center gap-2" style={{ paddingInlineStart: (state.level - 1) * 28 }}>
                        {state.hasChildItems ? (
                            <AriaButton
                                slot="chevron"
                                className="flex shrink-0 cursor-pointer rounded-xs text-fg-quaternary outline-focus-ring transition duration-100 ease-linear hover:text-fg-quaternary_hover focus-visible:outline-2 focus-visible:outline-offset-2"
                            >
                                <ChevronRight
                                    aria-hidden="true"
                                    className={cx(
                                        "size-5 transition-transform duration-100 ease-linear rtl:rotate-180",
                                        state.isExpanded && "rotate-90 rtl:rotate-90",
                                    )}
                                />
                            </AriaButton>
                        ) : (
                            <span aria-hidden="true" className="size-5 shrink-0" />
                        )}
                        {content}
                    </div>
                );
            }}
        </AriaCell>
    );
};
TableCell.displayName = "TableCell";

const TableFooter = <T extends object>({ className, ...props }: AriaTableFooterProps<T>) => {
    const isVirtualized = useIsVirtualized();
    const isSticky = useContext(TableStickyFooterContext);

    return (
        <AriaTableFooter
            {...props}
            data-sticky-footer={(isVirtualized && isSticky) || undefined}
            className={cx("border-t border-secondary bg-secondary [&>tr]:hover:bg-transparent", isVirtualized && "size-full", className)}
        />
    );
};
TableFooter.displayName = "TableFooter";

const TableDropIndicator = ({ className, ...props }: AriaDropIndicatorProps) => {
    return (
        <AriaDropIndicator
            {...props}
            className={(state) =>
                cx("[transform:translateZ(0)] outline-brand", state.isDropTarget && "outline-1", typeof className === "function" ? className(state) : className)
            }
        />
    );
};
TableDropIndicator.displayName = "TableDropIndicator";

interface TableLoadMoreItemProps extends AriaTableLoadMoreItemProps {
    /** The text displayed next to the spinner while more rows are loading. */
    label?: string;
}

const TableLoadMoreItem = ({ className, label = "Loading more...", children, ...props }: TableLoadMoreItemProps) => {
    return (
        <AriaTableLoadMoreItem {...props} className={cx("h-14", className)}>
            {children ?? (
                <div className="flex items-center justify-center gap-3 py-4">
                    <svg className="size-5 animate-spin" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                        <circle className="text-bg-tertiary" cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="4" />
                        <circle
                            className="stroke-fg-brand-primary"
                            cx="16"
                            cy="16"
                            r="14"
                            strokeWidth="4"
                            strokeDashoffset="75"
                            strokeDasharray="100"
                            strokeLinecap="round"
                        />
                    </svg>
                    <span className="text-sm font-medium text-secondary">{label}</span>
                </div>
            )}
        </AriaTableLoadMoreItem>
    );
};
TableLoadMoreItem.displayName = "TableLoadMoreItem";

const TableCard = {
    Root: TableCardRoot,
    Header: TableCardHeader,
};

const Table = TableRoot as typeof TableRoot & {
    Body: typeof AriaTableBody;
    Cell: typeof TableCell;
    DropIndicator: typeof TableDropIndicator;
    Footer: typeof TableFooter;
    Head: typeof TableHead;
    Header: typeof TableHeader;
    LoadMoreItem: typeof TableLoadMoreItem;
    ResizableContainer: typeof TableResizableContainer;
    Row: typeof TableRow;
    Virtualizer: typeof TableVirtualizer;
};
Table.Body = AriaTableBody;
Table.Cell = TableCell;
Table.DropIndicator = TableDropIndicator;
Table.Footer = TableFooter;
Table.Head = TableHead;
Table.Header = TableHeader;
Table.LoadMoreItem = TableLoadMoreItem;
Table.ResizableContainer = TableResizableContainer;
Table.Row = TableRow;
Table.Virtualizer = TableVirtualizer;

export { Table, TableCard };
