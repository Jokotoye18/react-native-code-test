import React from "react";
import { View, Image, TouchableHighlight, Platform } from "react-native";

import { StatusBar } from "expo-status-bar";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { Layout, Text } from "@ui-kitten/components";
// import CachedImage from "react-native-expo-cached-image";
import { SharedElement } from "react-navigation-shared-element";
import dayjs from "dayjs";

import { Container, CustomSafeAreaView, CustomText } from "../../index";
import { styles } from "./styles";
import { globalStyles } from "../../../styles/globalStyles";
import { BlogProps } from "../../../navigations/types";
import { BlogType } from "../../../models/blog.model";
import { useTheme } from "../../../hooks";

type Props = {
  blog: BlogType;
  index: number;
  goBack: () => void;
};

export const BlogView = ({ blog, index, goBack }: Props) => {
  const { isLight } = useTheme();
  const { imageUrl, title, content, views, datePublished, author } = blog;

  const date = dayjs(datePublished).format("dddd, MMMM D YYYY");

  const borderColor = Platform.select({
    ios: isLight ? "rgba(0,0,0,1)" : "rgba(200,200,200,1)",
    android: isLight ? "rgba(0,0,0,1)" : "rgba(255,255,255,1)",
  });

  return (
    <CustomSafeAreaView>
      <StatusBar
        style={isLight ? "dark" : "light"}
        translucent={false}
        backgroundColor={isLight ? "#fff" : "#000"}
      />
      <Container
        contentContainerStyle={styles.wrapper}
        style={{ paddingHorizontal: 0 }}
      >
        <View style={{ flex: 1 }}>
          <View style={styles.header}>
            <SharedElement id={`item.${imageUrl}.image`}>
              <Image
                style={styles.img}
                source={{ uri: imageUrl }}
                resizeMode={"cover"}
              />
            </SharedElement>
            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor="gray"
              onPress={goBack}
              style={[
                styles.highlight,
                { backgroundColor: isLight ? "#fff" : "#000" },
              ]}
            >
              <AntDesign
                name="arrowleft"
                color={isLight ? "#000" : "#fff"}
                size={30}
                style={styles.backIcon}
              />
            </TouchableHighlight>
          </View>
          <View style={styles.body}>
            <View style={[styles.head, { borderColor }]}>
              <SharedElement id={`item.${title}.title`}>
                <CustomText text={title} category="h1" style={styles.title} />
              </SharedElement>
              <View style={[globalStyles.rowBetween, styles.otherInfo]}>
                <Text>
                  <CustomText text="Written by " />
                  <CustomText
                    text={author}
                    fontWeight="bold"
                    style={{ fontFamily: "RobotoBold" }}
                  />
                </Text>
                <View>
                  <CustomText
                    text={date}
                    style={{ fontFamily: "RobotoLightItalic" }}
                  />
                </View>
              </View>
            </View>
            <CustomText text={content} style={styles.blogContent} />
          </View>
        </View>
      </Container>
    </CustomSafeAreaView>
  );
};
