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
};
