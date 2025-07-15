"use client";

import { useState } from "react";
import * as Paginations from "@/components/application/pagination/pagination";
import { PaginationDot as PaginationDotComponent } from "@/components/application/pagination/pagination-dot";
import { PaginationLine as PaginationLineComponent } from "@/components/application/pagination/pagination-line";

export const PaginationPageDefault = () => {
    const [currentPage, setCurrentPage] = useState(1);

    return <Paginations.PaginationPageDefault page={currentPage} onPageChange={setCurrentPage} />;
};

export const PaginationPageMinimalCenter = () => {
    const [currentPage, setCurrentPage] = useState(1);

    return <Paginations.PaginationPageMinimalCenter page={currentPage} onPageChange={setCurrentPage} />;
};

export const PaginationCardDefault = () => {
    const [currentPage, setCurrentPage] = useState(1);

    return <Paginations.PaginationCardDefault page={currentPage} onPageChange={setCurrentPage} />;
};

export const PaginationCardMinimalRightAligned = () => {
    const [currentPage, setCurrentPage] = useState(1);

    return <Paginations.PaginationCardMinimal align="right" page={currentPage} onPageChange={setCurrentPage} />;
};

export const PaginationCardMinimalCenterAligned = () => {
    const [currentPage, setCurrentPage] = useState(1);

    return <Paginations.PaginationCardMinimal align="center" page={currentPage} onPageChange={setCurrentPage} />;
};

export const PaginationCardMinimalLeftAligned = () => {
    const [currentPage, setCurrentPage] = useState(1);

    return <Paginations.PaginationCardMinimal align="left" page={currentPage} onPageChange={setCurrentPage} />;
};

export const PaginationButtonGroupRightAligned = () => {
    const [currentPage, setCurrentPage] = useState(1);

    return <Paginations.PaginationButtonGroup align="right" page={currentPage} onPageChange={setCurrentPage} />;
};

export const PaginationButtonGroupCenterAligned = () => {
    const [currentPage, setCurrentPage] = useState(1);

    return <Paginations.PaginationButtonGroup align="center" page={currentPage} onPageChange={setCurrentPage} />;
};

export const PaginationButtonGroupLeftAligned = () => {
    const [currentPage, setCurrentPage] = useState(1);

    return <Paginations.PaginationButtonGroup align="left" page={currentPage} onPageChange={setCurrentPage} />;
};

export const PaginationDotMd = () => {
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <div className="flex flex-col gap-8">
            <PaginationDotComponent total={3} size="md" page={currentPage} onPageChange={setCurrentPage} />
            <PaginationDotComponent total={3} size="lg" page={currentPage} onPageChange={setCurrentPage} />
        </div>
    );
};

export const PaginationDotLg = () => {
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <div className="flex flex-col gap-8">
            <PaginationDotComponent total={3} size="md" framed page={currentPage} onPageChange={setCurrentPage} />
            <PaginationDotComponent total={3} size="lg" framed page={currentPage} onPageChange={setCurrentPage} />
        </div>
    );
};

export const PaginationLineMd = () => {
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <div className="flex flex-col gap-8">
            <PaginationLineComponent className="w-36" total={3} size="md" page={currentPage} onPageChange={setCurrentPage} />
            <PaginationLineComponent className="w-38" total={3} size="lg" page={currentPage} onPageChange={setCurrentPage} />
        </div>
    );
};

export const PaginationLineLg = () => {
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <div className="flex flex-col gap-8">
            <PaginationLineComponent className="w-40" total={3} size="md" framed page={currentPage} onPageChange={setCurrentPage} />
            <PaginationLineComponent className="w-44" total={3} size="lg" framed page={currentPage} onPageChange={setCurrentPage} />
        </div>
    );
};
