import { View, Text, ScrollView } from "react-native";
import React, { FC } from "react";

interface ILayout {
  children: React.ReactElement | React.ReactElement[];
  isScrollView?: boolean;
}

export const styleCenter = "h-full w-full bg-white pt-16";

const Layout: FC<ILayout> = ({ children, isScrollView = true }) => {
  return (
    <View className={styleCenter}>
      {isScrollView ? <ScrollView>{children}</ScrollView> : children}
    </View>
  );
};

export default Layout;
