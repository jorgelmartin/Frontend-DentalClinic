import React from 'react';
import './InputText.css';
import { checkError } from '../../services/useful';

export const InputText = ({ type, design, placeholder, name, state, errorState }) => {
//INPUTHANDLER FUNCTION
    const inputHandler = ({ target }, state) => {
        const { name, value } = target;
        state((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    //CHECKERROR FUNCTION
    const inputCheck = ({ target }, state) => {
        let { name, value } = target
        let errorMessage = checkError(name, value)
        state(prevState => ({
            ...prevState,
            [name + "Error"]: errorMessage
        }))
    }

    //GETTING INPUT CLASS NORMAL AND ERROR
    const getInputClass = () => {
        let inputClass = 'normalInput';
        if (design === 'errorInput') {
            inputClass += ' errorInput';
        }
        return inputClass;
    };

    return (
        <>
            <input
                type={type}
                className={getInputClass()}
                placeholder={placeholder}
                name={name}
                onChange={(e) => inputHandler(e, state)}
                onBlur={(e) => inputCheck(e, errorState)}
            />
        </>
    )
}