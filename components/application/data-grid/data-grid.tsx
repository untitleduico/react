"use client";

import type { CSSProperties, KeyboardEvent, PointerEvent, ReactNode } from "react";
import { createContext, memo, useCallback, useContext, useLayoutEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import {
    ArrowDown,
    ArrowUp,
    Calculator,
    Check,
    ChevronLeft,
    ChevronRight,
    Columns03,
    DotsVertical,
    EyeOff,
    FilterLines,
    LayersThree01,
    Pin01,
    Pin02,
    SwitchHorizontal01,
    SwitchVertical01,
    XClose,
} from "@untitledui/icons";
import { useCollator, useIsSSR } from "react-aria";
import type { Key, Selection, SortDescriptor } from "react-aria-components";
import { Button as AriaButton, Collection as AriaCollection, SubmenuTrigger as AriaSubmenuTrigger, useLocale } from "react-aria-components";
import { Table } from "@/components/application/table/table";
import { ButtonUtility } from "@/components/base/buttons/button-utility";
import { Checkbox } from "@/components/base/checkbox/checkbox";
import { Dropdown } from "@/components/base/dropdown/dropdown";
import { Select } from "@/components/base/select/select";
import { Tooltip, TooltipTrigger } from "@/components/base/tooltip/tooltip";
import { cx } from "@/utils/cx";
import { type DataGridPanel, DataGridToolbar } from "./data-grid-toolbar";
import {
    type DataGridAggregationFunction,
    type DataGridColumn,
    type DataGridDensity,
    type DataGridFilterModel,
    type DataGridFormatters,
    type DataGridGroup,
    type DataGridRowType,
    type DataGridSort,
    aggregateRows,
    aggregationFunctions,
    createFilterItem,
    downloadFile,
    filterRows,
    formatCellValue,
    fromDateInputValue,
    getAggregationFunctions,
    getCellValue,
    getOptionLabel,
    getOptionValue,
    groupRows,
    isFilterActive,
    printRows,
    sortRows,
    toCsv,
    toDate,
    toDateInputValue,
} from "./data-grid-utils";

export type * from "./data-grid-utils";

/** Constants */

const SELECTION_FIELD = "__selection__";
const GROUP_FIELD = "__group__";
const AGGREGATION_ROW_ID = "__aggregation__";

const DEFAULT_WIDTH = 150;
const MIN_WIDTH = 60;
const SELECTION_WIDTH = 48;
const GROUP_WIDTH = 220;

const styles = {
    compact: { row: "h-9", header: "h-9", padding: "px-3", rowHeight: 36, headerHeight: 36, scrollPadding: "scroll-pt-9" },
    standard: { row: "h-13", header: "h-11", padding: "px-4", rowHeight: 52, headerHeight: 44, scrollPadding: "scroll-pt-11" },
    comfortable: { row: "h-16", header: "h-13", padding: "px-5", rowHeight: 64, headerHeight: 52, scrollPadding: "scroll-pt-13" },
} satisfies Record<DataGridDensity, { row: string; header: string; padding: string; rowHeight: number; headerHeight: number; scrollPadding: string }>;

const alignments = {
    left: { text: "text-left", flex: "justify-start" },
    center: { text: "text-center", flex: "justify-center" },
    right: { text: "text-right", flex: "justify-end" },
};

/** Types */

type AnyColumn = DataGridColumn<object>;

type Align = "left" | "center" | "right";

// Data rows are passed to React Aria as they are, so a row keeps its identity and React Aria only re-renders the rows that
// change. Group rows are marked with a symbol, so they can't be mistaken for data rows.
const GROUP_ROW: unique symbol = Symbol("group row");

interface GroupItem {
    [GROUP_ROW]: true;
    group: DataGridGroup<object>;
}

const isGroupItem = (item: object): item is GroupItem => GROUP_ROW in item;

interface PinnedPosition {
    side: "left" | "right";
    /** The position among the pinned columns of its side, from the edge inwards. */
    index: number;
    /** The CSS variable with the distance from the edge of the scroll container, measured from the pinned columns before it. */
    variable: string;
    /** The distance from the edge before it's measured, from the column widths, in pixels. */
    offset: number;
    /** Whether this is the column next to the scrolling columns, which shows the divider. */
    isEdge: boolean;
}

interface EditingCell {
    rowId: Key;
    column: AnyColumn;
    row: object;
    /** The element of the cell. The editor is rendered inside it. */
    element: HTMLElement;
    /** The text that starts the edit, such as the key the user typed. */
    initialText?: string;
}

interface EditingStore {
    get: () => EditingCell | null;
    set: (cell: EditingCell | null) => void;
    subscribe: (listener: () => void) => () => void;
}

// The edited cell lives in a small store instead of state, so starting or stopping an edit doesn't re-render the grid.
const createEditingStore = (): EditingStore => {
    let current: EditingCell | null = null;
    const listeners = new Set<() => void>();
    return {
        get: () => current,
        set: (cell) => {
            current = cell;
            listeners.forEach((listener) => listener());
        },
        subscribe: (listener) => {
            listeners.add(listener);
            return () => {
                listeners.delete(listener);
            };
        },
    };
};

export interface DataGridInitialState {
    /** The initial sorted column. */
    sorting?: DataGridSort | null;
    /** The initial filters and quick filter text. */
    filter?: Partial<DataGridFilterModel>;
    /** The initial visibility of columns, by field. Columns are visible unless set to `false`. */
    columnVisibility?: Record<string, boolean>;
    /** The initial pinned columns, by field. */
    pinnedColumns?: { left?: string[]; right?: string[] };
    /** The initial number of rows per page. Defaults to the first page size option. */
    pageSize?: number;
    /**
     * The initial density.
     * @default "standard"
     */
    density?: DataGridDensity;
    /** The field of the column the rows are initially grouped by. */
    rowGrouping?: string;
    /** The initial aggregation functions, by field. */
    aggregation?: Record<string, DataGridAggregationFunction>;
}

export interface DataGridProps<T extends object> {
    /** The rows to display. Each row needs a unique `id`, or pass `getRowId`. */
    rows: T[];
    /** The column definitions. */
    columns: DataGridColumn<T>[];
    /** Returns the unique id of a row. Defaults to `row.id`. */
    getRowId?: (row: T) => Key;
    /**
     * The accessible name of the grid.
     * @default "Data grid"
     */
    "aria-label"?: string;
    /** The id of the element that labels the grid. */
    "aria-labelledby"?: string;
    /** Whether to show the toolbar with the columns, filters, density and export controls, and the quick filter. */
    showToolbar?: boolean;
    /** Whether to show a column of checkboxes to select rows. */
    checkboxSelection?: boolean;
    /** Whether clicking a row leaves the selection unchanged. Rows are then selected with the checkboxes or the keyboard. */
    disableRowSelectionOnClick?: boolean;
    /** The ids of the selected rows (controlled). */
    selectedKeys?: Set<Key>;
    /** Handler that is called when the selection changes. */
    onSelectionChange?: (keys: Set<Key>) => void;
    /**
     * Whether to split the rows into pages.
     * @default true
     */
    pagination?: boolean;
    /**
     * Whether to render only the rows and columns in view, so pages of any size stay fast. Turn off `pagination` to scroll
     * through every row. The grid needs a height, such as `className="h-130"`.
     * @default false
     */
    virtualized?: boolean;
    /**
     * The options of the rows per page select.
     * @default [25, 50, 100]
     */
    pageSizeOptions?: number[];
    /** Whether the rows are loading. Shows skeleton rows when there are no rows yet. */
    loading?: boolean;
    /** The initial state of the sorting, filters, columns, pagination, density, grouping and aggregation. */
    initialState?: DataGridInitialState;
    /** Handler that is called when an edited row is saved. Return the row to keep, such as the server response. Throw to revert the edit. */
    onRowUpdate?: (newRow: T, oldRow: T) => T | void | Promise<T | void>;
    /**
     * The file name of the CSV export, without the extension.
     * @default "data"
     */
    exportFileName?: string;
    /** The class name of the root element. Give it a height to make the rows scroll inside the grid. */
    className?: string;
}

/** Context */

interface DataGridActions {
    setMenuField: (field: string | null) => void;
    startEditing: (cell: EditingCell) => void;
    stopEditing: () => void;
    commitEdit: (rowId: Key, field: string, value: unknown) => void;
    onColumnMenuAction: (column: AnyColumn, action: Key) => void;
    onAggregationChange: (field: string, aggregation: DataGridAggregationFunction | null) => void;
    openFilterPanel: () => void;
}

// Read by every cell, so it only holds values that rarely change. Selection, sorting and menus don't re-render the cells.
interface DataGridContextValue {
    density: DataGridDensity;
    formatters: DataGridFormatters;
    pinned: Map<string, PinnedPosition>;
    aggregation: Record<string, DataGridAggregationFunction>;
    disableRowSelectionOnClick: boolean;
    virtualized: boolean;
    editingStore: EditingStore;
    actions: DataGridActions;
}

// Read only by the column headers.
interface DataGridHeaderContextValue {
    sort: DataGridSort | null;
    menuField: string | null;
    /** The number of active filters of each column. */
    filterCounts: Map<string, number>;
    groupingHeaderName: string;
    showToolbar: boolean;
    /** The number of visible columns. The last one can't be hidden. */
    visibleColumnCount: number;
}

const DataGridContext = createContext<DataGridContextValue | null>(null);
const DataGridHeaderContext = createContext<DataGridHeaderContextValue | null>(null);

const useDataGrid = () => {
    const context = useContext(DataGridContext);
    if (!context) throw new Error("Data grid components must be rendered inside a DataGrid.");
    return context;
};

const useDataGridHeader = () => {
    const context = useContext(DataGridHeaderContext);
    if (!context) throw new Error("Data grid components must be rendered inside a DataGrid.");
    return context;
};

/** Helpers */

const getAlign = (column: AnyColumn): Align => column.align ?? (column.type === "number" ? "right" : column.type === "boolean" ? "center" : "left");

const getPinnedStyle = (position: PinnedPosition | undefined): CSSProperties | undefined =>
    position ? { position: "sticky", [position.side]: `var(${position.variable}, ${position.offset}px)` } : undefined;

// When virtualized, React Aria positions the cells, so pinned cells are marked with data attributes instead of styles.
const getPinnedProps = (position: PinnedPosition | undefined, virtualized: boolean) => ({
    style: virtualized ? undefined : getPinnedStyle(position),
    "data-pinned": position?.side,
    "data-pinned-index": position?.index,
    "data-pinned-edge": position?.isEdge || undefined,
});

// React Aria's layout only sticks columns to the left. In a virtualized grid, these rules move the boxes of right-pinned
// cells to the right edge: after the left-pinned boxes in the row's flex layout, and stuck at their offset from the edge.
const rightPinnedBoxClassName = [
    "[&>[role=presentation]:has(>[data-pinned=right])]:left-auto!",
    "[&>[role=presentation]:has(>[data-pinned=right][data-pinned-edge])]:ms-auto",
    "[&>[role=presentation]:has(>[data-pinned=right][data-pinned-index='0'])]:right-(--pinned-right-0)!",
    "[&>[role=presentation]:has(>[data-pinned=right][data-pinned-index='1'])]:right-(--pinned-right-1)!",
    "[&>[role=presentation]:has(>[data-pinned=right][data-pinned-index='2'])]:right-(--pinned-right-2)!",
].join(" ");
const rightPinnedHeaderBoxClassName = [
    "[&>[role=row]>[role=presentation]:has(>[data-pinned=right])]:left-auto!",
    "[&>[role=row]>[role=presentation]:has(>[data-pinned=right])]:z-50!",
    "[&>[role=row]>[role=presentation]:has(>[data-pinned=right][data-pinned-edge])]:ms-auto",
    "[&>[role=row]>[role=presentation]:has(>[data-pinned=right][data-pinned-index='0'])]:right-(--pinned-right-0)!",
    "[&>[role=row]>[role=presentation]:has(>[data-pinned=right][data-pinned-index='1'])]:right-(--pinned-right-1)!",
    "[&>[role=row]>[role=presentation]:has(>[data-pinned=right][data-pinned-index='2'])]:right-(--pinned-right-2)!",
].join(" ");

const pinnedEdgeClassName = (position: PinnedPosition | undefined) =>
    position?.isEdge && (position.side === "left" ? "shadow-[inset_-1px_0_0_0] shadow-border-secondary" : "shadow-[inset_1px_0_0_0] shadow-border-secondary");

// Pinned cells need their own background, as the row background doesn't move with them.
const pinnedCellClassName = "z-[2] bg-primary group-hover/row:bg-secondary group-data-[footer]/row:bg-secondary group-data-[selected]/row:bg-secondary";

// With `disableRowSelectionOnClick`, the press never reaches the row, so clicking a cell doesn't select it. React Aria would
// otherwise focus the cell on press, so the cell takes the focus here, unless the press is on something focusable inside it.
const focusCellWithoutSelecting = (event: PointerEvent<HTMLElement>) => {
    event.stopPropagation();
    const cell = event.currentTarget;
    const focusable = event.target instanceof Element ? event.target.closest("a[href], button, input, select, textarea, [tabindex]") : null;
    if (focusable === cell) cell.focus({ preventScroll: true });
};

/** Column header */

interface ColumnMenuProps {
    column: AnyColumn;
    label: string;
    /** Starts resizing the column with the keyboard, from React Aria's column render props. */
    startResize: () => void;
}

const ColumnMenu = ({ column, label, startResize }: ColumnMenuProps) => {
    const { pinned, aggregation, actions } = useDataGrid();
    const header = useDataGridHeader();
    const isGroupColumn = column.field === GROUP_FIELD;
    const pinnedSide = pinned.get(column.field)?.side;
    const aggregations = column.aggregable ? getAggregationFunctions(column.type) : [];
    const isOpen = header.menuField === column.field;

    // Each section is a list of items, in MUI's order. Separators go between the sections that have items.
    const sortDirection = header.sort?.field === column.field ? header.sort.direction : null;
    const sections: ReactNode[][] = [
        column.sortable !== false
            ? [
                  sortDirection !== "ascending" && <Dropdown.Item key="sort-ascending" id="sort-ascending" label="Sort ascending" icon={ArrowUp} />,
                  sortDirection !== "descending" && <Dropdown.Item key="sort-descending" id="sort-descending" label="Sort descending" icon={ArrowDown} />,
                  sortDirection && <Dropdown.Item key="unsort" id="unsort" label="Unsort" icon={SwitchVertical01} />,
              ]
            : [],
        [
            // The column dividers aren't reachable with the keyboard, so the menu offers resizing. The arrow keys then resize the column.
            column.resizable !== false && <Dropdown.Item key="resize" id="resize" label="Resize column" icon={SwitchHorizontal01} />,
        ],
        !isGroupColumn && column.pinnable !== false
            ? [
                  pinnedSide !== "left" && <Dropdown.Item key="pin-left" id="pin-left" label="Pin to left" icon={Pin01} />,
                  pinnedSide !== "right" && <Dropdown.Item key="pin-right" id="pin-right" label="Pin to right" icon={Pin01} />,
                  pinnedSide && <Dropdown.Item key="unpin" id="unpin" label="Unpin" icon={Pin02} />,
              ]
            : [],
        header.showToolbar && !isGroupColumn && column.filterable !== false
            ? [<Dropdown.Item key="filter" id="filter" label="Filter" icon={FilterLines} />]
            : [],
        [
            aggregations.length > 0 && (
                <AriaSubmenuTrigger key="aggregation">
                    <Dropdown.Item id="aggregation" label="Aggregation" icon={Calculator} />
                    <Dropdown.Popover placement="end top" className="w-44">
                        <Dropdown.Menu
                            aria-label="Aggregation"
                            selectionMode="single"
                            disallowEmptySelection
                            selectedKeys={new Set<Key>([aggregation[column.field] ?? "none"])}
                            onSelectionChange={(keys) => {
                                const [key] = keys === "all" ? [] : [...keys];
                                actions.onAggregationChange(column.field, key === "none" || key === undefined ? null : (key as DataGridAggregationFunction));
                            }}
                        >
                            <Dropdown.Item id="none" label="None" />
                            {aggregations.map((name) => (
                                <Dropdown.Item key={name} id={name} label={aggregationFunctions[name].label} />
                            ))}
                        </Dropdown.Menu>
                    </Dropdown.Popover>
                </AriaSubmenuTrigger>
            ),
            isGroupColumn && <Dropdown.Item key="ungroup" id="ungroup" label={`Stop grouping by ${header.groupingHeaderName}`} icon={LayersThree01} />,
            !isGroupColumn && column.groupable && <Dropdown.Item key="group" id="group" label={`Group by ${label}`} icon={LayersThree01} />,
        ],
        !isGroupColumn
            ? [
                  column.hideable !== false && (
                      // The last visible column can't be hidden.
                      <Dropdown.Item key="hide" id="hide" label="Hide column" icon={EyeOff} isDisabled={header.visibleColumnCount <= 1} />
                  ),
                  header.showToolbar && <Dropdown.Item key="manage" id="manage" label="Manage columns" icon={Columns03} />,
              ]
            : [],
    ]
        .map((section) => section.filter(Boolean))
        .filter((section) => section.length > 0);

    if (sections.length === 0) return null;

    return (
        <Dropdown.Root isOpen={isOpen} onOpenChange={(open) => actions.setMenuField(open ? column.field : null)}>
            <AriaButton
                aria-label={`${label} column menu`}
                // Like MUI, arrow keys focus the header itself, where Enter sorts. Ctrl+Enter or Alt+ArrowDown opens this menu.
                data-react-aria-prevent-focus
                className={(state) =>
                    cx(
                        "flex shrink-0 cursor-pointer overflow-hidden rounded-md text-fg-quaternary outline-focus-ring transition duration-100 ease-linear hover:bg-primary_hover hover:text-fg-quaternary_hover",
                        // Like MUI, the menu button takes no space until the header is hovered or focused, or the menu is open.
                        "w-0 p-0 opacity-0 group-hover/column:w-5 group-hover/column:p-0.5 group-hover/column:opacity-100",
                        "group-focus-within/column:w-5 group-focus-within/column:p-0.5 group-focus-within/column:opacity-100 pointer-coarse:w-5 pointer-coarse:p-0.5 pointer-coarse:opacity-100",
                        (state.isFocusVisible || isOpen) && "w-5 p-0.5 opacity-100",
                        state.isFocusVisible && "outline-2",
                    )
                }
            >
                <DotsVertical className="size-4" aria-hidden="true" />
            </AriaButton>

            <Dropdown.Popover placement="bottom end" className="w-56">
                {/* The menu takes the focus, also when it's opened with the keyboard shortcut, so Escape closes it. */}
                <Dropdown.Menu
                    aria-label={`${label} column menu`}
                    autoFocus="first"
                    onAction={(key) => (key === "resize" ? startResize() : actions.onColumnMenuAction(column, key))}
                >
                    {sections.map((section, index) => [
                        index > 0 && <Dropdown.Separator key={`separator-${index}`} />,
                        <Dropdown.Section key={`section-${index}`}>{section}</Dropdown.Section>,
                    ])}
                </Dropdown.Menu>
            </Dropdown.Popover>
        </Dropdown.Root>
    );
};

interface ColumnHeaderProps {
    /** The id React Aria passes to items of a collection. */
    id?: Key;
    column: AnyColumn;
    defaultWidth: number | `${number}fr`;
    isRowHeader: boolean;
}

const ColumnHeader = ({ column, defaultWidth, isRowHeader }: ColumnHeaderProps) => {
    const { density, pinned: pinnedColumns, aggregation: aggregationModel, virtualized, actions } = useDataGrid();
    const header = useDataGridHeader();
    const label = column.headerName ?? column.field;
    const align = getAlign(column);
    const pinned = pinnedColumns.get(column.field);
    const aggregation = aggregationModel[column.field];
    const filterCount = header.filterCounts.get(column.field) ?? 0;
    const allowsSorting = column.sortable !== false && column.type !== "actions";
    const hasMenu = column.type !== "actions";
    const { setMenuField } = actions;

    // Like MUI, Ctrl+Enter or Alt+ArrowDown opens the column menu. A native listener runs before React Aria's handlers, so
    // stopping the event keeps the header from also sorting or moving the focus. It's attached with a callback ref because
    // React Aria renders the <th> outside this component.
    const attachKeyboardShortcuts = useCallback(
        (element: HTMLElement | null) => {
            if (!element || !hasMenu) return;

            const handleKeyDown = (event: globalThis.KeyboardEvent) => {
                if (!(event.target instanceof Node) || !element.contains(event.target)) return;
                if ((event.key === "Enter" && (event.ctrlKey || event.metaKey)) || (event.key === "ArrowDown" && event.altKey)) {
                    event.preventDefault();
                    event.stopPropagation();
                    setMenuField(column.field);
                }
            };

            element.addEventListener("keydown", handleKeyDown);
            return () => element.removeEventListener("keydown", handleKeyDown);
        },
        [hasMenu, column.field, setMenuField],
    );

    return (
        <Table.Head
            id={column.field}
            data-field={column.field}
            textValue={label}
            isRowHeader={isRowHeader}
            allowsSorting={allowsSorting}
            defaultWidth={defaultWidth}
            minWidth={column.minWidth ?? MIN_WIDTH}
            maxWidth={column.maxWidth}
            {...getPinnedProps(pinned, virtualized)}
            ref={attachKeyboardShortcuts}
            aria-keyshortcuts={hasMenu ? "Control+Enter Alt+ArrowDown" : undefined}
            align={align}
            tooltip={column.description}
            allowsResizing={column.resizable !== false}
            // Arrow keys focus the header itself, like MUI's. The column menu starts keyboard resizing.
            isResizerFocusable={false}
            contentTrailing={hasMenu ? (state) => <ColumnMenu column={column} label={label} startResize={state.startResize} /> : undefined}
            className={cx(
                "group/column bg-secondary py-0",
                styles[density].header,
                styles[density].padding,
                // Pinned headers sit above the column dividers (z-10) of the headers that scroll under them.
                pinned ? "z-20" : "focus-visible:z-1",
                pinnedEdgeClassName(pinned),
            )}
        >
            <span className={cx("flex min-w-0 flex-col", align === "right" && "items-end")}>
                <span className="truncate text-xs font-semibold text-quaternary">{label}</span>
                {/* Like MUI, an aggregated column shows its function under the name. */}
                {aggregation && (
                    <span className="truncate text-xs leading-4 font-normal text-quaternary">{aggregationFunctions[aggregation].label.toLowerCase()}</span>
                )}
            </span>

            {filterCount > 0 && (
                <Tooltip title={filterCount === 1 ? "1 active filter" : `${filterCount} active filters`} placement="top">
                    <TooltipTrigger
                        onPress={header.showToolbar ? actions.openFilterPanel : undefined}
                        className="flex shrink-0 cursor-pointer rounded-xs text-fg-brand-secondary outline-focus-ring focus-visible:outline-2"
                    >
                        <FilterLines className="size-3.5 stroke-[2.5px]" />
                    </TooltipTrigger>
                </Tooltip>
            )}
        </Table.Head>
    );
};

/** Cell editing */

// The editors fill the whole cell, whatever its height.
const inputClassName =
    "absolute inset-0 size-full min-w-0 bg-primary text-sm text-primary outline-hidden ring-2 ring-brand ring-inset aria-invalid:ring-error placeholder:text-placeholder";

// Moves the focus back to the edited cell, or to the next cell, after editing with the keyboard. Cells are found by their
// column index and rows by their row index, as a virtualized grid doesn't keep them as siblings in the DOM.
const focusAfterEdit = (cell: HTMLElement, move?: "next" | "previous" | "down") =>
    requestAnimationFrame(() => {
        let target: Element | null = cell;
        const row = cell.closest("[role=row]");
        const columnIndex = Number(cell.dataset.columnIndex);
        if (move === "next" || move === "previous") {
            target = row?.querySelector(`[data-column-index="${columnIndex + (move === "next" ? 1 : -1)}"]`) ?? cell;
        } else if (move === "down") {
            // The cell in the same column of the next row, or this cell on the last row.
            const rowIndex = Number(row?.getAttribute("aria-rowindex"));
            const nextRow = rowIndex
                ? cell.closest("[role=grid], [role=treegrid]")?.querySelector(`[role=row][aria-rowindex="${rowIndex + 1}"]`)
                : row?.nextElementSibling;
            target = nextRow?.querySelector(`[data-column-index="${columnIndex}"]`) ?? cell;
        }
        // After a click elsewhere, the focus stays where the user put it.
        if (target instanceof HTMLElement && (move || cell.contains(document.activeElement) || document.activeElement === document.body)) target.focus();
    });

const CellEditor = ({ cell }: { cell: EditingCell }) => {
    const { density, actions } = useDataGrid();
    const { column, row, rowId, element } = cell;
    const isDone = useRef(false);
    const value = getCellValue(row, column);
    const label = `Edit ${column.headerName ?? column.field}`;

    const [text, setText] = useState(() => {
        if (cell.initialText !== undefined) return cell.initialText;
        if (column.type === "date" || column.type === "dateTime") return toDateInputValue(value);
        return value == null ? "" : String(value);
    });
    const [isChecked, setIsChecked] = useState(Boolean(value));
    const [isInvalid, setIsInvalid] = useState(false);

    const parse = (): { value: unknown } | null => {
        if (column.type === "boolean") return { value: isChecked };
        if (column.valueParser) return { value: column.valueParser(text, row) };
        if (column.type === "number") {
            if (text.trim() === "") return { value: null };
            const number = Number(text);
            return Number.isNaN(number) ? null : { value: number };
        }
        if (column.type === "date" || column.type === "dateTime") return { value: text ? fromDateInputValue(text) : null };
        return { value: text };
    };

    const commit = (move?: "next" | "previous" | "down") => {
        if (isDone.current) return;
        const parsed = parse();
        if (!parsed) {
            setIsInvalid(true);
            return;
        }
        isDone.current = true;
        actions.commitEdit(rowId, column.field, parsed.value);
        focusAfterEdit(element, move);
    };

    const cancel = () => {
        if (isDone.current) return;
        isDone.current = true;
        actions.stopEditing();
        focusAfterEdit(element);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Enter") {
            // Like MUI, Enter saves and moves the focus to the cell below.
            event.preventDefault();
            commit("down");
        } else if (event.key === "Escape") {
            event.preventDefault();
            cancel();
        } else if (event.key === "Tab") {
            event.preventDefault();
            commit(event.shiftKey ? "previous" : "next");
        }
    };

    if (column.type === "singleSelect") {
        const options = (column.valueOptions ?? []).map((option) => ({ id: getOptionValue(option), label: getOptionLabel(option) }));

        return (
            <div className="absolute inset-0 flex items-center bg-primary px-1.5" onKeyDown={handleKeyDown}>
                <Select
                    size="sm"
                    aria-label={label}
                    autoFocus
                    defaultOpen
                    selectedKey={text || null}
                    onSelectionChange={(key) => {
                        if (isDone.current || key === null) return;
                        isDone.current = true;
                        actions.commitEdit(rowId, column.field, String(key));
                        focusAfterEdit(element);
                    }}
                    items={options}
                    className="w-full"
                >
                    {(option) => <Select.Item id={option.id}>{option.label}</Select.Item>}
                </Select>
            </div>
        );
    }

    if (column.type === "boolean") {
        return (
            <div className="absolute inset-0 flex items-center justify-center bg-primary ring-2 ring-brand ring-inset" onKeyDown={handleKeyDown}>
                <Checkbox aria-label={label} autoFocus isSelected={isChecked} onChange={setIsChecked} onBlur={() => commit()} />
            </div>
        );
    }

    return (
        <input
            aria-label={label}
            aria-invalid={isInvalid || undefined}
            autoFocus
            type={column.type === "date" || column.type === "dateTime" ? "date" : "text"}
            inputMode={column.type === "number" ? "decimal" : undefined}
            value={text}
            onChange={(event) => {
                setText(event.target.value);
                setIsInvalid(false);
            }}
            onKeyDown={handleKeyDown}
            onBlur={() => commit()}
            className={cx(inputClassName, styles[density].padding, column.type === "number" && "text-right tabular-nums")}
        />
    );
};

