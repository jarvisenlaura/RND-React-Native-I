import React from "react";
import { Text } from "react-native";

export const textStyles = {
  fontFamily: "Helvetica",
  fontWeight: "normal",
  fontSize: 16,
  lineHeight: 22.4,
  color: "black"
};

export const MyAppText = ({style, ...props}) => (
  <Text {...props} style={[textStyles, style]} />
);