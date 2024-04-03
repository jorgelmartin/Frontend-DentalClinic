import React from 'react';
import './AppButton.css';

//CREATE COMPONENT CLINIC BUTTON
export const AppButton = ({ onClick, children, text }) => {
    return (
        <>
            <button className="AppButton" onClick={onClick}>
                {children}{text}
            </button>
        </>
    );
};