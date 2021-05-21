import { StackNavigationProp } from "@react-navigation/stack";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { CompositeNavigationProp } from "@react-navigation/native";
import { RouteProp } from "@react-navigation/native";
import { BlogType } from "../models/blog.model";

//  ===========================================

// AuthStack param list
export type AuthStackParamList = {
  Login: undefined;
};

// navigation prop
type LoginScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<AuthStackParamList, "Login">,
  DrawerNavigationProp<MainStackParamList>
>;

// route prop
type LoginScreenRouteProp = RouteProp<AuthStackParamList, "Login">;

export type LoginProps = {
  navigation: LoginScreenNavigationProp;
  route: LoginScreenRouteProp;
};

// ===============================================

// ===============================================

// Main stack param list
// export type MainStackParamList = {};

// navigation prop MainHome

// navigation prop Blog
// type BlogScreenNavigationProp = StackNavigationProp<MainStackParamList, "Blog">;

// // route prop Blog
// type BlogScreenRouteProp = RouteProp<MainStackParamList, "Blog">;

// export type BlogProps = {
//   navigation: BlogScreenNavigationProp;
//   route: BlogScreenRouteProp;
// };

// =============================================

// Main stack

export type MainStackParamList = {
  Home: undefined;
  Blog: { blog: BlogType; index: number };
};

type HomeScreenNavigationProp = StackNavigationProp<MainStackParamList, "Home">;

// route prop Home
type HomeScreenRouteProp = RouteProp<MainStackParamList, "Home">;

export type HomeProps = {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
};

type BlogScreenNavigationProp = DrawerNavigationProp<
  MainStackParamList,
  "Blog"
>;

// route prop Blog
type BlogScreenRouteProp = RouteProp<MainStackParamList, "Blog">;

export type BlogProps = {
  navigation: BlogScreenNavigationProp;
  route: BlogScreenRouteProp;
};
