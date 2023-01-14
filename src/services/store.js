
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import shortUrlSlice from "../redux/slices/shortUrlSlice";

export const store = configureStore({
  reducer: {
    auth: userSlice,
    shortUrl: shortUrlSlice
  },
});