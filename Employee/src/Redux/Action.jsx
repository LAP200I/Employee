import axios from "axios";
import { toast } from "react-toastify";
// import Updateuser from "../Component/Updateuser";
import { ActionType } from "./ActionType";
import { getEmployee } from "../api/GetEmployee";

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
export const geUserList = (data) => {
  return {
    type: ActionType.GET_USER_LIST,
    payload: data,
  };
};
export const getUser = (data) => {
  return {
    type: ActionType.GET_USER,
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
// export const updateUser = () => {
//   return {
//     type: UPDATE_USER,
//   };
// };
export const getUserObj = (data) => {
  return {
    type: ActionType.GET_USER_OBJ,
    payload: data,
  };
};

export const FetchUserList = () => {
  return (dispatch) => {
    dispatch(makeRequest());

    const fetchEmployee = async () => {
      const res = await getEmployee();
      dispatch(geUserList(res.data.data));
    };
    fetchEmployee();
  };
};

export const FetchUser = (id) => {
  return (dispatch) => {
    dispatch(makeRequest());

    const fetchEmployee = async () => {
      const res = await getEmployeeById(id);
      dispatch(getUser(res.data.data));
    };
    fetchEmployee();
  };
};

// export const RemoveUser = (code) => {
//   return (dispatch) => {
//     dispatch(makeRequest());
//     //setTimeout(() => {
//     axios
//       .delete("http://localhost:8000/user/" + code)
//       .then((res) => {
//         dispatch(deleteUser());
//       })
//       .catch((err) => {
//         dispatch(failRequest(err.message));
//       });
//     // }, 2000);
//   };
// };

// export const FunctionAddUser = (data) => {
//   return (dispatch) => {
//     dispatch(makeRequest());
//     //setTimeout(() => {
//     axios
//       .post("http://localhost:8000/user", data)
//       .then((res) => {
//         dispatch(addUser());
//         toast.success("User Added successfully.");
//       })
//       .catch((err) => {
//         dispatch(failRequest(err.message));
//       });
//     // }, 2000);
//   };
// };

// export const FunctionUpdateUser = (data, code) => {
//   return (dispatch) => {
//     dispatch(makeRequest());
//     //setTimeout(() => {
//     axios
//       .put("http://localhost:8000/user/" + code, data)
//       .then((res) => {
//         dispatch(updateUser());
//         toast.success("User Updated successfully.");
//       })
//       .catch((err) => {
//         dispatch(failRequest(err.message));
//       });
//     // }, 2000);
//   };
// };
// export const FetchUserObj = (code) => {
//   return (dispatch) => {
//     dispatch(makeRequest());
//     //setTimeout(() => {
//     axios
//       .get("http://localhost:8000/user/" + code)
//       .then((res) => {
//         const userlist = res.data;
//         dispatch(getUserObj(userlist));
//       })
//       .catch((err) => {
//         dispatch(failRequest(err.message));
//       });
//     // }, 2000);
//   };
// };
