import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useFetchAppointments = (page, perPage) => {
    const [appointments, setAppointments] = useState([]);
    const [pagination, setPagination] = useState({}); 
    const token = useSelector((state) => state.user.credentials.token);

    useEffect(() => {
        let config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        fetch(`https://backend-dental-clinic.vercel.app/appointment/getAll?page=${page}&per_page=${perPage}`, config)
            .then(res => res.json())
            .then(res => {
                setAppointments(res.data);
                setPagination(res.pagination);
            })
            .catch(error => console.log("Error fetching appointments:", error));
    }, [page, perPage, token]);

    return { appointments, pagination };
};