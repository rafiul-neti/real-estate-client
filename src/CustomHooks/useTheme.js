import { useEffect } from "react";

export const useTheme = (theme) => {
  useEffect(() => {
    const html = document.documentElement;
    html.dataset.theme = `${theme}`;
    localStorage.setItem("theme", theme);
  }, [theme]);
};
