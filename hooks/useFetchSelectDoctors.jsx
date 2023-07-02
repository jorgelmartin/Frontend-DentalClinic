import { useEffect, useState } from "react";

export const SelectDoctors = () => {
    const [selectedDoctor, setSelectedDoctor] = useState("");
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/user/getAllUsers")
            .then((res) => res.json())
            .then((res) => {
                console.log("Response from API:", res);
                const filteredDoctors = res.data.filter((user) => user.role_id === 2);
                setDoctors(filteredDoctors);
            })
            .catch((error) => console.log(error));
    }, []);

    const handleChange = (event) => {
        setSelectedDoctor(event.target.value);
    };

    return (
        <>
            <select value={selectedDoctor} onChange={handleChange}>
                <option value="">Select Doctors</option>
                {doctors.map((doctor) => (
                    <option key={doctor.id} value={doctor.name}>
                        {`${doctor.name} ${doctor.lastname}`}
                    </option>
                ))}
            </select>

            {/* <div>{selectedService && `Selected service: ${selectedService}`}</div> */}
        </>
    );
};