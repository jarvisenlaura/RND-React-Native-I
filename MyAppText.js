//MyAppText.js
import React from "react";
import { Text } from "react-native";

export const textStyles = {
  fontSize: 16,
  lineHeight: 22.4,
  color: "darkgreen",
  marginTop: 12,
  fontWeight: "300"
};

export const MyAppText = (props) => {
  return <Text style={[textStyles, props.style]}>
    {props.text}
  </Text>
}
