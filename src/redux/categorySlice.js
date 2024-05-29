import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: [],
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    addCategory: (state, action) => {
      state.category = [...state.category, action.payload];
      console.log(state.category);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCategory } = categorySlice.actions;

export default categorySlice.reducer;
