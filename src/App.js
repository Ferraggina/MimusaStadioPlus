import "./App.css";
import React from "react";

import Home from "./components/Home/index";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <div>
        <Home />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
