import axios from "axios";
import { BASEURL, TOKEN } from "../utils/config";

export const jobService = {
  getMainJobList: () => {
    return axios({
      url: `${BASEURL}/api/type-jobs`,
      method: "GET",
      headers: {
        tokenByClass: TOKEN,
      },
    });
  },
};
