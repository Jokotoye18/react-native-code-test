import React from "react";
import { View, Platform, TouchableHighlight, StyleSheet } from "react-native";

import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import {
  Ionicons,
  AntDesign,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

import { MainStackParamList } from "./types";
import { Home, Blog } from "../screen";
import { globalStyles } from "../styles/globalStyles";
import { wp } from "../utils";
import { useAuthProvider, useTheme } from "../hooks";
import AuthStackNavigator from "./AuthStackNavigator";
import { auth } from "firebase";
import { navigationRef } from "../helpers/navigate";

const MainStack = createSharedElementStackNavigator<MainStackParamList>();

const MainStackNavigator = () => {
  const {
    auth: { user },
  } = useAuthProvider();
  const { isLight, themeDispatch } = useTheme();

  const toggleTheme = () => {
    themeDispatch({
      type: "CHANGE_THEME",
      isLight: !isLight,
    });
  };

  const handleSignOut = () => {
    auth()
      .signOut()
      .then(() => alert("signed out!"));
    navigationRef.current?.navigate("Home");
  };

  return (
    <MainStack.Navigator
      screenOptions={({ navigation, route }) => ({
        useNativeDriver: true,
        cardStyleInterpolator: ({ current: { progress } }) => {
          return {
            cardStyle: {
              opacity: progress,
            },
          };
        },
        headerShown: true,
        headerTitleAlign: "center",
        // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerStyle: {
          backgroundColor: isLight ? "#fff" : "#000",
        },
        headerTintColor: isLight ? "#000" : "#fff",
        headerLeft: () => (
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#dddddd"
            onPress={handleSignOut}
            style={[styles.highlight, styles.logoutIcon]}
          >
            <MaterialCommunityIcons
              name="exit-to-app"
              color={isLight ? "#000" : "#fff"}
              size={20}
            />
          </TouchableHighlight>
        ),
        headerRight: () => (
          <View style={[globalStyles.rowBetween, styles.headerLeft]}>
            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor="#dddddd"
              onPress={() => {}}
              style={[styles.highlight]}
            >
              <Ionicons
                name="ios-notifications-sharp"
                size={20}
                color={isLight ? "#000" : "#fff"}
              />
            </TouchableHighlight>
            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor="#dddddd"
              onPress={toggleTheme}
              style={styles.highlight}
            >
              <Feather
                name={isLight ? "sun" : "moon"}
                size={20}
                color={isLight ? "#000" : "#fff"}
              />
            </TouchableHighlight>
          </View>
        ),
      })}
      mode={"modal"}
      // headerMode="none"
    >
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen
        name="Blog"
        component={user ? Blog : AuthStackNavigator}
        options={() => ({
          headerShown: false,
        })}
        sharedElementsConfig={(route, otherRoute, showing) => {
          const { blog } = route.params;
          const { title, imageUrl } = blog;
          return [
            {
              id: `item.${imageUrl}.image`,
              animation: "fade",
              resize: "clip",
              align: "left-top",
            },
            {
              id: `item.${title}.title`,
              animation: "fade",
              resize: "clip",
              align: "left-top",
            },
          ];
          // if (route.name === "Blog" && showing) {
          //   // Open animation fades in image, title and description
          // } else {
          //   // Close animation only fades out image
          //   return [
          //     {
          //       id: `item.${imageUrl}.image`,
          //     },
          //     {
          //       id: `item.${title}.title`,
          //     },
          //   ];
          // }
        }}
      />
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;

const styles = StyleSheet.create({
  headerLeft: {
    marginRight: wp(15),
  },
  highlight: {
    width: wp(35),
    height: wp(35),
    borderRadius: wp(35) / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  logoutIcon: {
    marginLeft: wp(15),
  },
});
