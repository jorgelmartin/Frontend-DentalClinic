import { useEffect, useState } from "react";

export const SelectHour = ({handleChange, value}) => {
    const [selectedHour, setSelectedHour] = useState(value);

   const hours = [
    {"id": 1,"hour":"09:30:00"},
    {"id": 2,"hour":"10:30:00"},
    {"id": 3,"hour":"11:00:00"},
    {"id": 4,"hour":"16:00:00"},
    {"id": 5,"hour":"17:00:00"}
   ]

    return (
        <>
            <select value={selectedHour} onChange={(e) => {handleChange(e.target.value); setSelectedHour(e.target.value)}}>
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