import { createSlice } from "@reduxjs/toolkit";

const storedUseInfo = localStorage.getItem("user_info");
const UseInfoFromLocalStorage = storedUseInfo
  ? JSON.parse(storedUseInfo)
  : {
      email: "",
      isAuth: false,
    };

interface IUser {
  email: string;
  isAuth: boolean;
}

interface IUserSlice {
  user: IUser;
}

const initialState: IUserSlice = {
  user: UseInfoFromLocalStorage,
};

export const userInfoSlice = createSlice({
  name: "userInfoSlice",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user.email = action.payload;
      state.user.isAuth = true;
      localStorage.setItem(
        "user_info",
        JSON.stringify({ email: action.payload, isAuth: true })
      );
    },
    logout: (state) => {
      state.user.email = "";
      state.user.isAuth = false;
      localStorage.removeItem("user_info");
    },
  },
});

export const { setUser, logout } = userInfoSlice.actions;
export default userInfoSlice.reducer;
