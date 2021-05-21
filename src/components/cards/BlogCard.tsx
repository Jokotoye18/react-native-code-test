import React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Platform,
} from "react-native";

import { ApplicationProvider, Text, Layout } from "@ui-kitten/components";
// import CachedImage from "react-native-expo-cached-image";
import { SharedElement } from "react-navigation-shared-element";
import { MotiView } from "moti";

import { BlogType } from "../../models/blog.model";
import { hp, wp } from "../../utils";
import { globalStyles } from "../../styles/globalStyles";
import { useTheme } from "../../hooks";

type Props = {
  blog: BlogType;
  index: number;
  onPress: () => void;
};

const Blog = ({ blog, index, onPress }: Props) => {
  const { isLight } = useTheme();

  const shadowColor = Platform.select({
    ios: isLight ? "rgba(0,0,0,0.3)" : "rgba(200,200,200,0.3)",
    android: isLight ? "rgba(0,0,0,0)" : "rgba(255,255,255,0.3)",
  });

  const { title, imageUrl } = blog;
  return (
    <MotiView
      from={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "timing",
        duration: 350,

        scale: {
          type: "spring",
          delay: 100,
        },
      }}
    >
      <Layout style={[globalStyles.rowCenter, { marginBottom: hp(50) }]}>
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={0.5}
          style={[
            styles.container,
            { backgroundColor: isLight ? "#fff" : "#333c66", shadowColor },
          ]}
        >
          <>
            <SharedElement id={`item.${imageUrl}.image`}>
              <Image
                style={styles.img}
                source={{ uri: imageUrl }}
                resizeMode={"cover"}
              />
            </SharedElement>
            <View style={styles.titleContainer}>
              <SharedElement id={`item.${title}.title`}>
                <Text category="h5">{title}</Text>
              </SharedElement>
            </View>
          </>
        </TouchableOpacity>
      </Layout>
    </MotiView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: hp(10),
    width: "85%",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
    // borderBottomWidth: 0.4
  },
  img: {
    height: hp(300),
    borderTopLeftRadius: hp(10),
    borderTopRightRadius: hp(10),
  },
  titleContainer: {
    paddingLeft: wp(20),
    paddingVertical: hp(30),
    // backgroundColor: "transparent",
    borderBottomLeftRadius: hp(10),
    borderBottomRightRadius: hp(10),
  },
});

export const BlogCard = React.memo(Blog);
