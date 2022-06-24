import React from "react";
import player2 from "../../Assets/player2.png";
import fondo2FutbolCard from "../../Assets/fondo2FutbolCard.png";
import "../../scss/components/_about.scss";

export default function About() {
  return (
    <div className="aboutContainer">
      <div className="cardPlayer2">
        <img className="playerImg2" src={player2} alt="player2" />
        <div className="decoracionFondo">
          <img
            className="fondo2FutbolCard"
            src={fondo2FutbolCard}
            alt="fondo2FutbolCard"
          />
        </div>
      </div>
      <section className="aboutText">
        <div className="text">
          <h4>CONOCENOS </h4>
          <h1>ACERCA DE NOSOTROS</h1>
        </div>
        <section className="descriptionAbout">
          <p>
            StadioPlus es una empresa web3 que tiende un puente entre el mundo
            del deporte y los NFTs, democratizaremos el acceso a los aficionados
            al deporte permitiendo que todos descubran, recopilen, compren y
            vendan NFT de deporte.
          </p>
        </section>
      </section>
    </div>
  );
}
