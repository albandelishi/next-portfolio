import { useState, useEffect } from "react";
import Image from "next/image";
function ThemeToggle() {
  const [activeTheme, setActiveTheme] = useState("light");
  const inactiveTheme = activeTheme === "light" ? "dark" : "light";

  useEffect(() => {
    document.body.dataset.theme = activeTheme || "dark";
    window.localStorage.setItem("theme", activeTheme);
  }, [activeTheme]);

  const handleClick = () => {
    setActiveTheme(inactiveTheme);
  };

  const themeTogglerAnimation =
    activeTheme === "light" ? (
      <Image src="/images/moon.svg" alt="moon" width={34} height={34} />
    ) : (
      <Image src="/images/sun.svg" alt="sun" width={34} height={34} />
    );
  return <span onClick={handleClick}>{themeTogglerAnimation}</span>;
}

export default ThemeToggle;
