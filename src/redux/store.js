import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";
import modalSlice from "./modalSlice";
import headerSlice from "./headerSlice/headerSlice";
import authSlice from "./authSlice";
import categorySlice from "./categorySlice";

export const store = configureStore({
  reducer: {
    data: dataSlice,
    modal: modalSlice,
    headerSlice: headerSlice,
    authSlice: authSlice,
    categorySlice: categorySlice,
  },
});
