"use client";

import { ArrowLeft, ArrowRight, ChevronLeft, ChevronLeftDouble, ChevronRight, ChevronRightDouble } from "@untitledui/icons";
import { ButtonGroup, ButtonGroupItem } from "@/components/base/button-group/button-group";
import { Button } from "@/components/base/buttons/button";
import { InputBase } from "@/components/base/input/input";
import { Select } from "@/components/base/select/select";
import { useBreakpoint } from "@/hooks/use-breakpoint";
import { cx } from "@/utils/cx";
import type { PaginationRootProps } from "./pagination-base";
import { Pagination } from "./pagination-base";

interface PaginationProps extends Partial<Omit<PaginationRootProps, "children">> {
    /** Whether the pagination buttons are rounded. */
    rounded?: boolean;
}

const PaginationItem = ({ value, rounded, isCurrent }: { value: number; rounded?: boolean; isCurrent: boolean }) => {
    return (
        <Pagination.Item
            value={value}
            isCurrent={isCurrent}
            className={({ isSelected }) =>
                cx(
                    "flex size-9 cursor-pointer items-center justify-center p-3 text-sm font-medium text-quaternary outline-focus-ring transition duration-100 ease-linear hover:bg-primary_hover hover:text-secondary focus-visible:z-10 focus-visible:bg-primary_hover focus-visible:outline-2 focus-visible:outline-offset-2",
                    rounded ? "rounded-full" : "rounded-lg",
                    isSelected && "bg-primary_hover text-secondary",
                )
            }
        >
            {value}
        </Pagination.Item>
    );
};

interface MobilePaginationProps {
    /** The current page. */
    page?: number;
    /** The total number of pages. */
    total?: number;
    /** The class name of the pagination component. */
    className?: string;
    /** The function to call when the page changes. */
    onPageChange?: (page: number) => void;
}

const MobilePagination = ({ page = 1, total = 10, className, onPageChange }: MobilePaginationProps) => {
    return (
        <nav aria-label="Pagination" className={cx("flex items-center justify-between md:hidden", className)}>
            <Button
                aria-label="Go to previous page"
                iconLeading={ArrowLeft}
                color="secondary"
                size="sm"
                onClick={() => onPageChange?.(Math.max(0, page - 1))}
            />

            <span className="text-sm text-fg-secondary">
                Page <span className="font-medium">{page}</span> of <span className="font-medium">{total}</span>
            </span>

            <Button
                aria-label="Go to next page"
                iconLeading={ArrowRight}
                color="secondary"
                size="sm"
                onClick={() => onPageChange?.(Math.min(total, page + 1))}
            />
        </nav>
    );
};

export const PaginationPageDefault = ({ rounded, page = 1, total = 10, className, ...props }: PaginationProps) => {
    const isDesktop = useBreakpoint("md");

    return (
        <Pagination.Root
            {...props}
            page={page}
            total={total}
            className={cx("flex w-full items-center justify-between gap-3 border-t border-secondary pt-4 md:pt-5", className)}
        >
            <div className="hidden flex-1 justify-start md:flex">
                <Pagination.PrevTrigger asChild>
                    <Button iconLeading={ArrowLeft} color="link-gray" size="sm">
                        {isDesktop ? "Previous" : undefined}
                    </Button>
                </Pagination.PrevTrigger>
            </div>

            <Pagination.PrevTrigger asChild className="md:hidden">
                <Button iconLeading={ArrowLeft} color="secondary" size="sm">
                    {isDesktop ? "Previous" : undefined}
                </Button>
            </Pagination.PrevTrigger>

            <Pagination.Context>
                {({ pages, currentPage, total }) => (
                    <>
                        <div className="hidden justify-center gap-0.5 md:flex">
                            {pages.map((page, index) =>
                                page.type === "page" ? (
                                    <PaginationItem key={index} rounded={rounded} {...page} />
                                ) : (
                                    <Pagination.Ellipsis key={index} className="flex size-9 shrink-0 items-center justify-center text-tertiary">
                                        &#8230;
                                    </Pagination.Ellipsis>
                                ),
                            )}
                        </div>

                        <div className="flex justify-center text-sm whitespace-pre text-fg-secondary md:hidden">
                            Page <span className="font-medium">{currentPage}</span> of <span className="font-medium">{total}</span>
                        </div>
                    </>
                )}
            </Pagination.Context>

            <div className="hidden flex-1 justify-end md:flex">
                <Pagination.NextTrigger asChild>
                    <Button iconTrailing={ArrowRight} color="link-gray" size="sm">
                        {isDesktop ? "Next" : undefined}
                    </Button>
                </Pagination.NextTrigger>
            </div>
            <Pagination.NextTrigger asChild className="md:hidden">
                <Button iconTrailing={ArrowRight} color="secondary" size="sm">
                    {isDesktop ? "Next" : undefined}
                </Button>
            </Pagination.NextTrigger>
        </Pagination.Root>
    );
};

