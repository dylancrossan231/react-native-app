import React from "react";
import { Button, Text, FlatList,SafeAreaView, StyleSheet,View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

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

  return (
    
    <View style={styles.item}>
    <Text>Category:</Text>
     <Text style={styles.title}>{product.category.productType} {product.category.vehicleType}</Text>
     <Text >Supplier: {product.supplier.supplierName}</Text>
     <Text>ETA: {product.eta} minutes</Text>
      <Text>
       Price: {product.price.currency}{product.price.amount} 
     </Text> 

    </View>
  );
};
export default ProductItem ;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 22,
  },
});