import { useEffect, useState } from "react";

export const useFetchServices = () => {
    const [services, setServices] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch('https://backend-dental-clinic.vercel.app/service/getAll')
            .then(res => res.json()) 
            .then(data => {
                if (!data.data) { 
                    throw new Error(data.message || 'Error fetching services');
                }
                setServices(data.data);
            })
            .catch(error => {
                setError(error.message);
            });
    }, []);

    return { services, error };
};