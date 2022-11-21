import { useState, useEffect } from "react";
import ThemeContext from "../context/ThemeContext";
import Main from "../Layout/Main";
import Loader from "../components/Loader";
import AOS from "aos";

function HomePage() {
  const [activeTheme, setActiveTheme] = useState("light");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const userTheme = localStorage.getItem("theme");
    setActiveTheme(userTheme);
  }, [activeTheme]);
  useEffect(() => {
    AOS.init();

    setLoading(false);
  }, []);
  return (
    <ThemeContext.Provider
      value={{
        activeTheme,
      }}
    >
      {loading === true ? <Loader /> : <Main />}
    </ThemeContext.Provider>
  );
}

export default HomePage;
