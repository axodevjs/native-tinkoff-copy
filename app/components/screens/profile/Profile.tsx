import { View, Text } from "react-native";
import React from "react";
import Heading from "../../ui/Heading";
import Layout from "../../layout/Layout";
import Padding from "../../ui/Padding";
import Loader from "../../ui/Loader";
import Field from "../../ui/Field";
import Button from "../../ui/Button";
import { logout } from "../../../firebase";
import useUpdateProfile from "../../../hooks/useUpdateProfile";
import { useProfile } from "../../../hooks/useProfile";

const Profile = () => {
  const { isLoading: isProfileLoading, name, setName, profile } = useProfile();

  const { isLoading, isSuccess, updateProfile } = useUpdateProfile(
    name,
    profile.docId
  );

  return (
    <Layout>
      <Heading text="Profile" isCenter={true} />
      <Padding className="w-full">
        {isSuccess && (
          <View className="bg-green-500 p-3 py-2 rounded-lg">
            <Text className="text-white text-center">
              Profile updated successfully
            </Text>
          </View>
        )}

        {isProfileLoading || isLoading ? (
          <Loader />
        ) : (
          <>
            <Field
              onChange={(val) => setName(val)}
              val={name}
              placeholder="Enter name"
            />
            <Button onPress={updateProfile} title="Update profile" />
            <Button
              colors={["bg-gray-200", "#d6d8db"]}
              onPress={logout}
              title="Logout"
            />
          </>
        )}
      </Padding>
    </Layout>
  );
};

export default Profile;
