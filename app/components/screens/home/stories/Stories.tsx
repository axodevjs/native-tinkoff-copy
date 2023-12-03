import { View, ScrollView } from "react-native";
import React from "react";
import { useStories } from "../../../../hooks/useStories";
import Loader from "../../../ui/Loader";
import StoryItem from "./StoryItem";

const Stories = () => {
  const { stories, isLoading } = useStories();

  return (
    <View className="my-7">
      {isLoading ? (
        <Loader />
      ) : (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {stories?.map((story, i) => (
            <StoryItem key={i} story={story} />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default Stories;
