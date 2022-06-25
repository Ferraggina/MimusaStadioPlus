import "./App.css";
import "./scss/_main.scss";
import React from "react";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

import Home from "./components/Home/index";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <div className="background">
        {/* <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          switch
        </button> */}

        <NavBar setTheme={setTheme} theme={theme} />
        <Home />

        <Footer />
      </div>
    </div>
  );
}

export default App;
