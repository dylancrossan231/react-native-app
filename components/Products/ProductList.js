import React from "react"
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from "react-native";
import {routes} from '../../routes'
const ProductList = ({navigation}) =>{
 return (
   <Button
     onPress={() => navigation.navigate(routes.PRODUCT_ITEM)}
     title="Go To ProductItem"
   />
 );
}
export default ProductList;