import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import shortUrlSlice from "./slices/shortUrlSlice";
import loadingSlice from "./slices/loadingSlice";

export const store = configureStore({
  reducer: {
    auth: userSlice,
    shortURL: shortUrlSlice,
    loading: loadingSlice,
  },
});
