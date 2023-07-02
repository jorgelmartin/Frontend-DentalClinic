import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays, isWeekend } from "date-fns";

export const SelectDate = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        // Verificar si la fecha seleccionada es un fin de semana
        if (!isWeekend(date)) {
            setSelectedDate(date);
        }
    };

    return (
        <>
            <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="dd/MM/yyyy"
                placeholderText="Selecciona una fecha"
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                isClearable
            />
        </>
    );
};
