import React from "react";
import { Platform } from "react-native";

import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import { Login } from "../screen";
import { AuthStackParamList } from "./types";

const AuthStack = createStackNavigator<AuthStackParamList>();

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator
      initialRouteName={"Login"}
      screenOptions={({}) => ({
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      })}
      mode={Platform.OS === "android" ? "card" : "modal"}
    >
      <AuthStack.Screen name="Login" component={Login} />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
