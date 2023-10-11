import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="dark-light-toggle p-1 absolute right-3 top-3 md:right-5 md:top-5"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <img
        src={theme === "dark" ? "sun.svg" : "moon.svg"}
        alt={theme === "dark" ? "Sun icon" : "Moon icon"}
      />
    </button>
  );
}
