import { View, Text, Pressable } from "react-native";
import React, { FC, useState } from "react";
import { styleCenter } from "../../layout/Layout";
import { useAuth } from "../../../hooks/useAuth";
import Loader from "../../ui/Loader";
import Field from "../../ui/Field";
import Button from "../../ui/Button";

interface IData {
  email: string;
  password: string;
}

const Auth: FC = () => {
  const { isLoading, login, register } = useAuth();
  const [isReg, setIsReg] = useState(false);
  const [data, setData] = useState<IData>({} as IData);

  const authHandler = async () => {
    const { email, password } = data;

    if (isReg) await register(email, password);
    else await login(email, password);

    setData({} as IData);
  };

  return (
    <View className={styleCenter + " justify-center items-center"}>
      <View className={"mx-5 justify-center w-full items-center h-full"}>
        <View className="w-9/12">
          <Text className="text-center text-gray-800 text-2xl font-bold mb-2">
            {isReg ? "Sign Up" : "Sign in"}
          </Text>

          {isLoading ? (
            <Loader />
          ) : (
            <>
              <Field
                val={data.email}
                placeholder="Enter email"
                onChange={(val) => setData({ ...data, email: val })}
              />
              <Field
                val={data.password}
                placeholder="Enter password"
                onChange={(val) => setData({ ...data, password: val })}
                isSecure={true}
              />
              <Button onPress={authHandler} title={"Let's go"} />
              <Pressable onPress={() => setIsReg(!isReg)}>
                <Text className="text-gray-800 opacity-30 text-right text-sm">
                  {isReg ? "Login" : "Register"}
                </Text>
              </Pressable>
            </>
          )}
        </View>
      </View>
    </View>
  );
};

export default Auth;
