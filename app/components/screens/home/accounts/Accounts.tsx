import { View, Text } from "react-native";
import React, { FC, Fragment } from "react";
import { useAccounts } from "../../../../hooks/useAccounts";
import Padding from "../../../ui/Padding";
import Loader from "../../../ui/Loader";
import AccountItem from "./item/AccountItem";

const Accounts: FC = () => {
  const { accounts, isLoading } = useAccounts();

  return (
    <Padding>
      {isLoading ? (
        <Loader />
      ) : accounts?.length ? (
        accounts.map((account, i: number) => (
          <Fragment key={i}>
            <AccountItem account={account} />
            {i + 1 !== accounts.length && (
              <View
                style={{
                  borderBottomColor: "#e0e1e2",
                  borderBottomWidth: 1,
                  marginBottom: 24,
                }}
              />
            )}
          </Fragment>
        ))
      ) : (
        <Text>You don't have cards</Text>
      )}
    </Padding>
  );
};

export default Accounts;
