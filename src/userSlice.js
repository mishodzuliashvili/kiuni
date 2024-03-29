import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: { name: "Guest" },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;
