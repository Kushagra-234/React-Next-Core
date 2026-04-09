import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeShower = () => {
  const {theme, themeToggle } = useContext(ThemeContext);
//   const { theme, themeToggle } = themeview;

//   console.log(themeview);
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <h3>Theme Switcher</h3>
      <div>current theme:{theme}</div>
      <button onClick={() => themeToggle()}>Change Theme</button>
    </div>
  );
};

export default ThemeShower;




// createContext 
// Context.Provider value={value}
// useContext se access value