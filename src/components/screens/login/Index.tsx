import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Alert,
} from "react-native";

import { Input, Button } from "@ui-kitten/components";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AntDesign } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

import {
  Container,
  CustomSafeAreaView,
  CustomText,
  LoadingIndicator,
} from "../../index";
import { styles } from "./styles";
import { LoginFormData, LoginSchema } from "../../../constants";
import { globalStyles } from "../../../styles/globalStyles";
import { hp } from "../../../utils";
import { auth } from "../../../helpers/firebase";
import { useAuthProvider } from "../../../hooks/useAuthProvider";
import { useTheme } from "../../../hooks";

type Props = {
  goBack: () => void;
};

export const LoginView = ({ goBack }: Props) => {
  const { isLight } = useTheme();
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [secureEntry, setSecureEntry] = useState<boolean>(true);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({ resolver: yupResolver(LoginSchema) });
  const { dispatch } = useAuthProvider();

  const onSubmit = (data: LoginFormData) => {
    const { email, password } = data;
    setSubmitting(true);

    auth
      .signInWithEmailAndPassword(email.trim().toLocaleLowerCase(), password)
      .then((userCredential: any) => {
        dispatch({
          type: "SET_USER",
          payload: userCredential.user,
        });
        setSubmitting(false);
      })
      .catch((error) => {
        setSubmitting(false);
        if (error.code === "auth/wrong-password") {
          alert("The password is invalid or the user does not have a password");
        }
        if (error.code === "auth/invalid-email") {
          alert("That email address is invalid!");
        }
        if (error.code === "auth/user-not-found") {
          alert("User corresponding to that email does not exist");
        }
        if (error.code === "auth/weak-password") {
          alert("Your password is not strong enough");
        }
        if (error.code === "auth/network-request-failed") {
          alert("Network error");
        }
      });
  };

  useEffect(() => {
    Alert.alert(
      "Login credential",
      `Kindly login with the below credential!${"\n"}email: ademola@gmail.com ${"\n"}password: ademola10`,
      [{ text: "OK", onPress: () => {} }]
    );
  }, []);

  return (
    <CustomSafeAreaView>
      <StatusBar
        style={isLight ? "dark" : "light"}
        translucent={false}
        backgroundColor={isLight ? "#fff" : "#000"}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <Container contentContainerStyle={styles.wrapper}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity style={styles.back} onPress={goBack}>
              <AntDesign
                name="arrowleft"
                color={isLight ? "#000" : "#fff"}
                size={hp(20)}
              />
            </TouchableOpacity>
            <View style={styles.header}>
              <CustomText
                text="Let's sign you in."
                category="h1"
                fontWeight="bold"
              />
              <CustomText
                text="Welcome back 😃"
                category="h4"
                fontWeight="500"
                style={{ paddingTop: hp(5) }}
              />
              <CustomText text="" category="h4" fontWeight="500" />
            </View>
            <View style={styles.forms}>
              <View style={styles.inputContainer}>
                <Controller
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                      style={styles.input}
                      onBlur={onBlur}
                      onChangeText={(value) => onChange(value)}
                      value={value}
                      placeholder="Email"
                      size="large"
                      keyboardType="email-address"
                    />
                  )}
                  name="email"
                  defaultValue=""
                />
                {errors.email && (
                  <CustomText
                    text={errors.email.message || ""}
                    status="danger"
                    style={styles.error}
                  />
                )}
              </View>
              <View style={styles.inputContainer}>
                <Controller
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                      style={styles.input}
                      onBlur={onBlur}
                      onChangeText={(value) => onChange(value)}
                      value={value}
                      placeholder="Passsword"
                      size="large"
                      secureTextEntry={secureEntry}
                      accessoryRight={() => (
                        <CustomText text={secureEntry ? "show" : "hide"} onPress={() => setSecureEntry(!secureEntry)} />
                      )}
                    />
                  )}
                  name="password"
                  defaultValue=""
                />
                {errors.password && (
                  <CustomText
                    text={errors.password.message || ""}
                    status="danger"
                    style={styles.error}
                  />
                )}
              </View>
              <View style={styles.footer}>
                <Button
                  status="primary"
                  appearance="filled"
                  size="large"
                  onPress={handleSubmit(onSubmit)}
                  style={styles.btn}
                  accessoryLeft={submitting ? LoadingIndicator : () => <View />}
                >
                  LOGIN
                </Button>
                <View
                  style={[globalStyles.rowCenter, { marginVertical: hp(20) }]}
                >
                  <View>
                    <CustomText
                      text="Don't have an account?"
                      style={styles.acoountMessage}
                    />
                  </View>
                  <View>
                    <CustomText text="Register" fontWeight="800" />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </Container>
      </KeyboardAvoidingView>
    </CustomSafeAreaView>
  );
};
