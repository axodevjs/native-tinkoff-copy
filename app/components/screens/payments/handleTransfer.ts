import { Alert } from "react-native";
import { IAccount } from "../home/accounts/types";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../../../firebase";
import prompt from "react-native-prompt-android";

export const handleTransfer = async (
  fromAccount: IAccount,
  cardNumber: string,
  sum: any
) => {
  console.log("fromAccount ", fromAccount);
  console.log("cardNumber ", cardNumber);
  console.log("sum ", sum);
  if (sum === "") sum = 0;
  sum = parseInt(sum);
  try {
    let accountToId = "";
    let currentToBalance = "";
    const querySnapshot = await getDocs(
      query(
        collection(db, "accounts"),
        where("cardNumber", "==", cardNumber),
        limit(1)
      )
    );
    querySnapshot.docs.forEach((doc) => {
      accountToId = doc.id;
    });
    const docRefTo = doc(db, "accounts", accountToId);
    const docSnapTo = await getDoc(docRefTo);
    if (docSnapTo.exists()) {
      currentToBalance = docSnapTo.data().balance;
    } else {
      Alert.alert("The card where you sending money was not found");
      return;
    }

    await updateDoc(docRefTo, {
      balance: currentToBalance + Number(sum),
    });
    return;
  } catch (error: any) {
    Alert.alert("Error transfer", error.message);
  }
};
