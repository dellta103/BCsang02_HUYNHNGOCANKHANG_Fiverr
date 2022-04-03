import axios from "axios";
import { BASEURL, TOKEN } from "../utils/config";

export const userService = {
  signUp: (values) => {
    return axios({
      url: `${BASEURL}/api/auth/signup`,
      method: "POST",
      data: values,
      headers: {
        tokenByClass: TOKEN,
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
      },
    });
  },
};
