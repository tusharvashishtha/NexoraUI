
import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {

    if (darkMode) {
      document.body.style.backgroundColor = "#05060A";
      document.body.style.color = "#D4D4D8";
    } else {
      document.body.style.backgroundColor = "#F9FAFB";
      document.body.style.color = "#111827";
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
