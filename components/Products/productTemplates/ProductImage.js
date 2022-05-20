import React from "react";
import { AspectRatio } from "native-base";
import { SvgUri } from "react-native-svg";
const ProductImage = ({ supplierKey }) => {
  const urlString =supplierKey;
  const uri = `https://raw.githubusercontent.com/cartrawler/mobility-react-native-assessment/14a686fdb5e27fa6e1afceb4ba4c7865ad5a0f02/assets/supplier-${urlString}.svg`;
  console.log(urlString);
  // if("hi"){

  return (
    <AspectRatio w="100%" ratio={16 / 9}>
      <SvgUri width="100%" height="100%" uri={uri} />
    </AspectRatio>
  );
  // }
};
export default ProductImage;
