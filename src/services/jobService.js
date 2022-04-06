import axios from "axios";
import { BASEURL, TOKEN, TOKEN_USER } from "../utils/config";

export const jobService = {
  getMainJobList: () => {
    return axios({
      url: `${BASEURL}/api/type-jobs`,
      method: "GET",
      headers: {
        tokenByClass: TOKEN,
        token: TOKEN_USER,
      },
    });
  },
  getJobList: () => {
    return axios({
      url: `${BASEURL}/api/jobs`,
      method: "GET",
      headers: {
        tokenByClass: TOKEN,
        token: TOKEN_USER,
      },
    });
  },
  getJobListByName: (name) => {
    return axios({
      url: `${BASEURL}/api/jobs/by-name?name=${name}`,
      method: "GET",
      headers: {
        tokenByClass: TOKEN,
      },
    });
  },
  getJobDetail: (uri) => {
    return axios({
      url: `${BASEURL}/api${uri}`,
      method: "GET",
      headers: {
        tokenByClass: TOKEN,
      },
    });
  },
  getJobsByType: (uri) => {
    return axios({
      url: `${BASEURL}/api/jobs/by-type?type=${uri}&skip=0&llimit=10`,
      method: "GET",
      headers: {
        tokenByClass: TOKEN,
        token: TOKEN_USER,
      },
    });
  },
  bookJob: (uri) => {
    return axios({
      url: `${BASEURL}/api/jobs/booking/${uri}`,
      method: "PATCH",
      headers: {
        tokenByClass: TOKEN,
        token: TOKEN_USER,
      },
    });
  },
  getComments: (uri) => {
    return axios({
      url: `${BASEURL}/api/comments/by-job/${uri}`,
      method: "GET",
      headers: {
        tokenByClass: TOKEN,
        token: TOKEN_USER,
      },
    });
  },
  newComment: (values) => {
    return axios({
      url: `${BASEURL}/api/comments`,
      method: "POST",
      data: values,
      headers: {
        tokenByClass: TOKEN,
        token: TOKEN_USER,
      },
    });
  },
  getBookedJobs: () => {
    return axios({
      url: `${BASEURL}/api/jobs/by-user`,
      method: "GET",
      headers: {
        tokenByClass: TOKEN,
        token: TOKEN_USER,
      },
    });
  },
};
