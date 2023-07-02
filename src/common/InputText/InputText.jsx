
import React from 'react';
import './InputText.css';
// import { inputHandler } from '../../services/useful';
import { checkError } from '../../services/useful';

export const InputText = ({ type, design, placeholder, name, state, errorState }) => {

    console.log("Valor de body en el componente InputText:", state);
    const inputHandler = ({ target }, state) => {
        let { name, value } = target;
        console.log("Target:", target);
        console.log("Name:", name);
        console.log("Value:", value);
        console.log("state:", state);
    
        state((prevState) => {
            console.log("Previous State:", prevState);
            return {
                ...prevState,
                [name]: value,
            };
        });
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
                onChange={(e)=>inputHandler(e, state)}
                onBlur={(e)=>inputCheck(e, errorState)}
            />
        </>
    )
}