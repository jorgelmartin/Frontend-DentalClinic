
import axios from 'axios';

const URL = "http://localhost:4000";


export const loginMe = async (credentials) => {
    // ... código de la función loginMe


    //Esto es un ejemplo de como enviamos un body por axios en un protocolo POST
    return await axios.post(`${URL}/auth/login`, credentials);
    return res.data
}
export const registerMe = async (credentials) => {

  return await axios.post(`${URL}/auth/register`, credentials);

}

// export const bringProducts = async () => {

//   return await axios.get(`http://localhost:4000/service/getAll`);
// };

// export const searchCharacter = async (criteria) => {

//   return await axios.get(`https://rickandmortyapi.com/api/character/?name=${criteria}`);
// }

export const searchAppointment = async (criteria) => {
  try {
    let res = await axios.get(`${URL}/${criteria}`);
    return res.data;
  } catch (error) {}
};
// export const searchCharacter = async (criteria) => {

//   return await axios.get(`https://rickandmortyapi.com/api/character/?name=${criteria}`);
// }

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
    
    console.log(res); // Colocado antes del return para ver la respuesta en la consola

    return res.data;
  };
//   export const getAllUsers = async (token) => {
//     let config = {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     };

//     return await axios.get(`${URL}/user/getAllUsers`, config);
// }


