import React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkMode from "../../hooks/useDarkMode";

function ThemeSwitcher() {
  const [enabled, setIsEnabled] = useDarkMode();

  return (
    <DarkModeSwitch
      checked={enabled}
      onChange={(checked) => setIsEnabled(checked)}
    />
  );
}

export default ThemeSwitcher;
