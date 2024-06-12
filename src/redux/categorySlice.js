import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: [],
  totalRecords: 0,
  loading: false,
  error: null,
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    addCategory: (state, action) => {
      state.category = [...state.category, action.payload];
    },
    addArrayCategory: (state, action) => {
      state.category = action.payload; // Yeni veriyi atama
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCategory, addArrayCategory } = categorySlice.actions;

export default categorySlice.reducer;
