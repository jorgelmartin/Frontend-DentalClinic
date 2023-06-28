
import axios from 'axios';

const URL = "http://localhost:4000";


export const loginMe = async (credentials) => {
    // ... código de la función loginMe


    //Esto es un ejemplo de como enviamos un body por axios en un protocolo POST
    return await axios.post(`${URL}/auth/login`, credentials);
//Clase de Mara:
// return res.data.token
}

export const getProfile = async (token) => {
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  
    let res = await axios.get(`${URL}/user/getUser`, config);
  
    return res.data;
  };
  
  export const updateProfile = async (body, token) => {
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  
    let res = await axios.put(`${URL}/user/update`, body, config);
    return res;
  };

export const registerMe = async () => {

    return await axios.post(`${URL}/auth/register`);

}

export const bringProducts = async () => {

    return await axios.get(`https://rickandmortyapi.com/api/character/?page=17`);
};
// http://localhost:4000/service/getAll


// export const searchCharacter = async (criteria) => {

//     return await axios.get(`https://rickandmortyapi.com/api/character/?name=${criteria}`);
// }