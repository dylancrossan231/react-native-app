import React from "react";
import ProductList from "../Products/ProductList";
import ProductItem from "../Products/ProductItem";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { routes } from "../../routes";

const Stack = createStackNavigator();

const NavComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={routes.PRODUCT_LIST}>
        <Stack.Screen name={routes.PRODUCT_LIST} component={ProductList} />
        <Stack.Screen name={routes.PRODUCT_ITEM} component={ProductItem} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavComponent;
