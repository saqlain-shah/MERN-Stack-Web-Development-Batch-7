import { useContext, createContext } from "react";

const ThemeContext = createContext();
export const useTheme = () => {
  return useContext(ThemeContext);
};
const ThemeProvider = ({ children, theme }) => {
  console.log("useTheme", useTheme());

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
export default ThemeProvider;
