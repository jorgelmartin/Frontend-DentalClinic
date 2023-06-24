
import axios from 'axios';

// const root = "https://makeup-api.herokuapp.com/api/v1"


export const loginMe = async (credentials) => {
    // ... código de la función loginMe


    //Esto es un ejemplo de como enviamos un body por axios en un protocolo POST
    return await axios.post(`http://localhost:4000/auth/login`, credentials);


}

export const bringProducts = async () => {

    return await axios.get(`https://rickandmortyapi.com/api/character/?page=17`);
};
// http://localhost:4000/service/getAll


export const searchCharacter = async (criteria) => {

    return await axios.get(`https://rickandmortyapi.com/api/character/?name=${criteria}`);
}