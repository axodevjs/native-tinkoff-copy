import { View, Text } from "react-native";
import React, { FC } from "react";
import Padding from "../../ui/Padding";
import NavItem from "./NavItem";
import { menu } from "./menu";
import { TypeRootStackParamList } from "../../../navigation/types";

interface IFooter {
  navigate: (screenName: keyof TypeRootStackParamList) => void;
  currentRoute: string;
}

const Footer: FC<IFooter> = ({ navigate, currentRoute }) => {
  return (
    <Padding
      className="flex-row justify-between items-center w-full bg-gray-50 px-0 pb-5 pt-2"
      style={{ borderTopColor: "#e1e1e1", borderTopWidth: 1 }}
    >
      {menu.map((item) => (
        <NavItem
          key={item?.title}
          item={item}
          navigate={navigate}
          currentRoute={currentRoute}
        />
      ))}
    </Padding>
  );
};

export default Footer;
