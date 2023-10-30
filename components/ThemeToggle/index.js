import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      className="dark-light-toggle p-1 absolute right-6 top-6 md:right-10 md:top-5"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <img
        src={resolvedTheme === "dark" ? "sun.svg" : "moon.svg"}
        alt={resolvedTheme === "dark" ? "Sun icon" : "Moon icon"}
        width={30}
      />
    </button>
  );
}
