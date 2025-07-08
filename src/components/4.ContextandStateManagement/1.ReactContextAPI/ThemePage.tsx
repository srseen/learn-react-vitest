import { ThemeProvider } from "./ThemeContext";
import { ThemeSwitcher } from "./ThemeSwitcher";

export function ThemePage() {
  return (
    <ThemeProvider>
      <ThemeSwitcher />
    </ThemeProvider>
  );
}
