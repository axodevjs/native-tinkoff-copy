import { View, Text } from "react-native";
import React, { FC } from "react";
import { IAccount } from "../types";

const Balance: FC<{ account: IAccount }> = ({
  account: { balance, currency, name },
}) => {
  return (
    <View className="w-8/12">
      <Text style={{ fontSize: 15 }}>{name}</Text>
      <Text className="font-bold" style={{ fontSize: 15, marginTop: 2 }}>
        {Intl.NumberFormat(undefined, {
          currency,
          style: "currency",
        }).format(balance)}
      </Text>
    </View>
  );
};

export default Balance;
