import { useEffect, useState } from "react";

export const SelectDoctors = ({handleChange, value}) => {
    const [selectedDoctor, setSelectedDoctor] = useState(value);
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/user/getAllUsers")
            .then((res) => res.json())
            .then((res) => {
                const filteredDoctors = res.data.filter((user) => user.role_id === 2);
                setDoctors(filteredDoctors);
            })
            .catch((error) => console.log(error));
    }, []);

  
    return (
        <>
            <select className="inputAppointment" value={selectedDoctor} onChange={(e) => {handleChange(e.target.value); setSelectedDoctor(e.target.value)}}>
                <option value="">Select Doctors</option>
                {doctors.map((doctor) => (
                    <option key={doctor.id} value={doctor.id}>
                        {`${doctor.name} ${doctor.lastname}`}
                    </option>
                ))}
            </select>
        </>
    );
};
