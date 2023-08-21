import { toast } from "react-toastify";
import { ActionType } from "./ActionType";
import {
  getEmployee,
  getEmployeeById,
  addEmployee,
  updateEmployee,
  deleteEmployee,
} from "../api/EmployeeAPI";

export const makeRequest = () => {
  return {
    type: ActionType.MAKE_REQUEST,
  };
};
export const failRequest = (err) => {
  return {
    type: ActionType.FAIL_REQUEST,
    payload: err,
  };
};
export const getData = (data) => {
  return {
    type: ActionType.GET_DATA,
    payload: data,
  };
};
export const geUserList = (data) => {
  return {
    type: ActionType.GET_USER_LIST,
    payload: data,
  };
};
export const deleteUser = () => {
  return {
    type: ActionType.DELETE_USER,
  };
};
export const addUser = () => {
  return {
    type: ActionType.ADD_USER,
  };
};
export const updateUser = () => {
  return {
    type: ActionType.UPDATE_USER,
  };
};
export const getUserObj = (data) => {
  return {
    type: ActionType.GET_USER_OBJ,
    payload: data,
  };
};
export const FetchData = (page) => {
  return (dispatch) => {
    const fetchEmployee = async () => {
      const res = await getEmployee(page);
      dispatch(getData(res.data));
    };
    try {
      fetchEmployee();
    } catch (err) {
      dispatch(failRequest(err.message));
      toast.error("Error in fetching data.");
    }
  };
};
export const FetchUserObj = (code) => {
  return (dispatch) => {
    const fetchEmployee = async () => {
      const res = await getEmployeeById(code);
      dispatch(getUserObj(res.data.data));
    };
    try {
      fetchEmployee();
    } catch (err) {
      dispatch(failRequest(err.message));
    }
  };
};

export const UpdateEmployee = (code, data) => {
  return (dispatch) => {
    const updateEmp = async () => {
      const res = await updateEmployee(code, data);
      console.log("put", res);

      dispatch(updateUser());
    };
    try {
      updateEmp();
      toast.success(" Updated successfully.");
    } catch (err) {
      dispatch(failRequest(err.message));
      toast.error("Fail to update.");
    }
  };
};

export const RemoveUser = (code) => {
  return (dispatch) => {
    const deleteEmpl = async () => {
      const res = await deleteEmployee(code);
      dispatch(deleteUser());
      console.log("delete", res);
    };
    try {
      deleteEmpl();
    } catch (err) {
      dispatch(failRequest(err.message));
    }
  };
};

export const FunctionAddUser = (data) => {
  return (dispatch) => {
    dispatch(makeRequest());
    const addEmpl = async () => {
      const res = await addEmployee(data);
      dispatch(addUser());
      console.log("post", res);
    };
    try {
      addEmpl();
      toast.success(
        `Successfully add employee: ${data.firstName + " " + data.lastName}`
      );
    } catch (err) {
      dispatch(failRequest(err.message));
      toast.error("Fail to add.");
    }
  };
};
