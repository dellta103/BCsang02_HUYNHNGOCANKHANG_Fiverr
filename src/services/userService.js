import axios from "axios";
import { BASEURL, TOKEN, TOKEN_USER } from "../utils/config";
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
      data: values,
      headers: {
        tokenByClass: TOKEN,
        token: TOKEN_USER,
      },
    });
  },
};
