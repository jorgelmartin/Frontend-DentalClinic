import { useEffect, useState } from "react";

//GET ALL USERS
export const useFetchUsers = () => {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        fetch('https://backend-dental-clinic.vercel.app/user/getAllUsers')
            .then(res => res.json())
            .then(res => {
                setUsers(res.data);
            })
            .catch(error => console.log("Error fetching users:", error))
    }, []);
    return users;
};