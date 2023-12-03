import React, {
  FC,
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
} from "react";
import { IAccount } from "../components/screens/home/accounts/types";

interface IContext {
  showTransferModal: boolean;
  setShowTransferModal: Dispatch<SetStateAction<boolean>>;

  sum: string;
  setSum: Dispatch<SetStateAction<string>>;

  fromAccount: IAccount | null;
  setFromAccount: any;

  cardNumber: string;
  setCardNumber: Dispatch<SetStateAction<string>>;

  toggleModal: () => void;
}

export const TransferContext = createContext<IContext>({} as IContext);

export const TransferProvider: FC<{ children: ReactNode | ReactNode[] }> = ({
  children,
}) => {
  const [showTransferModal, setShowTransferModal] = useState(false);
  const [sum, setSum] = useState("");
  const [fromAccount, setFromAccount] = useState(null);
  const [cardNumber, setCardNumber] = useState("");

  const toggleModal = () => {
    setShowTransferModal(!showTransferModal);
  };

  return (
    <TransferContext.Provider
      value={{
        showTransferModal,
        setShowTransferModal,
        sum,
        setSum,
        toggleModal,
        fromAccount,
        setFromAccount,
        cardNumber,
        setCardNumber,
      }}
    >
      {children}
    </TransferContext.Provider>
  );
};

export const useTransferModal = () => useContext(TransferContext);
