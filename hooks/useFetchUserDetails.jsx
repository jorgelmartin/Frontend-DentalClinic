import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useFetchUserDetails = (id) => {
    const [user, setUser] = useState('');
    const token = useSelector((state) => state.user.credentials.token);

    useEffect(() => {
        let config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        fetch(`https://backend-dental-clinic.vercel.app/user/getUserDetails/${id}`, config)
            .then((res) => res.json())
            .then(res => setUser(res.data))
            .catch(error => {
                console.error('Error fetching appointment:', error);
            });

    }, [id]);

    return user;
};