// import React from "react";
// import { View, StyleSheet, Image } from "react-native";

// import { Avatar, Text, Layout } from "@ui-kitten/components";
// import {
//   DrawerContentScrollView,
//   DrawerItemList,
//   DrawerItem,
// } from "@react-navigation/drawer";
// import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";

// import { images } from "../../constants";
// import { hp, wp } from "../../utils";
// import { auth } from "firebase";
// import { navigationRef } from "../../helpers/navigate";
// import { globalStyles } from "../../styles/globalStyles";

// export const CustomDrawerContent = (props) => {
//   const handleSignOut = () => {
//     auth()
//       .signOut()
//       .then(() => console.log("User signed out!"));
//     navigationRef.current?.navigate("Home");
//   };

//   return (
//     <>
//       <DrawerContentScrollView
//         contentContainerStyle={{ flexGrow: 1 }}
//         {...props}
//       >
//         <Layout style={styles.wrapper}>
//           <View style={[globalStyles.rowCenter, styles.logoContainer]}>
//             <Image
//               source={require("../../assets/images/mac-os.png")}
//               style={styles.logo}
//               resizeMode="contain"
//             />
//           </View>
//           <DrawerItem
//             label="Home"
//             icon={({ color, size }) => (
//               <Feather name="home" color={color} size={size} />
//             )}
//             onPress={() => props.navigation.jumpTo("Home")}
//           />
//           <DrawerItem
//             label="Help"
//             icon={({ color, size }) => (
//               <Feather name="help-circle" color={color} size={size} />
//             )}
//             onPress={() => {}}
//           />
//           <View style={styles.footer}>
//             <DrawerItem
//               label="Sign out"
//               icon={({ color, size }) => (
//                 <MaterialCommunityIcons
//                   name="exit-to-app"
//                   color={color}
//                   size={size}
//                 />
//               )}
//               onPress={handleSignOut}
//             />
//           </View>
//         </Layout>
//       </DrawerContentScrollView>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   wrapper: {
//     flex: 1,
//     position: "absolute",
//     left: 0,
//     width: "100%",
//     height: "100%",
//   },
//   avater: {
//     marginVertical: hp(20),
//   },
//   logoContainer: {
//     marginBottom: hp(20),
//     paddingTop:hp(70)
//   },
//   logo: {
//     width: "80%",
//     height: hp(200),
//   },
//   footer: {
//     position: "absolute",
//     bottom: 40,
//     left: 0,
//     width: "100%",
//   },
// });
