import axios from "axios";
import { APIRoutes } from "../constant/APIRoutes";

//get all user
//  `https://reqres.in/api/users?page=1&per_page=12&search=${value}`

// const getEmployee = () => axios.get(`${APIRoutes.API_USERS}`);
const getEmployee = (page) => axios.get(`${APIRoutes.API_USERS}?page=${page}`);

// get by id by using params
const getEmployeeById = (id) => axios.get(`${APIRoutes.API_USERS}/${id}`);

// add new
const addEmployee = (data) => axios.post(`${APIRoutes.API_USERS}`, data);

// update
const updateEmployee = (id, employee) =>
  axios.put(`${APIRoutes.API_USERS}/${id}/`, employee);

// delete
const deleteEmployee = (id) => axios.delete(`${APIRoutes.API_USERS}/${id}`);

export {
  getEmployee,
  getEmployeeById,
  addEmployee,
  updateEmployee,
  deleteEmployee,
};
