import { useState, useEffect } from "react";
import "./../../App.css";

export const InputSearch = ({ onSearch }) => {
    const [searchText, setSearchText] = useState("");

    // WAIT 500 ms BEFORE EXCECUTE THE FUNCTION
    useEffect(() => {
        const timeOutId = setTimeout(() => {
            onSearch(searchText);
        }, 500);
        return () => clearTimeout(timeOutId);
    }, [searchText, onSearch]);

    const handleInputChange = (event) => {
        setSearchText(event.target.value);
    };

    return (
        <input
            className="inputSearch"
            type="text"
            name="text"
            placeholder="Buscar..."
            value={searchText}
            onChange={handleInputChange}
        />
    );
};