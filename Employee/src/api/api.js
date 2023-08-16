import axios from 'axios';
import { toast } from "react-toastify";

axios.defaults.baseURL = 'https://reqres.in/api';
axios.defaults.headers = {
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    // withCredentials: true

};

const user = JSON.parse(localStorage.getItem("user"));
const token = user ? user.data.token : null;
console.log(token);
if (token) {
    axios.defaults.headers = {
        ...axios.defaults.headers,
        Authorization: `Bearer ${token}`
    };
}

axios.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response.status === 401) {
            toast.error("Bạn cần đăng nhập");
        }
        return Promise.reject(error);
    }
);

export const api = (jwt) => {
    axios.defaults.headers = {
        ...axios.defaults.headers,
        Authorization: `Bearer ${jwt}`
    };
};
