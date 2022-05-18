
import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./reducers/Products/productSlice";


export default configureStore({
  reducer: { productSlice },
});