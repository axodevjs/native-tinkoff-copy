import { AuthProvider } from "./app/providers/AuthProvider";
import Navigation from "./app/navigation/Navigation";
import { NativeWindStyleSheet } from "nativewind";
import { DataProvider } from "./app/providers/DataProvider";
import StoryContainer from "./app/components/screens/home/stories/StoryContainer";
// import StoryContainer from "./app/components/screens/home/stories/StoryContainer";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <StoryContainer />

        <Navigation />
      </DataProvider>
    </AuthProvider>
  );
}
