// import React from "react";
// import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

// import { createDrawerNavigator } from "@react-navigation/drawer";
// import { Ionicons, AntDesign, Feather } from "@expo/vector-icons";

// import MainStackNavigator from "./MainStackNavigator";
// import { wp } from "../utils";
// import { Home, Blog } from "../screen";
// import { globalStyles } from "../styles/globalStyles";
// import { RootDrawerParamList } from "./types";
// import { CustomDrawerContent } from "./extra/CustomDrawer";
// import { useAuthProvider } from "../hooks/useAuthProvider";
// import AuthStackNavigator from "./AuthStackNavigator";
// import { useTheme } from "../hooks";

// const RootDrawer = createDrawerNavigator<RootDrawerParamList>();

// const RootDrawerNavigator = () => {
//   const {
//     auth: { user },
//   } = useAuthProvider();

//   const toggleTheme = () => {
//     themeDispatch({
//       type: "CHANGE_THEME",
//       isLight: !isLight,
//     });
//   };

//   return (
//     <RootDrawer.Navigator
//       drawerType="slide"
//       hideStatusBar={false}
//       drawerContent={(props) => <CustomDrawerContent {...props} />}
//       screenOptions={() => ({
//         headerShown: true,
//         headerStyle: {
//           backgroundColor: isLight ? "#fff" : "#000",
//         },
//         headerTintColor: isLight ? "#000" : "#fff",
//         headerRight: () => (
//           <View style={[globalStyles.rowBetween, styles.headerLeft]}>
//             <TouchableHighlight
//               activeOpacity={0.6}
//               underlayColor="#dddddd"
//               onPress={() => {}}
//               style={[styles.highlight]}
//             >
//               <Ionicons
//                 name="ios-notifications-sharp"
//                 size={20}
//                 color={isLight ? "#000" : "#fff"}
//               />
//             </TouchableHighlight>
//             <TouchableHighlight
//               activeOpacity={0.6}
//               underlayColor="#dddddd"
//               onPress={toggleTheme}
//               style={styles.highlight}
//             >
//               <Feather
//                 name={isLight ? "sun" : "moon"}
//                 size={20}
//                 color={isLight ? "#000" : "#fff"}
//               />
//             </TouchableHighlight>
//           </View>
//         ),
//       })}
//     >
//       <RootDrawer.Screen name="Home" component={Home} />
//       <RootDrawer.Screen
//         name="Blog"
//         component={user ? Blog : AuthStackNavigator}
//         options={() => ({
//           headerShown: false,
//         })}
//       />
//     </RootDrawer.Navigator>
//   );
// };

// export default RootDrawerNavigator;

// const styles = StyleSheet.create({
//   headerLeft: {
//     marginRight: wp(15),
//   },
//   highlight: {
//     width: wp(35),
//     height: wp(35),
//     borderRadius: wp(35) / 2,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });
