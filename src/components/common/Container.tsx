import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  StyleProp,
  ViewStyle,
  ScrollViewProps,
} from "react-native";
import { globalStyles } from "../../styles/globalStyles";
import { wp } from "../../utils";

type Props = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

type extendProps = Props & ScrollViewProps;

export const Container = ({ children, style, ...rest }: extendProps) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      {...rest}
      style={[globalStyles.container, style]}
    >
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
});
