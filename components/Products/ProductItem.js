import { Box } from "native-base";
import React from "react";
import { Button, Text, FlatList,SafeAreaView, StyleSheet,View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ProductItemImage from "./productTemplates/ProductItemTemplate";
const ProductItem = ({route, navigation}) => {
  const dispatch = useDispatch();
  const {products, error} = useSelector((state) => state.productSlice);


  if(error !== "" || (!route.params?.itemId)) {
    return (
    <>
    <Text>{error === "" ? "Could not find product" : error}</Text>
    <Button
      onPress={() => error === "" ? navigation.goBack() : dispatch(getProductsAction())}
      title={error === "" ? "Go back" : "Try again"}
    />
    </>
    );
  }

  const id = route.params.itemId
  const productIndex = products.findIndex(item => item.availabilityId === id);
  const product = products[productIndex]

  return <ProductItemImage product={product} />;
};
export default ProductItem ;


const styles = StyleSheet.create({

  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 22,
  },
  
});