// Renders the editor of the edited cell. The editor is portalled into the <td>, so it covers the cell, moves with pinned
// columns and stays inside the grid for assistive technology. In the React tree, though, it sits outside React Aria's
// table: its keys don't reach the grid's keyboard navigation, and opening it doesn't re-render the table.
const CellEditorLayer = () => {
    const { editingStore } = useDataGrid();
    const cell = useSyncExternalStore(editingStore.subscribe, editingStore.get, () => null);
    if (!cell) return null;
    return createPortal(<CellEditor key={`${String(cell.rowId)}:${cell.column.field}`} cell={cell} />, cell.element);
};

/** Cells */

interface GridCellContentProps {
    column: AnyColumn;
    row: object;
    rowId: Key;
    rowType: DataGridRowType;
    value: unknown;
    formattedValue: string;
    isAggregated: boolean;
    label?: ReactNode;
    align: Align;
}

// React Aria re-renders every cell when the focus or the selection changes. The content is memoized, so those re-renders
// skip it unless something it shows changed.
const GridCellContent = memo(function GridCellContent({
    column,
    row,
    rowId,
    rowType,
    value,
    formattedValue,
    isAggregated,
    label,
    align,
}: GridCellContentProps) {
    let content: ReactNode = null;
    if (label !== undefined && !isAggregated) content = label;
    else if (column.field === GROUP_FIELD || (rowType !== "row" && !isAggregated)) content = null;
    else if (column.renderCell) content = column.renderCell({ row, rowId, field: column.field, value, formattedValue, rowType });
    else if (column.type === "boolean" && rowType === "row") {
        content = value ? (
            <Check className="size-4 text-fg-success-secondary" aria-label="Yes" />
        ) : (
            <XClose className="size-4 text-fg-quaternary" aria-label="No" />
        );
    } else content = <span className={cx("truncate", column.type === "number" && "tabular-nums")}>{formattedValue}</span>;

    return <div className={cx("flex min-w-0 items-center gap-2", alignments[align].flex)}>{content}</div>;
});

