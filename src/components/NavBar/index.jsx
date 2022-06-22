import React from "react";
import SearchBar from "../SearchBar";
export default function NavBar() {
  return (
    <div className="Nav">
      <div className="searchBar">
        <SearchBar />
      </div>
      <div className="logoStyle">
        <img src="" alt="" />
        <h1>StadioPlus</h1>
      </div>

      <div className="enlaces">
        <a href="https://www.mimusa.io/post/como-trabajan-las-consultoras-con-mimusa">
          MIS COLECCIONES{" "}
        </a>
        <a href="https://mimusa.manyrequests.com/login">LOGIN </a>
        <a href="https://mimusa.manyrequests.com/login">
          <button>REGISTRARSE</button>
        </a>
      </div>
    </div>
  );
}
