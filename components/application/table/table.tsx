"use client";

import type { ComponentPropsWithRef, HTMLAttributes, ReactNode, Ref, TdHTMLAttributes, ThHTMLAttributes } from "react";
import { createContext, isValidElement, useContext, useRef } from "react";
import { ArrowDown, ChevronRight, ChevronSelectorVertical, Copy01, DotsGrid, Edit01, HelpCircle, Trash01 } from "@untitledui/icons";
import type {
    CellProps as AriaCellProps,
    ColumnProps as AriaColumnProps,
    DropIndicatorProps as AriaDropIndicatorProps,
    ResizableTableContainerProps as AriaResizableTableContainerProps,
    RowProps as AriaRowProps,
    TableFooterProps as AriaTableFooterProps,
    TableHeaderProps as AriaTableHeaderProps,
    TableLoadMoreItemProps as AriaTableLoadMoreItemProps,
    TableProps as AriaTableProps,
} from "react-aria-components";
import {
    Button as AriaButton,
    Cell as AriaCell,
    Collection as AriaCollection,
    Column as AriaColumn,
    ColumnResizer as AriaColumnResizer,
    DropIndicator as AriaDropIndicator,
    Group as AriaGroup,
    ResizableTableContainer as AriaResizableTableContainer,
    Row as AriaRow,
    Table as AriaTable,
    TableBody as AriaTableBody,
    TableFooter as AriaTableFooter,
    TableHeader as AriaTableHeader,
    TableLoadMoreItem as AriaTableLoadMoreItem,
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

/** Whether the table is rendered inside a `Table.ResizableContainer`, which then acts as the scroll container. */
const TableResizableContext = createContext(false);

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

    const table = (
        <AriaTable className={(state) => cx("w-full overflow-x-hidden", typeof className === "function" ? className(state) : className)} {...props} />
    );

    return (
        <TableContext.Provider value={{ size: context?.size ?? size }}>
            {/* A resizable container already scrolls, so the table can't be wrapped in another scroll container. */}
            {isResizable ? table : <div className={cx("overflow-x-auto", wrapperClassName)}>{table}</div>}
        </TableContext.Provider>
    );
};
TableRoot.displayName = "Table";

const TableResizableContainer = ({ className, ...props }: AriaResizableTableContainerProps) => {
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
}

const TableHeader = <T extends object>({ columns, children, bordered = true, className, size: sizeProp, ...props }: TableHeaderProps<T>) => {
    const context = useContext(TableContext);
    const { selectionBehavior, selectionMode, allowsDragging } = useTableOptions();

    const size = sizeProp ?? context.size;

    return (
        <AriaTableHeader
            {...props}
            className={(state) =>
                cx(
                    "relative bg-secondary",
                    size === "sm" ? "h-9" : "h-11",

                    // Row border—using an "after" pseudo-element to avoid the border taking up space.
                    bordered &&
                        "[&>tr>th]:after:pointer-events-none [&>tr>th]:after:absolute [&>tr>th]:after:inset-x-0 [&>tr>th]:after:bottom-0 [&>tr>th]:after:h-px [&>tr>th]:after:bg-border-secondary [&>tr>th]:focus-visible:after:bg-transparent",

                    typeof className === "function" ? className(state) : className,
                )
            }
        >
            {allowsDragging && <AriaColumn className={cx("relative w-0 py-2 pr-0 pl-4", size === "sm" ? "md:pl-5" : "md:pl-6")} />}
            {selectionBehavior === "toggle" && (
                <AriaColumn className={cx("relative py-2 pr-0 pl-4", size === "sm" ? "w-9 md:pl-5" : "w-11 md:pl-6")}>
                    {selectionMode === "multiple" && (
                        <div className="flex items-start">
                            <Checkbox slot="selection" size="md" />
                        </div>
                    )}
                </AriaColumn>
            )}
            <AriaCollection items={columns}>{children}</AriaCollection>
        </AriaTableHeader>
    );
};

TableHeader.displayName = "TableHeader";

interface TableHeadProps extends AriaColumnProps, Omit<ThHTMLAttributes<HTMLTableCellElement>, "children" | "className" | "style" | "id"> {
    label?: string;
    tooltip?: string;
    /** Whether the column can be resized. Requires the table to be wrapped in a `Table.ResizableContainer`. */
    allowsResizing?: boolean;
}

