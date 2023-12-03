import { View, Text, Pressable } from "react-native";
import React from "react";
import { useTransferModal } from "../../../../providers/TransferProvider";
import SubHeading from "../../../ui/SubHeading";
import Button from "../../../ui/Button";
import Modal from "react-native-modal";
import Field from "../../../ui/Field";
import { handleTransfer } from "../handleTransfer";

const TransferModal = () => {
  const {
    showTransferModal,
    setShowTransferModal,
    toggleModal,
    sum,
    setSum,
    cardNumber,
    setCardNumber,
    fromAccount,
    setFromAccount,
  } = useTransferModal();

  const onSubmit = () => {
    handleTransfer(fromAccount, cardNumber, sum);
    toggleModal();
  };

  return (
    showTransferModal && (
      <View style={{ flex: 1 }}>
        <Button title="Show modal" onPress={toggleModal} />

        <Modal isVisible={showTransferModal}>
          <View className="bg-white rounded-xl px-5 py-6 items-center">
            <SubHeading text="Transfer money" />

            <Field
              placeholder="Enter amount"
              onChange={(val) => setSum(val)}
              val={sum}
            />

            <Button title="Send money" onPress={onSubmit} />
            <Button
              colors={["bg-gray-200", "#d6d8db"]}
              onPress={toggleModal}
              title="Close"
            />
          </View>
        </Modal>
      </View>
    )
  );
};

export default TransferModal;
