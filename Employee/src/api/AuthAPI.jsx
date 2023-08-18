import axios from "axios";
import { APIRoutes } from "../constant/APIRoutes";

const login = (payload) => axios.post(`${APIRoutes.API_LOGIN}`, payload);
const register = (payload) => axios.post(`${APIRoutes.API_REGISTER}/`, payload);

export { login, register };
//git command to know what account is connected to git
// git config --global user.name
