import { useState } from "react";

export const SelectHour = ({handleChange, value}) => {

    //USER SELECTED HOUR FROM THE FATHER COMPONENT
    const [selectedHour, setSelectedHour] = useState(value);

   const hours = [
    {"id": 1,"hour":"09:00:00"},
    {"id": 2,"hour":"09:30:00"},
    {"id": 3,"hour":"10:30:00"},
    {"id": 4,"hour":"12:00:00"},
    {"id": 5,"hour":"14:30:00"},
    {"id": 6,"hour":"16:00:00"}
   ]

    return (
        <>
            <select className="inputAppointment" value={selectedHour} onChange={(e) => {
                handleChange(e.target.value); 
                setSelectedHour(e.target.value)}}>
                <option value="">SELECT HOUR</option>
                {hours.map((hour) => (
                    <option key={hour.id} value={hour.hour}>
                        {hour.hour}
                    </option>
                ))}
            </select>
        </>
    );
};