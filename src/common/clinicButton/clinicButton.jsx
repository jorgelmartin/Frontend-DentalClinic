import React from 'react';
import './ClinicButton.css';

//CREATE COMPONENT CLINIC BUTTON
export const ClinicButton = ({ onClick, children, text }) => {
    return (
        <>
            <button className="ClinicButton" onClick={onClick}>
                {children} {text}
            </button>
        </>
    );
};