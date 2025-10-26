import { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const defaultState = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(defaultState);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const handleThemeChange = (): void => {
    setTheme(theme == "light" ? "dark" : "light");
  };

  return (
    <div className="flex items-center justify-between mx-4">
      <div className="flex flex-row items-center justify-center">
        <span className="dark:text-dark-white">Light</span>
        <div
          className="switch-outer w-12 h-6 bg-neutral-300 rounded-4xl relative m-4 cursor-pointer dark:bg-blue-500"
          onClick={handleThemeChange}
        >
          <span className="switch-inner absolute w-4 h-4 bg-white rounded-full top-1 left-1 duration-200 dark:left-7"></span>
        </div>
        <span className="dark:text-dark-white">Dark</span>
      </div>
    </div>
  );
};

export default DarkModeToggle;
