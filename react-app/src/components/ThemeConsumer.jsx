import { useContext } from "react";
import { useTheme } from "./ThemeProvider";

const ThemeConsumer = () => {
  const theme = useTheme();
  console.log("theme", theme)
  return (
    <div style={{ backgroundColor: theme.background, color: theme.text }}>
      <h2>Themed Consumer</h2>
      <p>This component changes its appearance based on the theme!</p>
    </div>
  );
};

export default ThemeConsumer;
