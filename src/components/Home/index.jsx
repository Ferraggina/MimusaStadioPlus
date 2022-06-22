import React from "react";
import PartnerSection from "../PartnerSection";
import Cards from "../Cards";
import About from "../About";
import Blog from "../Blog";
import Draft from "../Draft";

export default function Home() {
  return (
    <div className="homeContainer">
      <div className="homeStyle">
        <div className="headerStyle">
          <header className="headerH1">
            <h1>DESCUBRE, COLECCIONA </h1>
            <h1>Y COMPRA INCREIBLES</h1>
            <h1>NFTs</h1>
            <img className="playerImg" src="" alt="" />
          </header>
          <section className="descriptionPage">
            <p>
              StadioPlus es el primer mercado NFT de la comunidad del deporte.
              Descubre la oportunidad de poseer, vender y comercializar NFT .
              Explora el mercado para empezar.
            </p>
          </section>
          <div className="headerButtons">
            <a href="https://www.mimusa.io/#pricing">
              <button>CREA TU NFT</button>
            </a>
            <a href="https://www.mimusa.io/#pricing">
              <button>EXPLORAR</button>
            </a>
          </div>
        </div>
        <div className="collectionsNFT">
          <h4>DESCUBRE NUESTROS</h4>
          <h2>NUEVOS LANZAMIENTOS</h2>
          <div className="cardsContainer">
            <h4>OBRAS DESTACADAS</h4>
            <Cards />
          </div>
          <div className="cardsContainer">
            <h4>COLECCIONES</h4>
            <Cards />
          </div>
          <div className="collectionsButtons">
            <a href="https://www.mimusa.io/free-trial">
              <button>TOKEN</button>
            </a>
            <a href="https://www.mimusa.io/free-trial">
              <button>IR A BLOG</button>
            </a>
          </div>
        </div>
      </div>
      <PartnerSection />
      <About />
      <Draft />
      <Blog />
    </div>
  );
}
