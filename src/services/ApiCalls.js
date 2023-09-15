
import axios from 'axios';

const URL = "https://backend-dental-clinic.vercel.app";

//LOGIN 
export const loginMe = async (credentials) => {
    return await axios.post(`${URL}/auth/login`, credentials);
    return res.data
}

//REGISTER
export const registerMe = async (credentials) => {
  let res = await axios.post(`${URL}/auth/register`, credentials);
  return res.data;
}

//GET PROFILE
export const getProfile = async (token) => {
  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  let res = await axios.get(`${URL}/user/getUser`, config);
  return res.data;
};

//UPDATE PROFILE
export const updateProfile = async (body, token) => {
  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  let res = await axios.put(`${URL}/user/update`, body, config);
  return res.data;
};
//CREATE APPOINTMENT
export const createAppointment = async (body, token) => {
  let config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }
  };
    let res =  await axios.post(`${URL}/appointment/createAppointment`, body, config)
    return res.data;
  }

//UPDATE APPOINTMENT
export const updateAppointment = async (token, id, bodyApp) => {
  let config = {
      headers: {
          Authorization: `Bearer ${token}`,
      },
  }
  let res = await axios.put(`${URL}/appointment/update/${id}`, bodyApp, config)
  return res
}



