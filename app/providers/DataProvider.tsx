import { View, Text } from "react-native";
import React, {
  Dispatch,
  FC,
  SetStateAction,
  createContext,
  ReactNode,
  useMemo,
  useState,
} from "react";

interface IContext {
  activeStories: string[] | null;
  setActiveStories: Dispatch<SetStateAction<string[] | null>>;
}

export const DataContext = createContext<IContext>({} as IContext);

export const DataProvider: FC<{ children: ReactNode | ReactNode[] }> = ({
  children,
}) => {
  const [activeStories, setActiveStories] = useState<string[] | null>(null);

  const value = useMemo(
    () => ({
      activeStories,
      setActiveStories,
    }),
    [activeStories]
  );

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
