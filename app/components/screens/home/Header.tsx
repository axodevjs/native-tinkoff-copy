import { TouchableOpacity, Text } from "react-native";
import React, { FC } from "react";
import Padding from "../../ui/Padding";
import Avatar from "../../ui/Avatar";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { useProfile } from "../../../hooks/useProfile";
import Loader from "../../ui/Loader";

const Header: FC = () => {
  const { navigate } = useNavigation();
  const { isLoading, name } = useProfile();

  return isLoading ? (
    <Loader />
  ) : (
    <Padding className="flex flex-row items-center">
      <Avatar name={name} />

      <TouchableOpacity
        className="flex-row items-end"
        onPress={() => navigate("Profile")}
      >
        <Text className="text-2xl ml-2 text-gray-800 font-bold">{name}</Text>
        <Entypo
          name="chevron-small-right"
          size={28}
          className="text-gray-800"
        />
      </TouchableOpacity>
    </Padding>
  );
};

export default Header;
