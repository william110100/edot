import { FC, ReactNode, createContext, useMemo, useState } from "react";
import { feeds } from "../constants";
import { Feed } from "../interfaces";

interface IAppContext {
  content: Feed[];
  setContent: (data: Feed[]) => void;
}

const AppContext = createContext({} as IAppContext);

const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<Feed[]>(feeds);

  const value = useMemo(() => ({ content, setContent }), [content, setContent]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
