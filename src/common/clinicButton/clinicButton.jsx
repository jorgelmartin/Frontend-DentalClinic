import React from 'react';
import './ClinicButton.css';

//CREATE COMPONENT AKDEMY BUTTON
export const ClinicButton = ({ onClick, children, text }) => {
    return (
        <div className='borderAkdemy'>
        <button className="ClinicButton"  onClick={onClick}>
            {children} {text}
        </button>
        </div>
    );
};