import React, { useState, useEffect } from "react";
import { View, FlatList, Platform } from "react-native";

import { Text } from "@ui-kitten/components";

import {
  CustomSafeAreaView,
  BlogCard,
  LottieActivityLoader,
} from "../../index";
import blogData from "../../../data/blogData.json";
import { BlogType } from "../../../models/blog.model";
import { styles } from "./styles";
import { hp } from "../../../utils";
import { useTheme } from "../../../hooks";

type Props = {
  navigateBlog: (blog: BlogType, index: number) => void;
};

export const HomeView = ({ navigateBlog }: Props) => {
  const { isLight } = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const data: BlogType[] = blogData.blogs;

  const borderColor = Platform.select({
    ios: isLight ? "rgba(0,0,0,1)" : "rgba(200,200,200,1)",
    android: isLight ? "rgba(0,0,0,1)" : "rgba(255,255,255,1)",
  });

  useEffect(() => {
    const subscribe = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => {
      clearTimeout(subscribe);
    };
  }, [isLoading]);

  if (isLoading) {
    return <LottieActivityLoader isVisible={isLoading} />;
  }

  return (
    <CustomSafeAreaView>
      <FlatList
        ListHeaderComponent={
          <View style={[styles.headTitle, { borderColor }]}>
            <Text category="h1" style={[styles.title]}>
              Top Stories
            </Text>
          </View>
        }
        contentContainerStyle={styles.contentWrapper}
        data={data}
        renderItem={({ item, separators, index }) => (
          <BlogCard
            blog={item}
            index={index}
            onPress={() => navigateBlog(item, index)}
          />
        )}
        keyExtractor={(item) => item.title}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews={true}
      />
    </CustomSafeAreaView>
  );
};
