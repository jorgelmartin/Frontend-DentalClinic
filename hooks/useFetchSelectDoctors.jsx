import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const SelectDoctors = ({ handleChange, value }) => {

    // SELECTED DOCTORS
    const token = useSelector((state) => state.user.credentials.token);
    const [selectedDoctor, setSelectedDoctor] = useState(value);
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        let config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
        fetch("https://backend-dental-clinic.vercel.app/user/getDentists", config)
            .then((res) => res.json())
            .then((res) => {
                setDoctors(res.data);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <>
            <select
                id={"doctorSelect"}
                className={"inputAppointment"}
                value={selectedDoctor}
                onChange={(e) => {
                    handleChange(e.target.value);
                    setSelectedDoctor(e.target.value)
                }}>
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
