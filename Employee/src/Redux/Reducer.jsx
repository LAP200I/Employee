import { ActionType } from "./ActionType";

const initialstate = {
  loading: true,
  userlist: [],
  userobj: {},
  errmessage: "",
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
        errmessage: action.payload,
      };
    case ActionType.GET_USER_LIST:
      return {
        loading: false,
        errmessage: "",
        userlist: action.payload,
        userobj: "",
      };
    case ActionType.GET_DATA:
      return {
        ...state,
        loading: false,
        userobj: action.payload,
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
        userobj: action.payload,
      };
    default:
      return state;
  }
};
