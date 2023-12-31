import { createSlice } from "@reduxjs/toolkit";
import loginService from "../services/login";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    setUser(state, action) {
      return action.payload;
    },
    delUser() {
      return null;
    },
  },
});

export const { setUser, delUser } = userSlice.actions;

export const logUser = (user) => {
  return async (dispatch) => {
    try {
      const returnResult = await loginService.login(user);
      window.localStorage.setItem("loggedUser", JSON.stringify(returnResult));
      dispatch(setUser(JSON.stringify(returnResult)));
    } catch {
      console.log("Add error notification!");
    }
  };
};

export const userAreadyLoggedCheck = () => {
  return (dispatch) => {
    const loggedUserJSON = window.localStorage.getItem("loggedUser");
    if (loggedUserJSON) {
      const userLogged = JSON.parse(loggedUserJSON);
      dispatch(setUser(userLogged));
    }
  };
};

export const outUser = () => {
  return async (dispatch) => {
    dispatch(delUser());
    window.localStorage.removeItem("loggedUser");
  };
};

export default userSlice.reducer;
