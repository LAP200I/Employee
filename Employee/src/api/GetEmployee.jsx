import axios from "axios";
import { APIRoutes } from "../constant/APIRoutes";

const getEmployee = () => axios.get(`${APIRoutes.API_USERS}`);
const getEmployeeById = (id) => axios.get(`${APIRoutes.API_USERS}/${id}`);

export { getEmployee, getEmployeeById };
