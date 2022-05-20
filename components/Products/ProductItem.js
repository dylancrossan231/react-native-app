import { Box } from "native-base";
import React from "react";
import {
  Text,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ProductItemImage from "./productTemplates/ProductItemTemplate";
import {Button} from "native-base"
const ProductItem = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const { products, error } = useSelector((state) => state.productSlice);
  const id = route.params.itemId;
  const productIndex = products.findIndex((item) => item.availabilityId === id);
  const product = products[productIndex];

  if (error !== "" || !route.params?.itemId) {
    return (
      <>
        <Text>{error === "" ? "Could not find product" : error}</Text>
        <Button
          bg="#8b5cf6"
          onPress={() =>
            error === "" ? navigation.goBack() : dispatch(getProductsAction())
          }
        >
          Try Again
        </Button>
      </>
    );
  }

  return <ProductItemImage product={product} />;
};
export default ProductItem;

