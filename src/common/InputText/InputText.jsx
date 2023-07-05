
import React from 'react';
import './InputText.css';
// import { inputHandler } from '../../services/useful';
import { checkError } from '../../services/useful';

export const InputText = ({ type, design, placeholder, name, state, errorState }) => {

    // console.log("Valor de body en el componente InputText:", state);
    const inputHandler = ({ target }, state) => {
        const { name, value } = target;


        state((prevState) => ({
            // console.log("Previous State:", prevState);
       
                ...prevState,
                [name]: value,
         
        }));
    };

    const inputCheck = ({ target }, state) => {
        let { name, value } = target
        let errorMessage = checkError(name, value)

        state(prevState => ({
            ...prevState,
            [name + "Error"]: errorMessage
        }))
    }

    return (
        <>
            <input
                type={type}
                className={design}
                placeholder={placeholder}
                name={name}
                onChange={(e) => inputHandler(e, state)}
                onBlur={(e) => inputCheck(e, errorState)}
            />
        </>
    )
}