import React from "react";
import player2 from "../../Assets/player2.png";
import fondo2FutbolCard from "../../Assets/fondo2FutbolCard.png";

export default function About() {
  return (
    <div className="aboutContainer">
      <section className="aboutText">
        <h4>CONOCENOS </h4>
        <h1>ACERCA DE NOSOTROS</h1>

        <img className="playerImg2" src={player2} alt="player2" />
        <img src={fondo2FutbolCard} alt="fondo2FutbolCard" />
      </section>
      <section className="descriptionAbout">
        <p>
          StadioPlus es una empresa web3 que tiende un puente entre el mundo del
          deporte y los NFTs, democratizaremos el acceso a los aficionados al
          deporte permitiendo que todos descubran, recopilen, compren y vendan
          NFT de deporte.
        </p>
      </section>
    </div>
  );
}
