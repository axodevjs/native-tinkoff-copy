import { Alert } from "react-native";
import { useState, useEffect } from "react";
import { IStory } from "../components/screens/home/stories/types";
import {
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase";
import { IAccount } from "../components/screens/home/accounts/types";
import { useAuth } from "./useAuth";

export const useAccounts = () => {
  const { user } = useAuth();
  const [accounts, setAccounts] = useState<IAccount[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getAccounts = async () => {
    let data: IAccount[] = [];
    const q = query(
      collection(db, "accounts"),
      where("userId", "==", user?.uid),
      orderBy("timestamp")
    );

    onSnapshot(q, (querySnapshot) => {
      data = [];
      querySnapshot.forEach((doc: any) => {
        data.push(doc.data());
      });

      setAccounts(data);
    });
  };

  useEffect(() => {
    getAccounts();
  }, []);

  return { accounts, isLoading };
};
