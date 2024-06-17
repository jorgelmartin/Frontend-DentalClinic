import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// GET ALL APPOINTMENTS
export const useFetchSearchAppointments = (currentPage, perPage, searchQuery) => {
    const token = useSelector((state) => state.user.credentials.token);
    const [pagination, setPagination] = useState({});
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        let config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        let apiUrl = `https://backend-dental-clinic.vercel.app/appointment/searchAppointments?page=${currentPage}&per_page=${perPage}`;

        // Add search query if present
        if (searchQuery) {
            apiUrl += `&query=${encodeURIComponent(searchQuery)}`;
        }

        fetch(apiUrl, config)
            .then(res => res.json())
            .then(res => {
                setAppointments(res.data);
                setPagination(res.pagination);
            })
            .catch(error => console.log("Error fetching appointments:", error));
    }, [currentPage, perPage, searchQuery]);

    return { appointments, pagination };
};