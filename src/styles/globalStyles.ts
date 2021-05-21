import { StyleSheet, Text, View } from "react-native";
import { wp } from "../utils";

export const globalStyles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(15),
  },
  rowCenter: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rowAround: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  rowStart: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  rowEnd: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
