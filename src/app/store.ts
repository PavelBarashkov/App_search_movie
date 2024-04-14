import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import { userInfoSlice } from "../slices/usersSlise/userSlice";
import { productListSlice } from "../modules/ProductList/slice/productListSlice";
import { api } from "../API/myApi";
import filterSlice from "../modules/Filter/slice/filterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    userInfo: userInfoSlice.reducer,
    productList: productListSlice.reducer,
    filter: filterSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
