import { View, Text } from "react-native";
import React, { FC } from "react";
import Header from "./Header";
import Layout from "../../layout/Layout";
import Stories from "./stories/Stories";
import Accounts from "./accounts/Accounts";
import ApplyNewProduct from "./apply-new-product/ApplyNewProduct";

const Home: FC = () => {
  return (
    <Layout>
      <Header />
      <Stories />
      <Accounts />
      <ApplyNewProduct />
    </Layout>
  );
};

export default Home;
