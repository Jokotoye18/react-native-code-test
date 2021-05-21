import { StyleSheet } from "react-native";
import { hp, wp } from "../../../utils";

export const styles = StyleSheet.create({
  wrapper: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: "#1b1209",
    flex: 2,
    justifyContent: "center",
    position: "relative",
  },
  img: {
    width: "100%",
    height: hp(250),
    // marginVertical: hp(40),
  },
  highlight: {
    justifyContent: "center",
    alignItems: "center",
    width: wp(40),
    height: wp(40),
    borderRadius: wp(40) / 2,
    position: "absolute",
    top: hp(10),
    left: wp(5),
    zIndex: 1000,
  },
  backIcon: {},
  head: {
    borderBottomWidth: 0.3,
  },
  title: {
    paddingVertical: hp(20),
  },
  otherInfo: {
    paddingBottom: hp(10),
  },
  body: {
    flex: 4,
    paddingHorizontal: wp(15),
  },
  blogContent: {
    paddingVertical: hp(50),
    lineHeight: 30,
  },
});
