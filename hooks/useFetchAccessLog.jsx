import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useFetchAccessLogs = (currentPage, perPage, searchQuery) => {
    const token = useSelector((state) => state.user.credentials.token);
    const [accessLogs, setAccessLogs] = useState([]);
    const [pagination, setPagination] = useState({});

    useEffect(() => {

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        let apiUrl = `https://backend-dental-clinic.vercel.app/accesslog/searchAccessLogs?page=${currentPage}&per_page=${perPage}`;

        if (searchQuery) {
            apiUrl += `&query=${encodeURIComponent(searchQuery)}`;
        }

        fetch(apiUrl, config)
            .then(res => res.json())
            .then(res => {
                    setAccessLogs(res.data);
                    setPagination(res.pagination);
            })
            .catch(error => console.log("Error fetching accessLogs:", error))
    }, [currentPage, perPage, searchQuery]);

    return { accessLogs, pagination };
};