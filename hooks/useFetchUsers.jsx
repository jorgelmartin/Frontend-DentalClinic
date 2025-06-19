import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

//GET ALL USERS
export const useFetchUsers = (currentPage, perPage, searchQuery) => {
    const token = useSelector((state) => state.user.credentials.token);
    const [pagination, setPagination] = useState({});
    const [users, setUsers] = useState('');

    useEffect(() => {
        let config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        let apiUrl = `https://backend-dental-clinic.vercel.app/user/searchUsers?page=${currentPage}&perPage=${perPage}`;

        // Add search query if present
        if (searchQuery) {
            apiUrl += `&query=${encodeURIComponent(searchQuery)}`;
        }

        fetch(apiUrl, config)
            .then(res => res.json())
            .then(res => {
                setUsers(res.data);
                setPagination(res.pagination);
            })
            .catch(error => console.log("Error fetching users:", error))
    }, [currentPage, perPage, searchQuery]);

    return { users, pagination };
};