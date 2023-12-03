import { View, Text } from "react-native";
import { FC } from "react";
import { TypeCurrency } from "../types";
import { FontAwesome } from "@expo/vector-icons";

const Currency: FC<{ currency: TypeCurrency }> = ({ currency }) => {
  return (
    <View className="rounded-full bg-blue-500 w-9 h-9 items-center justify-center">
      <View
        className="w-5 h-5 rounded-full items-center justify-center"
        style={{
          backgroundColor: "#edf4fe",
        }}
      >
        <FontAwesome
          color="#488cf9"
          size={13}
          name={currency === "RUB" ? "ruble" : "usd"}
        />
      </View>
    </View>
  );
};

export default Currency;
