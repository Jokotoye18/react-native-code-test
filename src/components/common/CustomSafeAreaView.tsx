import React from "react";
import { SafeAreaView, StyleProp, ViewStyle } from "react-native";

import { Layout } from "@ui-kitten/components";

import { colors } from "../../constants/index";

type Props = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

export const CustomSafeAreaView = ({ children, style }: Props) => {
  return (
    <SafeAreaView style={[{ flex: 1 }, style]}>
      <Layout style={[{ flex: 1 }]}>{children}</Layout>
    </SafeAreaView>
  );
};
