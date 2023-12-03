import { View, Text } from "react-native";
import React, { FC } from "react";
import { IFooterItem } from "../../../../layout/footer/types";
import { AntDesign } from "@expo/vector-icons";

interface IIcon extends Pick<IFooterItem, "iconName"> {}

const Icon: FC<IIcon> = ({ iconName }) => {
  return (
    <View className="rounded-full bg-blue-500 w-8 h-8 items-center justify-center">
      <AntDesign name={iconName} style={{ color: "#edf4fe" }} size={19} />
    </View>
  );
};

export default Icon;
