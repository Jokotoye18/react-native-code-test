import React from "react";

import { NavigationContainer } from "@react-navigation/native";

// import AuthStackNavigator from "./AuthStackNavigator";
import MainStackNavigator from "./MainStackNavigator";
import { useAuthProvider } from "../hooks/useAuthProvider";
import { navigationRef } from "../helpers/navigate";

export const NavigationContainerComponent = () => {
  const {
    auth: { user },
  } = useAuthProvider();

  return (
    <NavigationContainer ref={navigationRef}>
      <MainStackNavigator />
    </NavigationContainer>
  );
};
