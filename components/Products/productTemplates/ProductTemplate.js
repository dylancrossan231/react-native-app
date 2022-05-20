import { AspectRatio, HStack } from "native-base";
import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Box, Image, Center, Stack, Heading, Text } from "native-base";
import { SvgUri } from "react-native-svg";
import ProductImage from "./ProductImage";
const ProductTemplate = ({ product, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.item}>
      <Box alignItems="center">
        <Box
          maxW="80"
          rounded="lg"
          overflow="hidden"
          borderColor="coolGray.200"
          borderWidth="1"
          _dark={{
            borderColor: "coolGray.600",
            backgroundColor: "gray.700",
          }}
          _web={{
            shadow: 2,
            borderWidth: 0,
          }}
          _light={{
            backgroundColor: "gray.50",
          }}
        >
          <Box>
          <ProductImage supplierKey={product.supplier.supplierKey}/>
            <Center
              bg="violet.500"
              _dark={{
                bg: "violet.400",
              }}
              _text={{
                color: "warmGray.50",
                fontWeight: "700",
                fontSize: "xs",
              }}
              position="absolute"
              bottom="0"
              px="3"
              py="1.5"
            >
              {product.supplier.supplierName}
            </Center>
          </Box>
          <Stack p="4" space={3}>
            <Stack space={2}>
              <Box flexDirection="row">
                <Heading size="md" ml="-1">
                  {product.category.productType} {product.category.vehicleType}
                </Heading>
              </Box>
              <Text
                fontSize="xs"
                _light={{
                  color: "violet.500",
                }}
                _dark={{
                  color: "violet.400",
                }}
                fontWeight="500"
                ml="-0.5"
                mt="-1"
              >
                ETA: {product.eta} minutes
              </Text>
            </Stack>

            <Text fontWeight="400">
              Price:{product.price.amount} {product.price.currency}
            </Text>
            <HStack
              alignItems="center"
              space={4}
              justifyContent="space-between"
            >
              <HStack alignItems="center">
                <Text
                  _light={{
                    color: "violet.500",
                  }}
                  _dark={{
                    color: "violet.400",
                  }}
                  fontWeight="400"
                >
                  {product.supplier.supplierName}
                </Text>
              </HStack>
              <Text
                fontSize="xs"
                _light={{
                  color: "violet.500",
                }}
                _dark={{
                  color: "violet.400",
                }}
                style={{ position: "absolute", right: 0 }}
              >
                {product.category.subCategory.toString().replace("_", " ")}
              </Text>
            </HStack>
          </Stack>
        </Box>
      </Box>
    </TouchableOpacity>
  );
};
export default ProductTemplate;
const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 22,
  },
  image: {
    height: 300,
    width: 100,
  },
});
