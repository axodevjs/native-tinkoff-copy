import { Alert } from "react-native";
import React, { useState, useEffect } from "react";
import { IStory } from "../components/screens/home/stories/types";
import {
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../firebase";

export const useStories = () => {
  const [stories, setStories] = useState<IStory[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getStories = async () => {
    const querySnapshot = await getDocs(collection(db, "stories"));
    let storiesData: IStory[] = [];

    querySnapshot.forEach((doc: any) => {
      storiesData.push(doc.data());
    });

    setStories(storiesData);
  };

  useEffect(() => {
    getStories();
  }, []);

  return { stories, isLoading };
};
