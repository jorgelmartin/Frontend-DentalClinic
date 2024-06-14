import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const SelectHour = ({ handleChange, value }) => {
    const [hours, setHours] = useState([]);
    const [selectedHour, setSelectedHour] = useState(value);
    const token = useSelector((state) => state.user.credentials.token);

    useEffect(() => {
        let config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        fetch("https://backend-dental-clinic.vercel.app/appointment/getHours", config)
            .then((res) => res.json())
            .then((res) => {
                setHours(res.data);

            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <select
            id={"hourSelect"}
            className={"inputAppointment"}
            value={selectedHour}
            onChange={(e) => {
                handleChange(e.target.value);
                setSelectedHour(e.target.value);
            }}>
            <option value="">SELECT HOUR</option>
            {hours.map((hour) => (
                <option key={hour.id} value={hour.hour}>
                    {hour.hour}
                </option>
            ))}
        </select>
    );
};