interface GridCellProps {
    /** The id React Aria passes to items of a collection. */
    id?: Key;
    column: AnyColumn;
    row: object;
    rowId: Key;
    rowType: DataGridRowType;
    /** The aggregated values shown in group rows and the aggregation footer. */
    aggregates?: Record<string, unknown>;
    /** A label shown instead of the value, such as the group name or "Total". */
    label?: ReactNode;
}

const GridCell = ({ column, row, rowId, rowType, aggregates, label }: GridCellProps) => {
    const { density, formatters, pinned: pinnedColumns, aggregation, disableRowSelectionOnClick, virtualized, actions } = useDataGrid();
    const cellRef = useRef<HTMLTableCellElement>(null);
    const align = getAlign(column);
    const pinned = pinnedColumns.get(column.field);
    const isAggregated = rowType !== "row" && aggregates !== undefined && column.field in aggregates;
    const isEditable = column.editable === true && rowType === "row" && column.type !== "actions";

    let value: unknown = null;
    let formattedValue = "";
    if (rowType === "row") {
        value = getCellValue(row, column);
        formattedValue = formatCellValue(value, row, column, formatters);
    } else if (isAggregated) {
        value = aggregates[column.field];
        formattedValue =
            aggregation[column.field] === "size" && typeof value === "number"
                ? formatters.number.format(value)
                : formatCellValue(value, row, column, formatters);
    }

    // Enter, F2, Backspace, Delete or typing a character starts editing the focused cell, like a spreadsheet. A native listener
    // runs before React Aria's handlers, so stopping the event keeps the grid from also selecting the row or typing ahead. It's
    // attached with a callback ref because React Aria renders the <td> outside this component.
    const { startEditing } = actions;
    const attachCell = useCallback(
        (cell: HTMLTableCellElement | null) => {
            cellRef.current = cell;
            if (!cell || !isEditable) return;

            const handleKeyDown = (event: globalThis.KeyboardEvent) => {
                // Only when the cell itself has the focus, not an element inside it, such as the editor.
                if (event.target !== cell) return;
                const isText = column.type === undefined || column.type === "string" || column.type === "number";
                const isPrintable = event.key.length === 1 && event.key !== " " && !event.ctrlKey && !event.metaKey && !event.altKey;

                if (event.key === "Enter" || event.key === "F2") startEditing({ rowId, column, row, element: cell });
                else if (isText && (event.key === "Backspace" || event.key === "Delete")) startEditing({ rowId, column, row, element: cell, initialText: "" });
                else if (isText && isPrintable) startEditing({ rowId, column, row, element: cell, initialText: event.key });
                else return;

                event.preventDefault();
                event.stopPropagation();
            };

            cell.addEventListener("keydown", handleKeyDown);
            return () => cell.removeEventListener("keydown", handleKeyDown);
        },
        [isEditable, column, row, rowId, startEditing],
    );

    return (
        <Table.Cell
            ref={attachCell}
            data-field={column.field}
            textValue={formattedValue}
            {...getPinnedProps(pinned, virtualized)}
            onDoubleClick={isEditable ? () => cellRef.current && startEditing({ rowId, column, row, element: cellRef.current }) : undefined}
            onPointerDown={disableRowSelectionOnClick ? focusCellWithoutSelecting : undefined}
            className={cx(
                "truncate py-0",
                styles[density].padding,
                alignments[align].text,
                rowType !== "row" || column.isRowHeader ? "font-medium text-primary" : undefined,
                pinned && pinnedCellClassName,
                pinnedEdgeClassName(pinned),
                isEditable && "cursor-text",
                column.cellClassName,
            )}
        >
            <GridCellContent
                column={column}
                row={row}
                rowId={rowId}
                rowType={rowType}
                value={value}
                formattedValue={formattedValue}
                isAggregated={isAggregated}
                label={label}
                align={align}
            />
        </Table.Cell>
    );
};