export const PaginationPageMinimalCenter = ({ rounded, page = 1, total = 10, className, ...props }: PaginationProps) => {
    const isDesktop = useBreakpoint("md");

    return (
        <Pagination.Root
            {...props}
            page={page}
            total={total}
            className={cx("flex w-full items-center justify-between gap-3 border-t border-secondary pt-4 md:pt-5", className)}
        >
            <div className="flex flex-1 justify-start">
                <Pagination.PrevTrigger asChild>
                    <Button iconLeading={ArrowLeft} color="secondary" size="sm">
                        {isDesktop ? "Previous" : undefined}
                    </Button>
                </Pagination.PrevTrigger>
            </div>

            <Pagination.Context>
                {({ pages, currentPage, total }) => (
                    <>
                        <div className="hidden justify-center gap-0.5 md:flex">
                            {pages.map((page, index) =>
                                page.type === "page" ? (
                                    <PaginationItem key={index} rounded={rounded} {...page} />
                                ) : (
                                    <Pagination.Ellipsis key={index} className="flex size-9 shrink-0 items-center justify-center text-tertiary">
                                        &#8230;
                                    </Pagination.Ellipsis>
                                ),
                            )}
                        </div>

                        <div className="flex justify-center text-sm whitespace-pre text-fg-secondary md:hidden">
                            Page <span className="font-medium">{currentPage}</span> of <span className="font-medium">{total}</span>
                        </div>
                    </>
                )}
            </Pagination.Context>

            <div className="flex flex-1 justify-end">
                <Pagination.NextTrigger asChild>
                    <Button iconTrailing={ArrowRight} color="secondary" size="sm">
                        {isDesktop ? "Next" : undefined}
                    </Button>
                </Pagination.NextTrigger>
            </div>
        </Pagination.Root>
    );
};

export const PaginationCardDefault = ({ rounded, page = 1, total = 10, ...props }: PaginationProps) => {
    const isDesktop = useBreakpoint("md");

    return (
        <Pagination.Root
            {...props}
            page={page}
            total={total}
            className="flex w-full items-center justify-between gap-3 border-t border-secondary px-4 py-3 md:px-6 md:pt-3 md:pb-4"
        >
            <div className="flex flex-1 justify-start">
                <Pagination.PrevTrigger asChild>
                    <Button iconLeading={ArrowLeft} color="secondary" size="sm">
                        {isDesktop ? "Previous" : undefined}
                    </Button>
                </Pagination.PrevTrigger>
            </div>

            <Pagination.Context>
                {({ pages, currentPage, total }) => (
                    <>
                        <div className="hidden justify-center gap-0.5 md:flex">
                            {pages.map((page, index) =>
                                page.type === "page" ? (
                                    <PaginationItem key={index} rounded={rounded} {...page} />
                                ) : (
                                    <Pagination.Ellipsis key={index} className="flex size-9 shrink-0 items-center justify-center text-tertiary">
                                        &#8230;
                                    </Pagination.Ellipsis>
                                ),
                            )}
                        </div>

                        <div className="flex justify-center text-sm whitespace-pre text-fg-secondary md:hidden">
                            Page <span className="font-medium">{currentPage}</span> of <span className="font-medium">{total}</span>
                        </div>
                    </>
                )}
            </Pagination.Context>

            <div className="flex flex-1 justify-end">
                <Pagination.NextTrigger asChild>
                    <Button iconTrailing={ArrowRight} color="secondary" size="sm">
                        {isDesktop ? "Next" : undefined}
                    </Button>
                </Pagination.NextTrigger>
            </div>
        </Pagination.Root>
    );
};

