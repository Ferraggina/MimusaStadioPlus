import React from "react";
import Cards from "../Cards";
export default function Blog() {
  return (
    <div className="blogContainer">
      <h4>ACTUALIDAD Y NOTICIAS</h4>
      <h2>BLOG</h2>
      <div className="cardsContainer">
        <Cards />
      </div>

      <div className="blogButtons">
        <a href="https://www.mimusa.io/free-trial">
          <button>LEER MÁS</button>
        </a>
      </div>
    </div>
  );
}
