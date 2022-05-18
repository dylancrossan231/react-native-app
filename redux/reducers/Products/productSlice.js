import  {getProductsAction}  from '../../actions';
import { createSlice } from '@reduxjs/toolkit'
export const productSlice = createSlice({
  name: "products",
  initialState: { products: [], selectedProductId: "", error: "" },

  reducers: {
    setProducts: (state, action) => {
      return { ...state, products: [...action.payload], error: "" };
    },
    setSelectedProductId: (state, action) => {
      return {...state, selectedProductId: action.payload}
    },
    setError: (state, action) => {
      return { ...state, error: action.payload };
    },

  },
});

export const { setProducts, setError } = productSlice.actions;

export default productSlice.reducer;

    // availabilityId: '',
    // eta: 0,
    // supplier: {
    //   supplierName: '',
    //   supplierKey: ''
    // },
    // category: {
    //   productType: '',
    //   vehicleType: '',
    //   subCategory: '',
    // },
    // price: {
    //   amount: 0,
    //   currency: ''
    // },
    // product:{
    //   maxPax: 0,
    //   bags:{
    //     max: 0,
    //     large: 0,
    //     small: 0
    //   },
    //   maxSeats:0
    // }