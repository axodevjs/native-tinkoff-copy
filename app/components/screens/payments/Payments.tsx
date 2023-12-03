import { View, Text } from "react-native";
import React from "react";
import Layout from "../../layout/Layout";
import Heading from "../../ui/Heading";
import Contacts from "./contacts/Contacts";
import Other from "./other/Other";
import { TransferProvider } from "../../../providers/TransferProvider";
import TransferModal from "./transfer-modal/TransferModal";

const Payments = () => {
  return (
    <TransferProvider>
      <TransferModal />
      <Layout>
        <Heading text={"Payments"} />
        <Contacts />
        <Other />
      </Layout>
    </TransferProvider>
  );
};

export default Payments;
