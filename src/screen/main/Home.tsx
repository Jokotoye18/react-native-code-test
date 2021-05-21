import React from "react";

import { HomeView } from "../../components";
import { BlogType } from "../../models/blog.model";
import { HomeProps } from "../../navigations/types";

export const Home = ({ navigation, route }: HomeProps) => {
  const navigateBlog = (blog: BlogType, index: number) => {
    navigation.navigate("Blog", {
      blog,
      index,
    });
  };

  return <HomeView navigateBlog={navigateBlog} />;
};
