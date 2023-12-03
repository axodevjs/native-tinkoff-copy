import { View, Text, Pressable, Alert } from "react-native";
import React, { FC } from "react";
import { IContact } from "./types";
import Avatar from "../../../ui/Avatar";
import { handleTransfer } from "../handleTransfer";
import { useAccounts } from "../../../../hooks/useAccounts";
import { useTransferModal } from "../../../../providers/TransferProvider";

const ContactItem: FC<{ contact: IContact }> = ({ contact }) => {
  const { accounts } = useAccounts();
  const {
    showTransferModal,
    setShowTransferModal,
    sum,
    toggleModal,
    setFromAccount,
    setCardNumber,
  } = useTransferModal();

  return (
    <Pressable
      onPress={() => {
        setShowTransferModal(!showTransferModal);
        setFromAccount(accounts[0]);
        setCardNumber(contact.cardNumber);
      }}
      className="ml-4 mr-1 items-center"
    >
      <Avatar size="large" name={contact.displayName} />
      <Text className="mt-1 text-xs">{contact.displayName}</Text>
    </Pressable>
  );
};

export default ContactItem;
