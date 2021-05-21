import React from "react";
import { View } from "react-native";
import { Spinner } from "@ui-kitten/components";

export const LoadingIndicator = () => (
  <View style={[]}>
    <Spinner size="small" status="info" />
  </View>
);
