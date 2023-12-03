import { View, Text, ImageBackground, ImageSourcePropType } from "react-native";
import React, { FC } from "react";
import { IAccount } from "../types";

const ImageCard: FC<{ account: IAccount }> = ({
  account: { name, cardNumber },
}) => {
  const imageBlack: ImageSourcePropType = require("../../../../../../assets/cards/black.png");
  const imageAllAirlines: ImageSourcePropType = require("../../../../../../assets/cards/all-airlines.png");

  return (
    <ImageBackground
      resizeMode="contain"
      className="justify-end w-14 h-10"
      style={{ padding: 4.5 }}
      source={name === "Tinkoff All Airlines" ? imageAllAirlines : imageBlack}
    >
      <Text className="text-white font-medium" style={{ fontSize: 11 }}>
        {cardNumber.slice(-4)}
      </Text>
    </ImageBackground>
  );
};

export default ImageCard;
