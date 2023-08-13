import { toast } from "react-toastify";
import { ActionType } from "./ActionType";
import {
  getEmployee,
  getEmployeeById,
  addEmployee,
  updateEmployee,
  deleteEmployee,
} from "../api/Employee";

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
// getEmployee(page)

export const FetchUserList = (page) => {
  return (dispatch) => {
    dispatch(makeRequest());

    const fetchEmployee = async () => {
      const res = await getEmployee(page);
      dispatch(geUserList(res.data.data));
    };
    try {
      fetchEmployee();
    } catch (err) {
      dispatch(failRequest(err.message));
      toast.error("Error in fetching data.");
    }
  };
};
export const FetchData = (page) => {
  return (dispatch) => {
    dispatch(makeRequest());

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

// export const FetchUserList = (page) => {
//   return (dispatch) => {
//     dispatch(makeRequest());

//     const fetchEmployee = async () => {
//       const res = await getEmployee(page);
//       dispatch(geUserList(res.data.data));
//       console.log("res.data.data", res.data);
//     };
//     try {
//       fetchEmployee();
//     } catch (err) {
//       dispatch(failRequest(err.message));
//       toast.error("Error in fetching data.");
//     }
//   };
// };

export const FetchUserObj = (code) => {
  return (dispatch) => {
    dispatch(makeRequest());

    const fetchEmployee = async () => {
      const res = await getEmployeeById(code);
      dispatch(getUserObj(res.data.data));
      toast.success("User Fetched successfully.");
    };
    try {
      console.log(code);
      fetchEmployee();
    } catch (err) {
      dispatch(failRequest(err.message));
      toast.error("User Fetch Failed.");
    }
  };
};
export const FunctionUpdateEmployee = (data, code) => {
  return (dispatch) => {
    dispatch(makeRequest());
    const updateEmployee = async () => {
      const res = await updateEmployee(code, data);
      dispatch(updateUser());
      toast.success("User Updated successfully.");
    };
    updateEmployee();
  };
};

export const RemoveUser = (code) => {
  return (dispatch) => {
    dispatch(makeRequest());
    const deleteEmployee = async () => {
      const res = await deleteEmployee(code);
      dispatch(deleteUser());
      toast.success("User Deleted successfully.");
    };
    deleteEmployee();
  };
};

export const FunctionAddUser = (data) => {
  return (dispatch) => {
    dispatch(makeRequest());
    const addEmployee = async () => {
      const res = await addEmployee(data);
      dispatch(addUser());
      toast.success("User Added successfully.");
    };
    addEmployee();
  };
};
