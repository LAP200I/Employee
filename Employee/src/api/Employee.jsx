import axios from "axios";
import { APIRoutes } from "../constant/APIRoutes";

//get all user by page
// const getEmployee = () => axios.get(`${APIRoutes.API_USERS}`);
const getEmployee = (page) => axios.get(`${APIRoutes.API_USERS}?page=${page}`);

// get by id
const getEmployeeById = (id) => axios.get(`${APIRoutes.API_USERS}/${id}`);

// add new
const addEmployee = (employee) =>
  axios.post(`${APIRoutes.API_USERS}`, employee);

// update
const updateEmployee = (id, employee) =>
  axios.put(`${APIRoutes.API_USERS}/${id}`, employee);

// delete
const deleteEmployee = (id) => axios.delete(`${APIRoutes.API_USERS}/${id}`);

export {
  getEmployee,
  getEmployeeById,
  addEmployee,
  updateEmployee,
  deleteEmployee,
};
