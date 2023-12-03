import { View, Text, ScrollView } from "react-native";
import React, { FC } from "react";
import { useContacts } from "./useContacts";
import SubHeading from "../../../ui/SubHeading";
import Loader from "../../../ui/Loader";
import ContactItem from "./ContactItem";

const Contacts: FC = () => {
  const { contacts, isLoading } = useContacts();
  return (
    <View className="my-8">
      <SubHeading text="Phone transfers" />

      {isLoading ? (
        <Loader />
      ) : (
        <ScrollView
          className="py-5"
          showsVerticalScrollIndicator={false}
          horizontal
        >
          {contacts.map((c, i) => (
            <ContactItem key={i} contact={c} />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default Contacts;
