import { createSlice } from "@reduxjs/toolkit";

const users = [
  {
    userName: "devkrish",
    password: "lisec",
  },
  { userName: "musthaw", password: "lisec" },
  { userName: "kaflemah", password: "lisec" },
];
const initialState = {
  error: "",
  isLoggedIn: localStorage.getItem("userName"),
};

export const accountSlice = createSlice({
  name: "accountSlice",
  initialState,
  reducers: {
    login: (state, action) => {
      if (
        users.some(
          (user) =>
            user.userName === action.payload.userName &&
            user.password === action.payload.password
        )
      ) {
        state.error = "";
        state.isLoggedIn = true;
        localStorage.setItem("userName", action.payload.userName);
      } else {
        state.error = "Invalid credentials";
        localStorage.removeItem("userName");
        state.isLoggedIn = false;
      }
    },
    logout: (state) => {
      state.isLoggedIn = false;
      localStorage.removeItem("userName");
    },
  },
});

export const { login, logout } = accountSlice.actions;

export default accountSlice.reducer;
