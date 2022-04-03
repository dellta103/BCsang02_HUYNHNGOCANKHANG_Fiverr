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
    setAvatar: (state, action) => {
      state.userInfo.avatar = action.payload.name;
    },
  },
});

const { actions, reducer } = userSlice;

export const { setSignIn, setAvatar } = actions;

export default reducer;
