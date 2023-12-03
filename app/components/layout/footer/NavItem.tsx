import { View, Text, Pressable } from "react-native";
import React, { FC } from "react";
import { IFooterItem } from "./types";
import { AntDesign } from "@expo/vector-icons";
import { TypeRootStackParamList } from "../../../navigation/types";

interface INavItem {
  item: IFooterItem;
  navigate: (screenName: keyof TypeRootStackParamList) => void;
  currentRoute: string;
}

const NavItem: FC<INavItem> = ({ item, navigate, currentRoute }) => {
  const isActive = currentRoute === item.title;

  return (
    <Pressable
      className="items-center"
      style={{ width: "20%" }}
      onPress={() => navigate(item.title)}
    >
      <AntDesign
        style={{ color: isActive ? "#3b82f6" : "#6b7280" }}
        size={20}
        name={item.iconName}
      />
      <Text
        className={`text-xs ${isActive ? "text-blue-500" : "text-gray-500"}`}
        style={{ marginTop: 1 }}
      >
        {item.title}
      </Text>
    </Pressable>
  );
};

export default NavItem;
