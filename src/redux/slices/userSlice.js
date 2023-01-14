import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  uid: null,
  userName: null,
 
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.uid = action.payload.uid;
      state.userName = action.payload.userName;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;