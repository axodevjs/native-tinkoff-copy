import { View, Text } from "react-native";
import React, { FC } from "react";

const Padding: FC<{
  className?: any;
  style?: any;
  children?: React.ReactNode;
}> = ({ children, className = "", style = {} }) => {
  return (
    <View style={style} className={"px-4 " + className}>
      {children}
    </View>
  );
};

export default Padding;