const TableHead = ({ className, tooltip, label, children, allowsResizing, ...props }: TableHeadProps) => {
    const { selectionBehavior, allowsDragging } = useTableOptions();

    return (
        <AriaColumn
            {...props}
            className={(state) =>
                cx(
                    "relative p-0 px-6 py-2 outline-hidden focus-visible:z-1 focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-bg-primary focus-visible:ring-inset",
                    selectionBehavior === "toggle" && (allowsDragging ? "nth-3:pl-3" : "nth-2:pl-3"),
                    state.allowsSorting && "cursor-pointer",
                    typeof className === "function" ? className(state) : className,
                )
            }
        >
            {(state) => (
                <AriaGroup className={cx("flex items-center gap-1", allowsResizing && "min-w-0")}>
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

                    {allowsResizing && (
                        <AriaColumnResizer
                            className={(resizerState) =>
                                cx(
                                    // A 16px hit area centered on the column divider. On the last column, it stays inside so it can't overflow the table.
                                    "absolute inset-y-0 -right-2 z-10 box-border flex w-4 cursor-col-resize touch-none justify-center overflow-hidden outline-hidden in-[th:last-child]:right-0 in-[th:last-child]:justify-end",
                                    "after:h-full after:w-px after:bg-border-secondary after:transition after:duration-100 after:ease-linear",
                                    (resizerState.isHovered || resizerState.isResizing || resizerState.isFocusVisible) &&
                                        "after:w-0.5 after:bg-fg-brand-primary",
                                )
                            }
                        />
                    )}
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
}

const TableRow = <T extends object>({ columns, children, className, highlightSelectedRow = true, size: sizeProp, ...props }: TableRowProps<T>) => {
    const context = useContext(TableContext);
    const { selectionBehavior, allowsDragging } = useTableOptions();
    const isDragHandlePressed = useRef(false);

    const size = sizeProp ?? context.size;

    return (
        <AriaRow
            {...props}
            className={(state) =>
                cx(
                    "relative outline-focus-ring transition-colors after:pointer-events-none hover:bg-secondary focus-visible:outline-2 focus-visible:-outline-offset-2",
                    size === "sm" ? "h-14" : "h-18",
                    highlightSelectedRow && "selected:bg-secondary",
                    "disabled:cursor-not-allowed disabled:hover:bg-transparent dragging:opacity-50 drop-target:bg-brand-primary",

                    // Row border—using an "after" pseudo-element to avoid the border taking up space. It's hidden on the last row unless the
                    // loading row (also `role="row"`) follows it. `:last-child` won't do, as `Table.LoadMoreItem` always adds a hidden row.
                    "[&:not(:has(~[role=row]))>td]:after:hidden [&>td]:after:absolute [&>td]:after:inset-x-0 [&>td]:after:bottom-0 [&>td]:after:h-px [&>td]:after:w-full [&>td]:after:bg-border-secondary [&>td]:focus-visible:after:opacity-0 focus-visible:[&>td]:after:opacity-0",

                    typeof className === "function" ? className(state) : className,
                )
            }
        >
            {allowsDragging && (
                <AriaCell className="relative h-px p-0">
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
                <AriaCell className={cx("relative py-2 pr-0 pl-4", size === "sm" ? "md:pl-5" : "md:pl-6")}>
                    <div className="flex items-end">
                        <Checkbox slot="selection" size="md" />
                    </div>
                </AriaCell>
            )}
            <AriaCollection items={columns}>{children}</AriaCollection>
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

    const size = sizeProp ?? context.size;

    return (
        <AriaCell
            {...props}
            className={(state) =>
                cx(
                    "relative text-sm text-tertiary outline-focus-ring focus-visible:z-1 focus-visible:outline-2 focus-visible:-outline-offset-2",
                    size === "sm" && "px-5 py-3",
                    size === "md" && "px-6 py-4",

                    selectionBehavior === "toggle" && (allowsDragging ? "nth-3:pl-3" : "nth-2:pl-3"),
                    state.isDisabled && "opacity-50",

                    typeof className === "function" ? className(state) : className,
                )
            }
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
    return <AriaTableFooter {...props} className={cx("border-t border-secondary bg-secondary [&>tr]:hover:bg-transparent", className)} />;
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

export { Table, TableCard };
