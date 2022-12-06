import { useState, useEffect } from "react";

export const useTheme = (value) => {
  const [theme, setTheme] = useState(value);

  const toogleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);
  return [theme, toogleTheme];
};