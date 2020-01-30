import axios from "axios";
import { AsyncStorage } from "react-native";

export const register = (formData, config) => {
  console.log(formData);
  return {
    type: "USER_REGISTER",
    payload: axios.post(
      `https://apilinkwae.herokuapp.com/users/register`,
      formData,
      config
    )
  };
};

export const login = input => {
  return {
    type: "USER_LOGIN",
    payload: axios.post(`https://apilinkwae.herokuapp.com/users/login`, input)
  };
};

export const getUser = () => {
  return {
    type: "GET_USER",
    payload: AsyncStorage.getItem("user")
  };
};

export const isIstalled = () => {
  return {
    type: "GET_INSTALLED",
    payload: AsyncStorage.getItem("installed")
  };
};

export const getUserById = (id) => {
  return {
    type: "GET_USER_BY_ID",
    payload: axios.get(`https://apilinkwae.herokuapp.com/users/id/${id}`)
  }
}