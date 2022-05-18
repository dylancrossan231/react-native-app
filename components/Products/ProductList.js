import React, { useState, useEffect } from "react";
import {
  Button,
  Text,
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import { routes } from "../../routes";
import { getProductsAction } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
const ProductList = ({ navigation }) => {
  const dispatch = useDispatch();
  const { products, error } = useSelector((state) => state.productSlice);

  console.log()
  useEffect(() => {
    dispatch(getProductsAction());
  }, [dispatch]);

  // https://reactnative.dev/docs/flatlist
  //flatlist-selectable

  //renders our item with our product component
  const renderItem = ({ item }) => (
    <Product
      product={item}
      onPress={() =>
        navigation.navigate(routes.PRODUCT_ITEM, {
          itemId: item.availabilityId,
        })
      }
    />
  );

  if (error !== "") {
    return (
      <>
      <Button
          onPress={() => navigation.navigate(routes.PRODUCT_ITEM)}
          title="Try again"
        />
        <Text>{error}</Text>
        <Button
          onPress={() => dispatch(getProductsAction())}
          title="Try again"
        />
      </>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.availabilityId}
      />
    </SafeAreaView>
  );
};

// supplier name, category, ETA (in min), price
export default ProductList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },
});
