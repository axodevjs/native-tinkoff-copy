import { View, Text, TextInput } from "react-native";
import React, { FC } from "react";

interface IField {
  onChange: (val: string) => void;
  val: string;
  placeholder: string;
  isSecure?: boolean;
}

const Field: FC<IField> = ({ onChange, placeholder, val, isSecure }) => {
  return (
    <TextInput
      className="rounded-xl w-full bg-gray-100 mt-3 p-3"
      placeholder={placeholder}
      onChangeText={onChange}
      value={val}
      secureTextEntry={isSecure}
      autoCapitalize="none"
    />
  );
};

export default Field;
