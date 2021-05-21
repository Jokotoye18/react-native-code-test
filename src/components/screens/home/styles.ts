import { StyleSheet } from "react-native";
import { hp, wp } from "../../../utils";

export const styles = StyleSheet.create({
  contentWrapper: {
    paddingHorizontal: wp(15),
    paddingBottom: hp(50),
    paddingTop: hp(30),
  },
  headTitle: {
    marginBottom: hp(50),
    borderBottomWidth: 0.8,
    paddingBottom: hp(10),
  },
  title: {
    fontFamily: "RobotoBoldItalic",
    fontSize: hp(45),
    fontStyle: "italic",
  },
  seperator: {
    height: hp(3),
    backgroundColor: "#000",
    marginVertical: hp(30),
    borderRadius: hp(10),
  },
});
