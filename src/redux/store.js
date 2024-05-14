import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";
import modalSlice from "./modalSlice";
import headerSlice from "./headerSlice/headerSlice";

export const store = configureStore({
  reducer: {
    data: dataSlice,
    modal: modalSlice,
    headerSlice: headerSlice,
  },
});
