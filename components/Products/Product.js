import React from "react";
import { TouchableOpacity, Text, StyleSheet,Image } from "react-native";
import bolt from '../../assets/supplier-bolt.svg'
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
      <Image style ={styles.image} source={require("../../assets/supplier-bolt.svg")} />
    </TouchableOpacity>
  );
};
export default Product;
const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 22,
  },
  image: {
    height:300,
    width:100
  }
});
