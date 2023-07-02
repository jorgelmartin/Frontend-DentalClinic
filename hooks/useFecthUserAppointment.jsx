import React, { useEffect, useState } from "react";
import { useAuthToken } from "./useAuthToken";

export const useFetchUserAppointments = () => {
    const [userAppointments, setUserAppointments] = useState(null);
    const token = useAuthToken(); 
    useEffect(() => {
        // Reemplaza 'aquí_tu_token' con el token real que tienes
        console.log("soy el toooke",token);
        console.log("Fetching user appointments...");
        fetch('http://localhost:4000/user/getAll', {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then(res => res.json())
            .then(res => {
                console.log("Response from API:", res.data);
                setUserAppointments(res.data);
            })
            .catch(error => console.log("Error fetching appointments:", error))
    }, []);

    console.log("Appointments user:", userAppointments);

    return userAppointments;
};

