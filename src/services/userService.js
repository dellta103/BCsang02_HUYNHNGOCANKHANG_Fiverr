import axios from "axios";
import { BASEURL, TOKEN, TOKEN_USER, TOKEN_ADMIN } from "../utils/config";

export const userService = {
  signUp: (values) => {
    return axios({
      url: `${BASEURL}/api/auth/signup`,
      method: "POST",
      data: values,
      headers: {
        tokenByClass: TOKEN,
        token: TOKEN_USER,
      },
    });
  },
  signIn: (values) => {
    return axios({
      url: `${BASEURL}/api/auth/signin`,
      method: "POST",
      data: values,
      headers: {
        tokenByClass: TOKEN,
        token: TOKEN_USER,
      },
    });
  },
  uploadAvatar: (values) => {
    return axios({
      url: `${BASEURL}/api/users/upload-avatar`,
      method: "POST",
      data: values,

      headers: {
        tokenByClass: TOKEN,
        token: TOKEN_USER,
      },
    });
  },
  editInfo: (values, id) => {
    return axios({
      url: `${BASEURL}/api/users/${id}`,
      method: "PUT",
      data: { ...values },
      headers: {
        tokenByClass: TOKEN,
        token: TOKEN_ADMIN,
      },
    });
  },
  getUsers: () => {
    return axios({
      url: `${BASEURL}/api/users`,
      method: "GET",
      headers: {
        tokenByClass: TOKEN,
        token: TOKEN_ADMIN,
      },
    });
  },
  removeUser: (id) => {
    return axios({
      url: `${BASEURL}/api/users/${id}`,
      method: "DELETE",
      headers: {
        tokenByClass: TOKEN,
        token: TOKEN_ADMIN,
      },
    });
  },
  findUser: (name) => {
    return axios({
      url: `${BASEURL}/api/users/pagination-search?name=${name}`,
      method: "GET",
      headers: {
        tokenByClass: TOKEN,
        token: TOKEN_ADMIN,
      },
    });
  },
};
