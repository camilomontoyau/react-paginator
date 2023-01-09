import React, { FC } from 'react';
import './style/main.scss';
type PaginatorProps = {
    currentPage: number;
    pageActiveClass?: string;
    pageNextText?: string | React.ReactNode;
    pagePrevText?: string | React.ReactNode;
    pagePrevClass?: string;
    pageNextClass?: string;
    pageContainerClass?: string;
    pageItemClass?: string;
    pageLimit: number;
    pageLinkClass?: string;
    pageNeighbours?: number;
    setCurrentPage(args: any): any;
    setOffset(args: any): any;
    totalRecords: number;
};
declare const Paginator: FC<PaginatorProps>;
export default Paginator;
