import React, { useContext, useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext<any>(null);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const Toolbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return <div>theme is {theme}</div>;
};

export default Toolbar;
