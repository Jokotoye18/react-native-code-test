import { StyleSheet } from "react-native";
import { hp, wp } from "../../../utils";

export const styles = StyleSheet.create({
  wrapper: {
    flexGrow: 1,
  },
  back: {
    marginTop: hp(20),
  },
  header: {
    flex: 1,
    marginTop: hp(30),
  },
  forms: {
    flex: 6,
  },
  inputContainer: {
    marginBottom: hp(30),
  },
  input: {
    borderRadius: hp(10),
    height: hp(50),
  },
  error: {
    paddingTop: hp(5),
    fontSize: hp(13),
  },
  acoountMessage: {
    textAlign: "center",
    paddingRight: wp(10),
  },
  btn: {
    width: "100%",
    borderRadius: hp(10),
    // backgroundColor: "red",
    color: "red",
    height: hp(50),
  },
  footer: {
    // position: "absolute",
    // bottom: 100,
    width: "100%",
  },
});
