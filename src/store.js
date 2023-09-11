import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./reducers/usersReducer";
import loggedUserReducer from "./reducers/loggedUserReducer";

const store = configureStore({
  reducer: {
    users: usersReducer,
    user: loggedUserReducer,
  },
});

export default store;
