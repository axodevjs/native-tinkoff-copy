import { View, ScrollView } from "react-native";
import React, { FC } from "react";
import SubHeading from "../../../ui/SubHeading";
import OtherItem from "./item/OtherItem";
import { otherItems } from "./data";

const Other: FC = () => {
  return (
    <View>
      <SubHeading text="Important transfers" />
      <ScrollView
        className="py-5"
        showsVerticalScrollIndicator={false}
        horizontal
      >
        {otherItems.map((item, i) => (
          <OtherItem key={i} item={item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Other;
