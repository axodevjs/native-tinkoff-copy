import { View, Text, Pressable } from "react-native";
import React, { FC } from "react";
import { IOtherItem } from "../types";
import Icon from "./Icon";
import { BOX_SHADOW } from "../../../../../styles";
import { handleTransfer } from "../../handleTransfer";
import { useAccounts } from "../../../../../hooks/useAccounts";

const CASH_CARD_NUMBER = "4009 5829 1894 8260";

const OtherItem: FC<{ item: IOtherItem }> = ({ item }) => {
  const { accounts } = useAccounts();

  return (
    <Pressable
      onPress={handleTransfer.bind(this, accounts[0], CASH_CARD_NUMBER)}
      className="ml-4 rounded-xl p-2 w-24 h-24 bg-white"
      style={BOX_SHADOW}
    >
      <Icon iconName={item.iconName} />
      <Text className="text-xs" style={{ marginTop: 6 }}>
        {item.title}
      </Text>
    </Pressable>
  );
};

export default OtherItem;
