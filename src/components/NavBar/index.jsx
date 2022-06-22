import React from "react";
import SearchBar from "../SearchBar";
export default function NavBar() {
  return (
    <div className="navContainer">
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
        <div>
          <ul class="nav">
            <li>
              <a href="_blanck">DROPS</a>
              <ul>
                <li>
                  <a href="https://www.mimusa.io/post/tienes-una-agencia-escalala">
                    Submenu1
                  </a>
                </li>
                <li>
                  <a href="https://www.mimusa.io/post/tienes-una-agencia-escalala">
                    Submenu2
                  </a>
                </li>
                <li>
                  <a href="https://www.mimusa.io/post/tienes-una-agencia-escalala">
                    Submenu3
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="_blanck">ARTISTAS</a>
              <ul>
                <li>
                  <a href="https://www.mimusa.io/post/tienes-una-agencia-escalala">
                    Submenu1
                  </a>
                </li>
                <li>
                  <a href="https://www.mimusa.io/post/tienes-una-agencia-escalala">
                    Submenu2
                  </a>
                </li>
                <li>
                  <a href="https://www.mimusa.io/post/tienes-una-agencia-escalala">
                    Submenu3
                  </a>
                </li>
                <li>
                  <a href="https://www.mimusa.io/post/tienes-una-agencia-escalala">
                    Submenu4
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="_blanck">PROMOCIONES</a>
            </li>
            <li>
              <a href="_blanck">ES</a>
              <ul>
                <li>
                  <a href="https://www.mimusa.io/post/tienes-una-agencia-escalala">
                    Submenu1
                  </a>
                </li>
                <li>
                  <a href="https://www.mimusa.io/post/tienes-una-agencia-escalala">
                    Submenu2
                  </a>
                </li>
                <li>
                  <a href="https://www.mimusa.io/post/tienes-una-agencia-escalala">
                    Submenu3
                  </a>
                </li>
                <li>
                  <a href="https://www.mimusa.io/post/tienes-una-agencia-escalala">
                    Submenu4
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
