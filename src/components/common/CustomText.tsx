import React from "react";
import { StyleSheet, StyleProp, TextStyle } from "react-native";
import { Text, TextProps } from "@ui-kitten/components";

type Props = {
  text: string;
  textAlign?: "auto" | "left" | "right" | "center" | "justify";
  fontWeight?:
    | "normal"
    | "bold"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900";
  style?: StyleProp<TextStyle>;
};

type extendProps = Props & TextProps;

export const CustomText = ({
  text,
  textAlign = "left",
  fontWeight = "400",
  style,
  ...rest
}: extendProps) => {
  return (
    <Text style={[{ textAlign, fontWeight }, style]} {...rest}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {},
});
