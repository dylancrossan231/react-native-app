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

const ProductList = ({ navigation }) => {
  const dispatch = useDispatch();
  const { products, error } = useSelector((state) => state.productSlice);

  useEffect(() => {
    dispatch(getProductsAction());
  }, [dispatch]);

  // https://reactnative.dev/docs/flatlist
  //flatlist-selectable

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
const Product = ({ product, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.item}>
      <Text>Category:</Text>
      <Text style={styles.title}>
        {product.category.productType} {product.category.vehicleType}
      </Text>
      <Text>Supplier: {product.supplier.supplierName}</Text>
      <Text>ETA: {product.eta} minutes</Text>
      <Text>
        Price: {product.price.currency}
        {product.price.amount}
      </Text>
    </TouchableOpacity>
  );
};
// supplier name, category, ETA (in min), price
export default ProductList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 22,
  },
});
