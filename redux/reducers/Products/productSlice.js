import  {getProductsAction}  from '../../actions';
import { createSlice } from '@reduxjs/toolkit'
export const productSlice = createSlice({
  name: "products",
  initialState: { products: [], selectedProductId: "", error: "" },

  reducers: {
    setProducts: (state, action) => {
      console.log(action.payload,"HERE");
      const productArray = action.payload;
      productArray.sort(function(etaA,etaB){
        return etaA.eta - etaB.eta
      });
      return { ...state, products: [...action.payload], error: "" };
    },
    setError: (state, action) => {
      return { ...state, error: action.payload };
    },

  },
});

export const { setProducts, setError } = productSlice.actions;

export default productSlice.reducer;
