import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: "loading",
  initialState: false,
  reducers: {
    toggleLoading: (state) => !state,
  },
});

export const loadingSelector = (state) => state.loading;

export const { toggleLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
