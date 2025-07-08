import { UseTheme } from "./ThemeContext";

export function ThemeSwitcher() {
  const { theme, toggleTheme } = UseTheme();

  return (
    <div
      className={`p-4 border rounded space-y-2 ${
        theme === "dark" ? "bg-gray-700 text-white" : "bg-white text-gray-800"
      }`}
    >
      <h2 className="text-xl font-bold">Context: Theme</h2>
      <p data-testid="theme-text">Current theme: {theme}</p>
      <button
        onClick={toggleTheme}
        className={`px-4 py-2 rounded ${
          theme === "dark" ? "bg-blue-700 text-white" : "bg-blue-500 text-white"
        }`}
      >
        Toggle Theme
      </button>
    </div>
  );
}
