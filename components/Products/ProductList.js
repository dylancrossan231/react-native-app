import React, { useState, useEffect } from "react";
import {
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
import ProductTemplate from "./productTemplates/ProductTemplate"
import { Box, Button,Center,Stack } from "native-base";
const ProductList = ({ navigation }) => {
  const { products, error } = useSelector((state) => state.productSlice);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getProductsAction());
  }, [dispatch]);
  useEffect(() => {
    setStateProducts(products);
  }, [products]);
    const [productsArray, setStateProducts] = useState(products);

  function onPressFilter(supplierName) {
    if (supplierName === "Bolt") {
      const boltData = products.filter(
        (item) => item.supplier.supplierName === supplierName
      );
      setStateProducts(boltData);
    } else if (supplierName === "FREENOW") {
      const freeNowData = products.filter(
        (item) => item.supplier.supplierName === supplierName
      );
      setStateProducts(freeNowData);
    } else if (supplierName === "All") {
      setStateProducts(products);
    }
  }

  const renderItem = ({ item }) => (
    <ProductTemplate
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
        <Text>{error}</Text>
        <Button onPress={() => dispatch(getProductsAction())}>Try Again</Button>
      </>
    );
  }
  const [direction, setDirection] = useState("row");
  return (
    <SafeAreaView style={styles.container}>
      <Box alignItems="center">
      <Stack direction={direction} mt={4} space={39} mb={2} alignItems="center">
        <Center>
          <Button bg="#8b5cf6" onPress={() => onPressFilter("All")}>
            All
          </Button>
        </Center>
        <Center>
          <Button bg="#8b5cf6" onPress={() => onPressFilter("Bolt")}>
            Filter Bolt
          </Button>
        </Center>
        <Center>
          <Button bg="#8b5cf6" onPress={() => onPressFilter("FREENOW")}>
            Filter FreeNow
          </Button>
        </Center>
      </Stack>
      </Box>
      <FlatList
        data={productsArray}
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
