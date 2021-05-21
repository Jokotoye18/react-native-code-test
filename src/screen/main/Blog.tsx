import React from "react";

import { BlogView } from "../../components";
import { BlogProps } from "../../navigations/types";

export const Blog = ({ navigation, route }: BlogProps) => {
  const { blog, index } = route.params;

  const goBack = () => {
    navigation.goBack();
  };

  return <BlogView index={index} goBack={goBack} blog={blog} />;
};