interface PaginationCardMinimalProps {
    /** The current page. */
    page?: number;
    /** The total number of pages. */
    total?: number;
    /** The number of items per page. */
    pageSize?: number;
    /** The alignment of the pagination. */
    align?: "left" | "center" | "right";
    /** The class name of the pagination component. */
    className?: string;
    /** The function to call when the page changes. */
    onPageChange?: (page: number) => void;
    /** The function to call when the page size changes. */
    onPageSizeChange?: (pageSize: number) => void;
}

export const PaginationCardMinimal = ({
    page = 1,
    total = 10,
    pageSize = 10,
    align = "left",
    onPageChange,
    className,
    onPageSizeChange,
}: PaginationCardMinimalProps) => {
    return (
        <div className={cx("border-t border-secondary px-4 py-3 md:px-6 md:pt-3 md:pb-4", className)}>
            <MobilePagination page={page} total={total} onPageChange={onPageChange} />

            <nav aria-label="Pagination" className={cx("hidden items-center gap-3 md:flex", align === "center" && "justify-between")}>
                <div className={cx(align === "center" && "flex flex-1 justify-start")}>
                    <Button isDisabled={page === 1} color="secondary" size="sm" onClick={() => onPageChange?.(Math.max(0, page - 1))}>
                        Previous
                    </Button>
                </div>

                <div
                    className={cx(
                        "flex items-center gap-3",
                        align === "right" && "order-first mr-auto",
                        align === "left" && "order-last ml-auto flex-row-reverse",
                    )}
                >
                    <span className="text-sm font-medium text-fg-secondary">
                        Page {page} of {total}
                    </span>
                    <Select
                        aria-label="Page Size"
                        value={pageSize}
                        onChange={(value) => onPageSizeChange?.(value as number)}
                        size="sm"
                        items={[
                            { label: "10 per page", id: 10 },
                            { label: "25 per page", id: 25 },
                            { label: "50 per page", id: 50 },
                            { label: "100 per page", id: 100 },
                        ]}
                    >
                        {(item) => (
                            <Select.Item id={item.id} key={item.id}>
                                {item.label?.split(" ")[0]}
                            </Select.Item>
                        )}
                    </Select>
                </div>
                <div className={cx(align === "center" && "flex flex-1 justify-end")}>
                    <Button isDisabled={page === total} color="secondary" size="sm" onClick={() => onPageChange?.(Math.min(total, page + 1))}>
                        Next
                    </Button>
                </div>
            </nav>
        </div>
    );
};

interface PaginationButtonGroupProps extends Partial<Omit<PaginationRootProps, "children">> {
    /** The alignment of the pagination. */
    align?: "left" | "center" | "right";
}

export const PaginationButtonGroup = ({ align = "left", page = 1, total = 10, ...props }: PaginationButtonGroupProps) => {
    const isDesktop = useBreakpoint("md");

    return (
        <div
            className={cx(
                "flex border-t border-secondary px-4 py-3 md:px-6 md:pt-3 md:pb-4",
                align === "left" && "justify-start",
                align === "center" && "justify-center",
                align === "right" && "justify-end",
            )}
        >
            <Pagination.Root {...props} page={page} total={total}>
                <Pagination.Context>
                    {({ pages }) => (
                        <ButtonGroup size="sm">
                            <Pagination.PrevTrigger asChild>
                                <ButtonGroupItem iconLeading={ArrowLeft}>{isDesktop ? "Previous" : undefined}</ButtonGroupItem>
                            </Pagination.PrevTrigger>

                            {pages.map((page, index) =>
                                page.type === "page" ? (
                                    <Pagination.Item key={index} {...page} asChild>
                                        <ButtonGroupItem isSelected={page.isCurrent} className="size-9 items-center justify-center">
                                            {page.value}
                                        </ButtonGroupItem>
                                    </Pagination.Item>
                                ) : (
                                    <Pagination.Ellipsis key={index}>
                                        <ButtonGroupItem className="pointer-events-none size-9 items-center justify-center rounded-none!">
                                            &#8230;
                                        </ButtonGroupItem>
                                    </Pagination.Ellipsis>
                                ),
                            )}

                            <Pagination.NextTrigger asChild>
                                <ButtonGroupItem iconTrailing={ArrowRight}>{isDesktop ? "Next" : undefined}</ButtonGroupItem>
                            </Pagination.NextTrigger>
                        </ButtonGroup>
                    )}
                </Pagination.Context>
            </Pagination.Root>
        </div>
    );
};

