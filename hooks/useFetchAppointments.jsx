import React, { useEffect, useState } from "react";

export const useFetchAppointments = () => {
    const [appointments, setAppointments] = useState(null);

    useEffect(() => {
        fetch('http://localhost:4000/appointment/getAll')
            .then(res => res.json())
            .then(res => {
                console.log("Response from API:", res);
                setAppointments(res.data);
            })
            .catch(error => console.log("Error fetching appointments:", error))
    }, []);

    console.log("appointments:", appointments);

    return appointments;
};