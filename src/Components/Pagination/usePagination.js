// import {useMemo} from "react";
//
// export const usePagination = ({
//                                   totalCount,
//                                   pageSize,
//                                   siblingCount = 1,
//                                   currentPage
//                               }) => {
//     const paginationRange = useMemo(() => {
//         const totalPageCount = Math.ceil(totalCount / pageSize);
//
//         // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
//         const totalPageNumbers = siblingCount + 5;
//
//         const shouldShowLeftDots = leftSiblingIndex > 2;
//         const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;
//
//         const firstPageIndex = 1;
//         const lastPageIndex = totalPageCount;
//
//         /*
//             Case 4: Both left and right dots to be shown
//         */
//         if (shouldShowLeftDots && shouldShowRightDots) {
//             let middleRange = range(leftSiblingIndex, rightSiblingIndex);
//             return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
//         }
//     }, [totalCount, pageSize, siblingCount, currentPage]);
//
//     return paginationRange;
// };
