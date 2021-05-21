import React from "react";

import { LoginView } from "../../components";
import { LoginProps } from "../../navigations/types";

export const Login = ({ navigation, route }: LoginProps) => {

  const goBack = () => {
    navigation.navigate('Home')
  }

  return <LoginView goBack={goBack} />;
};
