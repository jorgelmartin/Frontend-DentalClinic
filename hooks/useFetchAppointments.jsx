import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { userData } from "../src/pages/userSlice";

export const useFetchAppointments = () => {
    const [appointments, setAppointments] = useState(null);
    const datosCredencialesRedux = useSelector(userData);

    useEffect(() => {
        let config = {
            headers: {
                Authorization: `Bearer ${datosCredencialesRedux.credentials?.token}`,
            },
        }
        fetch('https://backend-dentalclinic-production.up.railway.app/appointment/getAll', config)
            .then(res => res.json())
            .then(res => {
                setAppointments(res.data);
            })
            .catch(error => console.log("Error fetching appointments:", error))
    }, []);

    return appointments;
};