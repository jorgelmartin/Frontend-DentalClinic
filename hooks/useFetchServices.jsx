import { useEffect, useState } from "react";

//GETTING SERVICES/PRODUCTS FROM THE API
export const useFetchServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://backend-dental-clinic.vercel.app/service/getAll')
            .then(res => res.json())
            .then(res => setServices(res.data))
            .catch(error => console.log(error))
    }, [])
    return services;
};