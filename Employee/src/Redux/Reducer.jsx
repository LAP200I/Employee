import { ActionType } from "./ActionType";

const initialstate = {
  loading: true,
  userObj: {},
  userList: {},
  errMessage: "",
};

export const Reducer = (state = initialstate, action) => {
  switch (action.type) {
    case ActionType.MAKE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ActionType.FAIL_REQUEST:
      return {
        ...state,
        loading: false,
        errMessage: action.payload,
      };
    // case ActionType.GET_USER_LIST:
    //   return {
    //     loading: false,
    //     errMessage: "",
    //     // userlist: action.payload,
    //     userobj: action.payload,
    //   };
    case ActionType.GET_DATA:
      return {
        ...state,
        loading: false,
        userList: action.payload,
      };

    case ActionType.DELETE_USER:
      return {
        ...state,
        loading: false,
      };
    case ActionType.ADD_USER:
      return {
        ...state,
        loading: false,
      };
    case ActionType.UPDATE_USER:
      return {
        ...state,
        loading: false,
      };
    case ActionType.GET_USER_OBJ:
      return {
        ...state,
        loading: false,
        userObj: action.payload,
      };
    default:
      return state;
  }
};
