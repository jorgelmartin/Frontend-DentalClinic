
import axios from 'axios';

const URL = "http://localhost:4000";


export const loginMe = async (credentials) => {
    // ... código de la función loginMe


    //Esto es un ejemplo de como enviamos un body por axios en un protocolo POST
    return await axios.post(`${URL}/auth/login`, credentials);
    return res.data
}
export const registerMe = async (credentials) => {

  let res = await axios.post(`${URL}/auth/register`, credentials);
  return res.data;
  // console.log("soy la data", data);

}

// export const bringProducts = async () => {

//   return await axios.get(`http://localhost:4000/service/getAll`);
// };

// export const searchCharacter = async (criteria) => {

//   return await axios.get(`https://rickandmortyapi.com/api/character/?name=${criteria}`);
// }

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

// export const deleteUser = async (body, token) => {
//   const config = {
//     headers: { Authorization: `Bearer ${token}` },
//   };
//   const bodyParameters = {
//     email: body.email,
//   };
//   try {
//     let res = await axios.patch(`${URL}/users/delete`, bodyParameters, config);
//     return res;
//   } catch (error) {}
// };

export const updateAppointment = async (token, id, bodyApp) => {
  let config = {
      headers: {
          Authorization: `Bearer ${token}`,
      },
  }
  let res = await axios.put(`${URL}/appointment/update/${id}`, bodyApp, config)
  return res
}

export const createAppointment = async (body, token) => {
  let config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }
  };
    let res =  await axios.post(`${URL}/appointment/createAppointment`, body, config)
    return res.data;
  }

