import { useEffect, useState } from "react";

export const SelectHour = () => {
    const [selectedHour, setSelectedHour] = useState("");
    const [hours, setHours] = useState([]);
    useEffect(() => {
        fetch("http://localhost:4000/appointment/getAll")
            .then((res) => res.json())
            .then((res) => {
                console.log("Response from API:", res);
                setHours(res.data);
            })
            .catch((error) => console.log(error));
    }, []);
    const handleChange = (event) => {
        setSelectedHour(event.target.value);
    };
    return (
        <>
            <select value={selectedHour} onChange={handleChange}>
                <option value="">Select Hour</option>
                {hours.map((hour) => (
                    <option key={hour.id} value={hour.hour}>
                        {hour.hour}
                    </option>
                ))}
            </select>
        </>
    );
};