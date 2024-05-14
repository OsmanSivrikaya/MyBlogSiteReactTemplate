import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  header: "home",
};

export const headerSlice = createSlice({
  name: "headerSlice",
  initialState,
  reducers: {
    changeHeaderFunc: (state, action) => {
      state.header = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeHeaderFunc } = headerSlice.actions;

export default headerSlice.reducer;
