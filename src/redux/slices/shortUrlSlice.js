import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  shortUrl: [],
  active: null,
};

const urlSlice = createSlice({
  name: "shortUrl",
  initialState,
  reducers: {
    setActiveUrl(state, action) {
      state.active = action.payload.activeUrl;
    },
    loadUrl(state, action) {
      state.shortUrl = action.payload.url;
    },
     updateNotes(state, action) {
      state.shortUrl = state.shortUrl.map((url) => {
       return url.id === action.payload.urlId ? action.payload.url : url;
      });
    }, 

    deleteUrl(state) {
      state.active = null;
    },

    logoutCleaning(state) {
      state.active = null;
      state.shortUrl = [];
    },
  },
});

export const { setActiveUrl, loadUrl, updateNotes, logoutCleaning, deleteUrl } = urlSlice.actions;

export default urlSlice.reducer;