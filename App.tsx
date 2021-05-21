import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import * as eva from "@eva-design/eva";
// import 'react-native-reanimated'
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { ApplicationProvider, Text } from "@ui-kitten/components";

import mapping from "./mapping.json";
import { light, dark } from "@eva-design/eva";
import { LottieActivityLoader } from "./src/components";
import { AuthProvider } from "./src/contexts/auth-context";
import { ThemeProvider } from "./src/contexts/theme-context";
import { NavigationContainerComponent } from "./src/navigations";
import { auth } from "./src/helpers/firebase";
import { useAuthProvider } from "./src/hooks/useAuthProvider";
import { useTheme } from "./src/hooks";

const App = () => {
  const [loaded, error] = useFonts({
    Roboto: require("./src/assets/fonts/Roboto/Roboto.ttf"),
    RobotoBold: require("./src/assets/fonts/Roboto/Roboto-Bold.ttf"),
    RobotoBoldItalic: require("./src/assets/fonts/Roboto/Roboto-BoldItalic.ttf"),
    RobotoLightItalic: require("./src/assets/fonts/Roboto/Roboto-LightItalic.ttf"),
  });
  const { auth: authState, dispatch } = useAuthProvider();
  const { isLight } = useTheme();

  const handleAuthStateChange = (user: any) => {
    dispatch({
      type: "SET_USER",
      payload: user,
    });
    if (authState.initializing) {
      dispatch({
        type: "CANCEL_INITIALIZING",
      });
    }
  };

  useEffect(() => {
    const subscribe = auth.onAuthStateChanged(handleAuthStateChange);
    return subscribe;
  }, [authState.user]);

  if (authState.initializing) {
    return <LottieActivityLoader isVisible={true} />;
  }

  return (
    <ApplicationProvider
      {...eva}
      theme={isLight ? light : dark}
      customMapping={{ ...eva.mapping, ...mapping }}
    >
      <StatusBar
        style={isLight ? "dark" : "light"}
        translucent={false}
        backgroundColor={isLight ? "#fff" : "#000"}
      />
      <NavigationContainerComponent />
    </ApplicationProvider>
  );
};

export default () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  );
};
