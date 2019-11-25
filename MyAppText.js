import React from "react";
import { Text } from "react-native";

export const textStyles = {
  fontFamily: "Helvetica",
  fontSize: 16,
  lineHeight: 22.4,
  color: "black",
  marginTop: 12,
  fontWeight: "500"
};

export const MyAppText = ({style, ...props}) => (
  <Text {...props} style={[textStyles, style]} />
);
