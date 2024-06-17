import { useState } from "react";

//PAGINATION 
export const usePagination = (initialPage = 1, initialTotalPages = 1) => {
    const [currentPage, setCurrentPage] = useState(initialPage);
    const [totalPages, setTotalPages] = useState(initialTotalPages);

    const nextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const prevPage = () => {
        setCurrentPage(prevPage => prevPage - 1);
    };

    const goToPage = page => setCurrentPage(page >= 1 && page <= totalPages ? page : currentPage);

    return {
        currentPage,
        nextPage,
        prevPage,
        goToPage,
        totalPages
    };
};