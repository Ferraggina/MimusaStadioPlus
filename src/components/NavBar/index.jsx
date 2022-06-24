import React from "react";
import SearchBar from "../SearchBar";
import logoNav from "../../Assets/logoNav.png";
import { BiDownArrow } from "react-icons/bi";

import "../../scss/components/_nav.scss";
export default function NavBar({ setTheme, theme }) {
  return (
    <>
      <div className="navContainer">
        <div className="nav">
          <img src={logoNav} className="logoStyle" alt="logo" />

          <div className="searchBarContainer">
            <SearchBar />
          </div>

          <div className="enlaces">
            <a
              href="https://www.mimusa.io/post/como-trabajan-las-consultoras-con-mimusa"
              className="item"
            >
              MIS COLECCIONES{" "}
            </a>
            <a href="https://mimusa.manyrequests.com/login" className="item">
              LOGIN{" "}
            </a>
            <a href="https://mimusa.manyrequests.com/login">
              <button className="registro">REGISTRARSE</button>
            </a>
          </div>
          <label className="switchMode">
            <input
              type="checkbox"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            ></input>
            <span className="sliderMode"></span>
          </label>
        </div>
      </div>
      <div className="navMainContainer">
        <ul className="navList">
          <li>
            <a href="_blanck">DROPS {<BiDownArrow />} </a>

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
            <a href="_blanck">ARTISTAS {<BiDownArrow />}</a>

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
          <div className="idiomeContainer">
            <li>
              <a href="_blanck">ES {<BiDownArrow />}</a>
              <ul>
                <li>
                  <a href="https://www.mimusa.io/post/tienes-una-agencia-escalala">
                    EN
                  </a>
                </li>
              </ul>
            </li>
          </div>
        </ul>
      </div>
    </>
  );
}