/** Virtualization */

interface TableVirtualizationProps {
    virtualized: boolean;
    density: DataGridDensity;
    stickyColumns: Key[];
    stickyFooter: boolean;
    children: ReactNode;
}

const TableVirtualization = ({ virtualized, density, stickyColumns, stickyFooter, children }: TableVirtualizationProps) =>
    virtualized ? (
        <Table.Virtualizer
            rowHeight={styles[density].rowHeight}
            headingHeight={styles[density].headerHeight}
            stickyColumns={stickyColumns}
            stickyFooter={stickyFooter}
        >
            {children}
        </Table.Virtualizer>
    ) : (
        children
    );

/** Main component */

const defaultGetRowId = (row: object): Key => {
    const id = (row as { id?: unknown }).id;
    if (typeof id === "string" || typeof id === "number") return id;
    throw new Error("Each row of the DataGrid needs an `id`. Pass `getRowId` to use another field.");
};

export const DataGrid = <T extends object>({
    rows,
    columns,
    getRowId = defaultGetRowId,
    "aria-label": ariaLabel = "Data grid",
    "aria-labelledby": ariaLabelledBy,
    showToolbar = false,
    checkboxSelection = false,
    disableRowSelectionOnClick = false,
    selectedKeys: controlledSelectedKeys,
    onSelectionChange,
    pagination = true,
    virtualized = false,
    pageSizeOptions = [25, 50, 100],
    loading = false,
    initialState,
    onRowUpdate,
    exportFileName = "data",
    className,
}: DataGridProps<T>) => {
    const { locale } = useLocale();
    const isSSR = useIsSSR();
    const collator = useCollator({ numeric: true, sensitivity: "base" });

    // Dates are formatted in UTC on the server and during hydration, so the server and client render the same text.
    const formatters = useMemo<DataGridFormatters>(() => {
        const timeZone = isSSR ? "UTC" : undefined;
        return {
            number: new Intl.NumberFormat(locale),
            date: new Intl.DateTimeFormat(locale, { year: "numeric", month: "short", day: "numeric", timeZone }),
            dateTime: new Intl.DateTimeFormat(locale, { year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "2-digit", timeZone }),
        };
    }, [locale, isSSR]);

    /** State */

    const initialVisibility = initialState?.columnVisibility ?? {};
    const [sort, setSort] = useState<DataGridSort | null>(initialState?.sorting ?? null);
    const [filterModel, setFilterModel] = useState<DataGridFilterModel>({
        items: initialState?.filter?.items ?? [],
        logicOperator: initialState?.filter?.logicOperator ?? "and",
        quickFilter: initialState?.filter?.quickFilter ?? "",
    });
    const [columnVisibility, setColumnVisibility] = useState<Record<string, boolean>>(initialVisibility);
    const [pinnedColumns, setPinnedColumns] = useState({ left: initialState?.pinnedColumns?.left ?? [], right: initialState?.pinnedColumns?.right ?? [] });
    const [density, setDensity] = useState<DataGridDensity>(initialState?.density ?? "standard");
    // Every row of a page is rendered, so the default page size is the smallest option.
    const [pageSize, setPageSize] = useState(initialState?.pageSize ?? pageSizeOptions[0] ?? 25);
    const [page, setPage] = useState(0);
    const [uncontrolledSelectedKeys, setUncontrolledSelectedKeys] = useState<Set<Key>>(new Set());
    const [groupingField, setGroupingField] = useState<string | null>(initialState?.rowGrouping ?? null);
    const [aggregation, setAggregation] = useState<Record<string, DataGridAggregationFunction>>(initialState?.aggregation ?? {});
    const [edits, setEdits] = useState<Map<Key, { original: T; row: T }>>(new Map());
    const [editingStore] = useState(createEditingStore);
    const [openPanel, setOpenPanel] = useState<DataGridPanel | null>(null);
    const [menuField, setMenuField] = useState<string | null>(null);

    const selectedKeys = controlledSelectedKeys ?? uncontrolledSelectedKeys;
    const updateSelection = (keys: Set<Key>) => {
        if (!controlledSelectedKeys) setUncontrolledSelectedKeys(keys);
        onSelectionChange?.(keys);
    };

    /** Columns */

    const anyColumns = columns as unknown as AnyColumn[];
    const columnsByField = useMemo(() => new Map(anyColumns.map((column) => [column.field, column])), [anyColumns]);
    const groupingColumn = groupingField ? columnsByField.get(groupingField) : undefined;
    // Like MUI, the grouping column is 40px wider than the grouped column, to fit the expand button.
    const groupColumnWidth = Math.max(GROUP_WIDTH, (groupingColumn?.width ?? DEFAULT_WIDTH) + 40);

    const visibleColumns = useMemo(() => {
        const isVisible = (column: AnyColumn) => columnVisibility[column.field] !== false && column.field !== groupingField;
        const byField = (field: string) => anyColumns.find((column) => column.field === field && isVisible(column));
        const left = pinnedColumns.left.map(byField).filter((column): column is AnyColumn => column !== undefined);
        const right = pinnedColumns.right.map(byField).filter((column): column is AnyColumn => column !== undefined);
        const middle = anyColumns.filter(
            (column) => isVisible(column) && !pinnedColumns.left.includes(column.field) && !pinnedColumns.right.includes(column.field),
        );
        return [...left, ...middle, ...right];
    }, [anyColumns, columnVisibility, pinnedColumns, groupingField]);

    // The grouping column comes first and shows the group of each row.
    const displayColumns = useMemo<AnyColumn[]>(() => {
        if (!groupingColumn) return visibleColumns;
        return [
            { field: GROUP_FIELD, headerName: groupingColumn.headerName ?? groupingColumn.field, width: groupColumnWidth, filterable: false },
            ...visibleColumns,
        ];
    }, [visibleColumns, groupingColumn, groupColumnWidth]);

    const rowHeaderField = displayColumns.find((column) => column.isRowHeader)?.field ?? displayColumns[0]?.field;
    const rowHeaderColumn = rowHeaderField ? columnsByField.get(rowHeaderField) : undefined;

    // Widths. Without a flex column, the last column that scrolls fills the remaining space.
    const hasFlexColumn = visibleColumns.some((column) => column.flex);
    const lastScrollingField = [...displayColumns].reverse().find((column) => !pinnedColumns.right.includes(column.field))?.field;
    const getDefaultWidth = (column: AnyColumn): number | `${number}fr` => {
        if (column.field === GROUP_FIELD) return groupColumnWidth;
        if (column.flex) return `${column.flex}fr`;
        if (!hasFlexColumn && column.field === lastScrollingField) return "1fr";
        return column.width ?? DEFAULT_WIDTH;
    };

    /** Rows */

    const getFormattedValue = (row: object, column: AnyColumn) => formatCellValue(getCellValue(row, column), row, column, formatters);

    // An edit applies until the row passed in `rows` changes, for example after the parent saves it.
    const effectiveRows = useMemo(
        () =>
            edits.size === 0
                ? rows
                : rows.map((row) => {
                      const edit = edits.get(getRowId(row));
                      return edit && edit.original === row ? edit.row : row;
                  }),
        [rows, edits, getRowId],
    );

    const filteredRows = useMemo(
        () =>
            filterRows(
                effectiveRows as object[],
                filterModel,
                columnsByField,
                [...visibleColumns, ...(groupingColumn ? [groupingColumn] : [])].filter((column) => column.type !== "actions"),
                getFormattedValue,
            ),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [effectiveRows, filterModel, columnsByField, visibleColumns, groupingColumn, formatters],
    );

    const sortedRows = useMemo(
        () => (sort && sort.field !== GROUP_FIELD ? sortRows(filteredRows, sort, columnsByField.get(sort.field), collator) : filteredRows),
        [filteredRows, sort, columnsByField, collator],
    );

    const groups = useMemo(
        () =>
            groupingColumn
                ? groupRows(
                      sortedRows,
                      groupingColumn,
                      getFormattedValue,
                      aggregation,
                      columnsByField,
                      sort?.field === GROUP_FIELD ? sort.direction : "ascending",
                      collator,
                  )
                : null,
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [sortedRows, groupingColumn, aggregation, columnsByField, sort, collator, formatters],
    );

    const totals = useMemo(() => aggregateRows(filteredRows, aggregation, columnsByField), [filteredRows, aggregation, columnsByField]);
    const hasAggregationRow = Object.keys(aggregation).some((field) => displayColumns.some((column) => column.field === field));

    const filterCounts = useMemo(() => {
        const counts = new Map<string, number>();
        for (const item of filterModel.items) {
            if (isFilterActive(item, columnsByField.get(item.field))) counts.set(item.field, (counts.get(item.field) ?? 0) + 1);
        }
        return counts;
    }, [filterModel.items, columnsByField]);

    // The top-level items: data rows, or group rows when grouping.
    const items = useMemo<object[]>(() => (groups ? groups.map((group): GroupItem => ({ [GROUP_ROW]: true, group })) : sortedRows), [groups, sortedRows]);

    const pageCount = Math.max(1, Math.ceil(items.length / pageSize));
    const currentPage = Math.min(page, pageCount - 1);
    const pageItems = useMemo(
        () => (pagination ? items.slice(currentPage * pageSize, (currentPage + 1) * pageSize) : items),
        [items, pagination, currentPage, pageSize],
    );

    /** Pinning */

    const scrollRef = useRef<HTMLDivElement>(null);

    const pinnedLeftFields = useMemo(() => {
        const fields = displayColumns.filter((column) => pinnedColumns.left.includes(column.field)).map((column) => column.field);
        if (fields.length === 0) return [];
        // The selection and grouping columns stay with the pinned columns.
        return [...(checkboxSelection ? [SELECTION_FIELD] : []), ...(groupingColumn ? [GROUP_FIELD] : []), ...fields];
    }, [displayColumns, pinnedColumns.left, checkboxSelection, groupingColumn]);
    const pinnedRightFields = useMemo(
        () => displayColumns.filter((column) => pinnedColumns.right.includes(column.field)).map((column) => column.field),
        [displayColumns, pinnedColumns.right],
    );

    // The pinned columns on each side, from the edge inwards.
    const pinnedSides = useMemo(
        () =>
            [
                { side: "left", fields: pinnedLeftFields },
                { side: "right", fields: [...pinnedRightFields].reverse() },
            ] as const,
        [pinnedLeftFields, pinnedRightFields],
    );

    const declaredWidth = useCallback(
        (field: string) =>
            field === SELECTION_FIELD ? SELECTION_WIDTH : field === GROUP_FIELD ? groupColumnWidth : (columnsByField.get(field)?.width ?? DEFAULT_WIDTH),
        [columnsByField, groupColumnWidth],
    );

    const pinned = useMemo(() => {
        const positions = new Map<string, PinnedPosition>();

        for (const { side, fields } of pinnedSides) {
            let offset = 0;
            fields.forEach((field, index) => {
                positions.set(field, { side, index, variable: `--pinned-${side}-${index}`, offset, isEdge: index === fields.length - 1 });
                offset += declaredWidth(field);
            });
        }

        return positions;
    }, [pinnedSides, declaredWidth]);

    // A pinned column sits after the pinned columns before it, whose widths change when resizing. They're measured into the
    // CSS variables of the positions, outside React, so resizing a column doesn't re-render the grid.
    useLayoutEffect(() => {
        const container = scrollRef.current;
        if (!container || pinned.size === 0) return;

        const headers = new Map<string, HTMLElement>();
        for (const header of container.querySelectorAll<HTMLElement>("[role=columnheader][data-field]")) {
            if (header.dataset.field && pinned.has(header.dataset.field)) headers.set(header.dataset.field, header);
        }

        const measure = () => {
            for (const { side, fields } of pinnedSides) {
                let offset = 0;
                fields.forEach((field, index) => {
                    container.style.setProperty(`--pinned-${side}-${index}`, `${offset}px`);
                    offset += headers.get(field)?.getBoundingClientRect().width ?? declaredWidth(field);
                });
            }
        };

        measure();
        const observer = new ResizeObserver(measure);
        headers.forEach((header) => observer.observe(header));
        return () => observer.disconnect();
    }, [pinned, pinnedSides, declaredWidth]);

    /** Actions */

    const commitEdit = async (rowId: Key, field: string, value: unknown) => {
        editingStore.set(null);

        const column = columnsByField.get(field);
        const originalRow = rows.find((row) => getRowId(row) === rowId);
        const currentRow = (effectiveRows as T[]).find((row) => getRowId(row) === rowId);
        if (!column || !originalRow || !currentRow) return;

        const currentValue = getCellValue(currentRow, column);
        const isUnchanged =
            value instanceof Date || currentValue instanceof Date
                ? toDate(value)?.getTime() === toDate(currentValue)?.getTime()
                : Object.is(value, currentValue);
        if (isUnchanged) return;

        const updatedRow = (column.valueSetter ? column.valueSetter(value, currentRow) : { ...currentRow, [field]: value }) as T;
        const previousEdit = edits.get(rowId);
        setEdits((previous) => new Map(previous).set(rowId, { original: originalRow, row: updatedRow }));

        try {
            const savedRow = await onRowUpdate?.(updatedRow, currentRow);
            if (savedRow) setEdits((previous) => new Map(previous).set(rowId, { original: originalRow, row: savedRow }));
        } catch {
            // The update was rejected, so the cell shows its previous value again.
            setEdits((previous) => {
                const next = new Map(previous);
                if (previousEdit) next.set(rowId, previousEdit);
                else next.delete(rowId);
                return next;
            });
        }
    };

    const onColumnMenuAction = (column: AnyColumn, action: Key) => {
        const field = column.field;
        const unpin = (model: typeof pinnedColumns) => ({
            left: model.left.filter((item) => item !== field),
            right: model.right.filter((item) => item !== field),
        });

        switch (action) {
            case "sort-ascending":
            case "sort-descending":
                setSort({ field, direction: action === "sort-ascending" ? "ascending" : "descending" });
                break;
            case "unsort":
                setSort(null);
                break;
            case "filter": {
                // Start a filter on this column, unless it already has one.
                const filterColumn = columnsByField.get(field);
                if (filterColumn && !filterModel.items.some((item) => item.field === field)) {
                    setFilterModel((model) => ({
                        ...model,
                        items: [...model.items.filter((item) => item.value !== "" && item.value !== undefined), createFilterItem(filterColumn)],
                    }));
                }
                setOpenPanel("filters");
                break;
            }
            case "group":
                setGroupingField(field);
                setPage(0);
                break;
            case "ungroup":
                setGroupingField(null);
                setSort((previous) => (previous?.field === GROUP_FIELD ? null : previous));
                break;
            case "pin-left":
                setPinnedColumns((model) => ({ ...unpin(model), left: [...unpin(model).left, field] }));
                break;
            case "pin-right":
                setPinnedColumns((model) => ({ ...unpin(model), right: [field, ...unpin(model).right] }));
                break;
            case "unpin":
                setPinnedColumns(unpin);
                break;
            case "hide":
                setColumnVisibility((model) => ({ ...model, [field]: false }));
                break;
            case "manage":
                setOpenPanel("columns");
                break;
        }
    };

    // The actions in the context keep the same identity, so the cells don't re-render when the grid does. They call the
    // latest version of the functions above, which change with the state.
    const latestActions = useRef<Pick<DataGridActions, "commitEdit" | "onColumnMenuAction"> | null>(null);
    useLayoutEffect(() => {
        latestActions.current = { commitEdit: (rowId, field, value) => void commitEdit(rowId, field, value), onColumnMenuAction };
    });

    const actions = useMemo<DataGridActions>(
        () => ({
            setMenuField,
            startEditing: (cell) => editingStore.set(cell),
            stopEditing: () => editingStore.set(null),
            commitEdit: (rowId, field, value) => latestActions.current?.commitEdit(rowId, field, value),
            onColumnMenuAction: (column, action) => latestActions.current?.onColumnMenuAction(column, action),
            onAggregationChange: (field, aggregationFunction) =>
                setAggregation((model) => {
                    const next = { ...model };
                    if (aggregationFunction) next[field] = aggregationFunction;
                    else delete next[field];
                    return next;
                }),
            openFilterPanel: () => setOpenPanel("filters"),
        }),
        [editingStore],
    );

    const handleSortChange = (descriptor: SortDescriptor) => {
        const field = String(descriptor.column);
        // Like MUI, sorting cycles from ascending to descending to unsorted.
        setSort((previous) => (previous?.field === field && previous.direction === "descending" ? null : { field, direction: descriptor.direction }));
    };

    const handleSelectionChange = (keys: Selection) => {
        // Selecting all from the header checkbox selects every filtered row, not only the current page.
        if (keys === "all") updateSelection(new Set(sortedRows.map((row) => getRowId(row as T))));
        else updateSelection(new Set([...keys].filter((key) => !String(key).startsWith("group:") && key !== AGGREGATION_ROW_ID)));
    };

    const handleExport = (format: "csv" | "print") => {
        const exportColumns = visibleColumns.filter((column) => column.type !== "actions");
        // Like MUI, the export contains the selected rows when there are any, otherwise all filtered rows.
        const exportRows = selectedKeys.size > 0 ? sortedRows.filter((row) => selectedKeys.has(getRowId(row as T))) : sortedRows;
        if (format === "csv") downloadFile(toCsv(exportRows, exportColumns, getFormattedValue), `${exportFileName}.csv`, "text/csv;charset=utf-8");
        else printRows(exportRows, exportColumns, getFormattedValue, exportFileName);
    };

    /** Rendering */

    const contextValue = useMemo<DataGridContextValue>(
        () => ({ density, formatters, pinned, aggregation, disableRowSelectionOnClick, virtualized, editingStore, actions }),
        [density, formatters, pinned, aggregation, disableRowSelectionOnClick, virtualized, editingStore, actions],
    );

    const groupingHeaderName = groupingColumn?.headerName ?? groupingField ?? "";
    const headerContextValue = useMemo<DataGridHeaderContextValue>(
        () => ({ sort, menuField, filterCounts, groupingHeaderName, showToolbar, visibleColumnCount: visibleColumns.length }),
        [sort, menuField, filterCounts, groupingHeaderName, showToolbar, visibleColumns.length],
    );

    const sortDescriptor = useMemo<SortDescriptor | undefined>(() => (sort ? { column: sort.field, direction: sort.direction } : undefined), [sort]);
    const disabledKeys = useMemo(() => [...(groups ? groups.map((group) => group.id) : []), AGGREGATION_ROW_ID], [groups]);
    const selectedCount = selectedKeys.size;
    const firstItem = items.length === 0 ? 0 : currentPage * pageSize + 1;
    const lastItem = Math.min(items.length, (currentPage + 1) * pageSize);

    const stickyColumns = useMemo(() => [...pinnedLeftFields, ...pinnedRightFields], [pinnedLeftFields, pinnedRightFields]);
    const selectionPinned = pinned.get(SELECTION_FIELD);
    const selectionCellProps = (isSelectable: boolean) => ({
        style: virtualized ? undefined : getPinnedStyle(selectionPinned),
        className: cx("py-0 md:pl-4", selectionPinned && pinnedCellClassName, pinnedEdgeClassName(selectionPinned)),
        children: isSelectable ? undefined : null,
    });

    const renderRow = (item: object): ReactNode => {
        const group = isGroupItem(item) ? item.group : null;
        const rowId = group ? group.id : getRowId(item as T);
        const row = group ? (group.rows[0] ?? {}) : item;

        return (
            <Table.Row
                id={rowId}
                textValue={group ? group.label : rowHeaderColumn ? getFormattedValue(row, rowHeaderColumn) : ""}
                selectionCellProps={selectionCellProps(!group)}
                className={cx("group/row", styles[density].row, virtualized && rightPinnedBoxClassName)}
            >
                <AriaCollection items={displayColumns} dependencies={[item]}>
                    {(column) => (
                        <GridCell
                            id={column.field}
                            column={column}
                            row={row}
                            rowId={rowId}
                            rowType={group ? "group" : "row"}
                            aggregates={group?.aggregates}
                            label={
                                group && column.field === GROUP_FIELD ? (
                                    <span className="flex min-w-0 items-center gap-1.5">
                                        <span className="truncate font-medium text-primary">{group.label}</span>
                                        <span className="shrink-0 text-tertiary">({group.rows.length})</span>
                                    </span>
                                ) : undefined
                            }
                        />
                    )}
                </AriaCollection>
                {group && <AriaCollection items={group.rows}>{renderRow}</AriaCollection>}
            </Table.Row>
        );
    };

    return (
        <DataGridContext.Provider value={contextValue}>
            <DataGridHeaderContext.Provider value={headerContextValue}>
                <div className={cx("flex flex-col overflow-hidden rounded-xl bg-primary shadow-xs ring-1 ring-secondary", className)}>
                    {showToolbar && (
                        <DataGridToolbar
                            columns={anyColumns.filter((column) => column.type !== "actions")}
                            columnVisibility={columnVisibility}
                            onColumnVisibilityChange={setColumnVisibility}
                            initialColumnVisibility={initialVisibility}
                            filterModel={filterModel}
                            onFilterModelChange={(model) => {
                                setFilterModel(model);
                                setPage(0);
                            }}
                            density={density}
                            onDensityChange={setDensity}
                            onExport={handleExport}
                            openPanel={openPanel}
                            onOpenPanelChange={setOpenPanel}
                        />
                    )}

                    <CellEditorLayer />

                    <div className="relative flex min-h-0 flex-1 flex-col" aria-busy={loading || undefined}>
                        {loading && items.length > 0 && <div aria-hidden="true" className="absolute inset-x-0 top-0 z-30 h-0.5 animate-pulse bg-brand-solid" />}

                        <TableVirtualization
                            virtualized={virtualized}
                            density={density}
                            stickyColumns={stickyColumns}
                            stickyFooter={hasAggregationRow && items.length > 0}
                        >
                            <Table.ResizableContainer ref={scrollRef} className={cx("min-h-0 flex-1", virtualized && "overflow-hidden")}>
                                <Table
                                    aria-label={ariaLabelledBy ? undefined : ariaLabel}
                                    aria-labelledby={ariaLabelledBy}
                                    selectionMode={checkboxSelection ? "multiple" : "single"}
                                    selectionBehavior={checkboxSelection ? "toggle" : "replace"}
                                    selectedKeys={selectedKeys}
                                    onSelectionChange={handleSelectionChange}
                                    disabledKeys={disabledKeys}
                                    disabledBehavior="selection"
                                    sortDescriptor={sortDescriptor}
                                    onSortChange={handleSortChange}
                                    treeColumn={groupingColumn ? GROUP_FIELD : undefined}
                                    className={
                                        virtualized
                                            ? cx("size-full overflow-auto", styles[density].scrollPadding, hasAggregationRow && "scroll-pb-(--footer-height)")
                                            : "w-full border-separate border-spacing-0"
                                    }
                                    style={virtualized ? ({ "--footer-height": `${styles[density].rowHeight}px` } as CSSProperties) : undefined}
                                >
                                    <Table.Header
                                        columns={displayColumns}
                                        dependencies={[groupColumnWidth, hasFlexColumn, lastScrollingField, rowHeaderField, density]}
                                        selectionColumnProps={{
                                            id: SELECTION_FIELD,
                                            width: SELECTION_WIDTH,
                                            minWidth: SELECTION_WIDTH,
                                            style: virtualized ? undefined : getPinnedStyle(pinned.get(SELECTION_FIELD)),
                                            className: cx(
                                                "bg-secondary py-0 md:pl-4",
                                                pinned.has(SELECTION_FIELD) && "z-20",
                                                pinnedEdgeClassName(pinned.get(SELECTION_FIELD)),
                                            ),
                                        }}
                                        className={cx(virtualized ? rightPinnedHeaderBoxClassName : "sticky top-0", "z-20", styles[density].header)}
                                    >
                                        {(column) => (
                                            <ColumnHeader
                                                id={column.field}
                                                column={column}
                                                defaultWidth={getDefaultWidth(column)}
                                                isRowHeader={column.field === rowHeaderField}
                                            />
                                        )}
                                    </Table.Header>

                                    <Table.Body
                                        items={pageItems}
                                        dependencies={[displayColumns, density, checkboxSelection, rowHeaderColumn]}
                                        renderEmptyState={() =>
                                            loading ? (
                                                <div className="flex flex-col">
                                                    {Array.from({ length: 6 }, (_, index) => (
                                                        <div
                                                            key={index}
                                                            className={cx("flex items-center gap-6 border-b border-secondary px-4", styles[density].row)}
                                                        >
                                                            <div className="h-3 w-1/4 animate-pulse rounded-full bg-quaternary" />
                                                            <div className="h-3 w-1/6 animate-pulse rounded-full bg-quaternary" />
                                                            <div className="h-3 w-1/5 animate-pulse rounded-full bg-quaternary" />
                                                        </div>
                                                    ))}
                                                </div>
                                            ) : (
                                                <div className="flex flex-col items-center justify-center gap-1 px-4 py-16 text-center">
                                                    <p className="text-sm font-semibold text-primary">{rows.length === 0 ? "No rows" : "No results found"}</p>
                                                    {rows.length > 0 && <p className="text-sm text-tertiary">Try a different search or filter.</p>}
                                                </div>
                                            )
                                        }
                                    >
                                        {renderRow}
                                    </Table.Body>

                                    {hasAggregationRow && items.length > 0 && (
                                        <Table.Footer className={cx("z-20 border-t-0", !virtualized && "sticky bottom-0")}>
                                            <Table.Row
                                                id={AGGREGATION_ROW_ID}
                                                data-footer
                                                selectionCellProps={selectionCellProps(false)}
                                                className={cx(
                                                    "group/row bg-secondary hover:bg-secondary",
                                                    styles[density].row,
                                                    "[&>td]:before:pointer-events-none [&>td]:before:absolute [&>td]:before:inset-x-0 [&>td]:before:top-0 [&>td]:before:h-px [&>td]:before:bg-border-secondary",
                                                    virtualized &&
                                                        "before:absolute before:inset-x-0 before:top-0 before:z-10 before:h-px before:bg-border-secondary",
                                                    virtualized && rightPinnedBoxClassName,
                                                )}
                                            >
                                                <AriaCollection items={displayColumns} dependencies={[totals, filteredRows]}>
                                                    {(column) => (
                                                        <GridCell
                                                            id={column.field}
                                                            column={column}
                                                            row={filteredRows[0] ?? {}}
                                                            rowId={AGGREGATION_ROW_ID}
                                                            rowType="aggregation"
                                                            aggregates={totals}
                                                            label={
                                                                column.field === displayColumns[0]?.field ? (
                                                                    <span className="font-medium text-primary">Total</span>
                                                                ) : undefined
                                                            }
                                                        />
                                                    )}
                                                </AriaCollection>
                                            </Table.Row>
                                        </Table.Footer>
                                    )}
                                </Table>
                            </Table.ResizableContainer>
                        </TableVirtualization>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-3 border-t border-secondary px-4 py-3">
                        <p className="text-sm text-tertiary">
                            {selectedCount > 0 ? `${formatters.number.format(selectedCount)} ${selectedCount === 1 ? "row" : "rows"} selected` : null}
                        </p>

                        {pagination ? (
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                                {/* Like MUI, the page size select only shows when there's a choice. */}
                                {pageSizeOptions.length > 1 && (
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm text-tertiary">Rows per page</span>
                                        <Select
                                            size="sm"
                                            aria-label="Rows per page"
                                            selectedKey={pageSize}
                                            onSelectionChange={(key) => {
                                                setPageSize(Number(key));
                                                setPage(0);
                                            }}
                                            items={pageSizeOptions.map((option) => ({ id: option, label: String(option) }))}
                                            className="w-20"
                                        >
                                            {(option) => <Select.Item id={option.id}>{option.label}</Select.Item>}
                                        </Select>
                                    </div>
                                )}
                                <span className="text-sm text-secondary tabular-nums">
                                    {formatters.number.format(firstItem)}–{formatters.number.format(lastItem)} of {formatters.number.format(items.length)}
                                </span>
                                <div className="flex gap-1">
                                    <ButtonUtility
                                        size="xs"
                                        color="secondary"
                                        tooltip="Go to previous page"
                                        icon={ChevronLeft}
                                        isDisabled={currentPage === 0}
                                        onClick={() => setPage(currentPage - 1)}
                                    />
                                    <ButtonUtility
                                        size="xs"
                                        color="secondary"
                                        tooltip="Go to next page"
                                        icon={ChevronRight}
                                        isDisabled={currentPage >= pageCount - 1}
                                        onClick={() => setPage(currentPage + 1)}
                                    />
                                </div>
                            </div>
                        ) : (
                            <p className="text-sm text-tertiary">
                                Total rows: {formatters.number.format(items.length)}
                                {!groups && items.length < rows.length && ` of ${formatters.number.format(rows.length)}`}
                            </p>
                        )}
                    </div>
                </div>
            </DataGridHeaderContext.Provider>
        </DataGridContext.Provider>
    );
};
