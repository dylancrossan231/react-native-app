
import {
  setProducts,
  setError,
} from "./reducers/Products/productSlice";


export const getProductsAction = () => {
  
  return (dispatch) => {
    fetch(
      "https://raw.githubusercontent.com/cartrawler/mobility-react-native-assessment/master/assets/availability.json",      
      {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("Success", data)
        dispatch(setProducts(data));
      })
      .catch((error) => {
        console.log("error getting data!", error);
        dispatch(setError("Error: Could not connect to server", ))
      });
  };
};