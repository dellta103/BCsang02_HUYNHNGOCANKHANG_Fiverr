import { createSlice } from "@reduxjs/toolkit";
import { localService } from "../../../services/localService";
let initialState = {
  userInfo: localService.getUserInfo() || null,
};
const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setSignIn: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

const { actions, reducer } = userSlice;

export const { setSignIn } = actions;

export default reducer;
