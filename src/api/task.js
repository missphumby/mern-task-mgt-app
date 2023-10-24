import apiUrl from "../apiConfig";
import axios from "axios";
import jwtDecode from "jwt-decode";
const jwt = localStorage.getItem("token");

export const allTasks = (user) => {
  return axios({
    method: "GET",
    url: apiUrl + "/alltasks",
    headers: {
      Authorization: jwt,
    },
  });
};

export const MyTasks = (user) => {
  return axios({
    method: "GET",
    url: apiUrl + `/user/${user._id}`,
    headers: {
      Authorization: user.token,
    },
  });
};

export const singleTaskDetail = (task, user) => {
  return axios({
    method: "GET",
    url: apiUrl + `/tasks/${task.id}`,
    headers: {
      Authorization: user.token,
    },
  });
};
// axios.get(`http://localhost:8000/tasks/${id}`);
