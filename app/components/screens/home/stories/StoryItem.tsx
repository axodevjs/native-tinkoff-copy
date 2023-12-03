import { View, Text, Pressable, ImageBackground } from "react-native";
import React, { FC } from "react";
import { IStory } from "./types";
import { useData } from "../../../../hooks/useData";

const StoryItem: FC<{ story: IStory }> = ({ story }) => {
  const { setActiveStories } = useData();

  return (
    <Pressable onPress={() => setActiveStories(story.images)}>
      <View
        className="w-24 h-24 rounded-2xl ml-4 border-solid border-blue-400"
        style={{ padding: 2, borderWidth: 1 }}
      >
        <ImageBackground
          className="w-full h-full overflow-hidden justify-end rounded-2xl"
          source={{ uri: story.images[0] }}
          resizeMode="cover"
        >
          <Text className="text-white" style={{ fontSize: 12, margin: 8 }}>
            {story.heading}
          </Text>
        </ImageBackground>
      </View>
    </Pressable>
  );
};

export default StoryItem;
