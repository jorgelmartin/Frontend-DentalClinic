import React, { useEffect, useState } from "react";

export const useFetchUserAppointments = () => {
    const [userAppointments, setUserAppointments] = useState(null);

    useEffect(() => {
        fetch('http://localhost:4000/user/getAll')
            .then(res => res.json())
            .then(res => {
                console.log("Response from API:", res.data);
                setUserAppointments(res.data);
            })
            .catch(error => console.log("Error fetching appointments:", error))
    }, []);

    console.log("appointments user:", userAppointments);

    return userAppointments;
};