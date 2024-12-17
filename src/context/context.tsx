import { createContext, useState, ReactNode, useRef, MutableRefObject } from "react";

interface ThemeContextType {
  className: string | undefined;
  setClassName: (className: string | undefined) => void;
  generalRef: MutableRefObject<null>;

}

const ThemeContext = createContext({} as ThemeContextType);

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [className, setClassName] = useState<string | undefined>("bg-black-white");

  const generalRef = useRef(null);
  
  
  return (
    <ThemeContext.Provider value={{ className, setClassName, generalRef}}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
