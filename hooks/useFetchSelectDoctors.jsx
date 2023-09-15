import { useEffect, useState } from "react";

export const SelectDoctors = ({handleChange, value}) => {

    //USER SELECTED DOCTORS FROM THE FATHER COMPONENT
    const [selectedDoctor, setSelectedDoctor] = useState(value);

    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch("https://backend-dental-clinic.vercel.app/user/getAllUsers")
            .then((res) => res.json())
            .then((res) => {
                const filteredDoctors = res.data.filter((user) => user.role_id === 2);
                setDoctors(filteredDoctors);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <>
            <select className="inputAppointment" value={selectedDoctor} onChange={(e) => {
                handleChange(e.target.value); 
                setSelectedDoctor(e.target.value)}}>
                <option value="">SELECT DOCTOR</option>
                {doctors.map((doctor) => (
                    <option key={doctor.id} value={doctor.id}>
                        {`${doctor.name} ${doctor.lastname}`}
                    </option>
                ))}
            </select>
        </>
    );
};
