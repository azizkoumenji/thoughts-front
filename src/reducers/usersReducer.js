import { createSlice } from "@reduxjs/toolkit";
import usersService from "../services/users";

const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    setUsers(state, action) {
      return action.payload;
    },
    newUser(state, action) {
      return state.concat(action.payload);
    },
  },
});

export const { setUsers, newUser } = usersSlice.actions;

export const getUsers = () => {
  return async (dispatch) => {
    const returnResult = await usersService.getAll();
    dispatch(setUsers(returnResult));
  };
};

export const addUser = (user) => {
  return async (dispatch) => {
    const returnResult = await usersService.addUser(user);
    dispatch(newUser(returnResult));
  };
};

export default usersSlice.reducer;
