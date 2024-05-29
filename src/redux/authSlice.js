import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
  isAuthenticated: false,
  error: false,
  errorMessage: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAutFunc: (state, action) => {
      debugger;
      if (action.payload) {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.error = false;
        state.errorMessage = "";
      } else {
        state.user = "";
        state.isAuthenticated = false;
        state.error = true;
        state.errorMessage = "login hatalı";
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAutFunc } = authSlice.actions;

export default authSlice.reducer;
