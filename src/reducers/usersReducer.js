import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import usersService from "../services/users";

const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    setUsers(state, action) {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addUser.fulfilled, (state, action) =>
      state.concat(action.payload)
    );
  },
});

export const { setUsers, newUser } = usersSlice.actions;

export const getUsers = () => {
  return async (dispatch) => {
    const returnResult = await usersService.getAll();
    dispatch(setUsers(returnResult));
  };
};

export const addUser = createAsyncThunk("users/addUser", async (user) => {
  const returnResult = await usersService.addUser(user);
  return returnResult;
});

export default usersSlice.reducer;
