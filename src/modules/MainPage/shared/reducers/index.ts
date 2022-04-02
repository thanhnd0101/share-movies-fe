import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type LoginPayLoad = {
  username: string;
  token: string;
};

interface userState {
  token: string;
  username: string;
}

const initialState: userState = {
  token: "",
  username: "",
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginAC: (state: userState, action: PayloadAction<LoginPayLoad>) => {
      state.token = action.payload.token;
      state.username = action.payload.username;
    },
    logoutAC: (state: userState, action: PayloadAction) => {
      state.token = "";
      state.username = "";
    },
  },
});

export const { loginAC, logoutAC } = loginSlice.actions;

export default loginSlice.reducer;
