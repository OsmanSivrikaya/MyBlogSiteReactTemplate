import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  search: "",
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    createDataFunc: (state, action) => {
      state.data = [...state.data, action.payload];
    },
    sortingDataFunc: (state, action) => {
      state.data = [
        ...state.data.sort((a, b) =>
          action.payload == "asc"
            ? a.price - b.price
            : action.payload == "desc"
              ? b.price - a.price
              : null,
        ),
      ];
    },
    searchDataFunc: (state, action) => {
      state.search = action.payload;
    },
    deleteDataFunc: (state, action) => {
      state.data = [...state.data.filter((x) => x.id != action.payload)];
    },
    updateDataFunc: (state, action) => {
      state.data = [
        ...state.data.map((x) =>
          x.id == action.payload.id ? { ...x, ...action.payload } : x,
        ),
      ];
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  createDataFunc,
  deleteDataFunc,
  updateDataFunc,
  sortingDataFunc,
  searchDataFunc,
} = dataSlice.actions;

export default dataSlice.reducer;
