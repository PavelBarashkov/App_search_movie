import { createSlice } from "@reduxjs/toolkit";
import { ProductList } from "../../../interface";

interface IProductSlice {
    products?: any
}

const initialState: IProductSlice = {
  products: undefined
};

export const productListSlice = createSlice({
  name: "productListSlice",
  initialState,
  reducers: {
    setProductList: (state, action) => {
      state.products = action.payload
    }
  },
});

export const {setProductList} = productListSlice.actions;
export default productListSlice.reducer;
