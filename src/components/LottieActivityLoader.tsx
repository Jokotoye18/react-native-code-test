import React from "react";
import { View, Text } from "react-native";
import Modal from "react-native-modal";
import { globalStyles } from "../styles/globalStyles";
import LottieView from "lottie-react-native";

type Props = {
  isVisible?: boolean;
};

export const LottieActivityLoader = ({ isVisible = false }: Props) => {
  return (
    <Modal
      avoidKeyboard={true}
      isVisible={isVisible}
      useNativeDriver
      useNativeDriverForBackdrop
      backdropOpacity={0.4}
      hideModalContentWhileAnimating
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LottieView
          source={require("../assets/lottie-files/loader.json")}
          autoPlay
          loop
          style={{ width: 100, height: 100 }}
        />
      </View>
    </Modal>
  );
};

export default LottieActivityLoader;