interface PaginationCardAdvancedProps {
    /** The current page. */
    page?: number;
    /** The total number of pages. */
    total?: number;
    /** The number of items per page. */
    pageSize?: number;
    /** The alignment of the pagination. */
    align?: "space-between" | "center";
    /** The class name of the pagination component. */
    className?: string;
    /** The function to call when the page changes. */
    onPageChange?: (page: number) => void;
    /** The function to call when the page size changes. */
    onPageSizeChange?: (pageSize: number) => void;
}

export const PaginationCardAdvanced = ({
    page = 1,
    total = 10,
    pageSize = 10,
    align = "space-between",
    onPageChange,
    className,
    onPageSizeChange,
}: PaginationCardAdvancedProps) => {
    return (
        <div className={cx("border-t border-secondary px-4 py-3 md:px-6 md:pt-3 md:pb-4", className)}>
            <Pagination.Root
                page={page}
                total={total}
                onPageChange={onPageChange}
                className={cx("flex items-center gap-3", align === "center" && "justify-between")}
            >
                <div className="hidden items-center gap-2 text-sm font-medium whitespace-nowrap text-fg-secondary md:flex">
                    Page
                    <InputBase
                        aria-label="Page"
                        value={page.toString()}
                        onChange={(event) => onPageChange?.(Number(event.target.value))}
                        size="sm"
                        wrapperClassName="min-w-9"
                        inputClassName="text-center min-w-9 field-sizing-content"
                    />
                    of {total}
                </div>

                <hr className={cx("mx-1 h-4 w-px border-l border-primary max-md:hidden", align === "center" && "hidden")} />

                <div className={cx("hidden items-center gap-2 md:flex", align === "center" && "order-last")}>
                    <span className="text-sm font-medium whitespace-nowrap text-secondary">Rows per page</span>
                    <Select
                        aria-label="Page Size"
                        value={pageSize}
                        onChange={(value) => onPageSizeChange?.(value as number)}
                        size="sm"
                        items={[
                            { label: "10", id: 10 },
                            { label: "25", id: 25 },
                            { label: "50", id: 50 },
                            { label: "100", id: 100 },
                        ]}
                    >
                        {(item) => (
                            <Select.Item selectionIndicator="none" id={item.id}>
                                {item.label}
                            </Select.Item>
                        )}
                    </Select>
                </div>

                <div className={cx("flex flex-1 items-center gap-4 md:ml-auto md:justify-end", align === "center" && "md:justify-center")}>
                    <div className="flex gap-2">
                        <Button iconLeading={ChevronLeftDouble} color="secondary" size="sm" isDisabled={page === 1} onClick={() => onPageChange?.(1)} />
                        <Pagination.PrevTrigger asChild>
                            <Button iconLeading={ChevronLeft} color="secondary" size="sm" />
                        </Pagination.PrevTrigger>
                    </div>

                    <Pagination.Context>
                        {({ pages, currentPage, total }) => (
                            <>
                                <div className="hidden justify-center gap-0.5 md:flex">
                                    {pages.map((page, index) =>
                                        page.type === "page" ? (
                                            <PaginationItem key={index} {...page} />
                                        ) : (
                                            <Pagination.Ellipsis key={index} className="flex size-9 shrink-0 items-center justify-center text-tertiary">
                                                &#8230;
                                            </Pagination.Ellipsis>
                                        ),
                                    )}
                                </div>

                                <div className="flex flex-1 justify-center text-sm whitespace-pre text-fg-secondary md:hidden">
                                    Page <span className="font-medium">{currentPage}</span> of <span className="font-medium">{total}</span>
                                </div>
                            </>
                        )}
                    </Pagination.Context>

                    <div className="flex gap-2">
                        <Button
                            iconTrailing={ChevronRightDouble}
                            color="secondary"
                            size="sm"
                            isDisabled={page === total}
                            onClick={() => onPageChange?.(total)}
                        />
                        <Pagination.NextTrigger asChild>
                            <Button iconTrailing={ChevronRight} color="secondary" size="sm" />
                        </Pagination.NextTrigger>
                    </div>
                </div>
            </Pagination.Root>
        </div>
    );
};
