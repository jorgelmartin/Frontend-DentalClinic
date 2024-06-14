import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
//GET ALL USERS
export const useFetchUsers = (currentPage, perPage) => {
    const token = useSelector((state) => state.user.credentials.token);
    const [pagination, setPagination] = useState({});
    const [users, setUsers] = useState('');

    useEffect(() => {
        let config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        fetch(`https://backend-dental-clinic.vercel.app/user/getAllUsers?page=${currentPage}&perPage=${perPage}`, config)
            .then(res => res.json())
            .then(res => {
                setUsers(res.data);
                setPagination({
                    page: res.page,
                    perPage: res.per_page,
                    total: res.total,
                    totalPages: res.total_pages,
                });
            })
            .catch(error => console.log("Error fetching users:", error))
    }, [currentPage, perPage, token]);

    return { users, pagination };
};