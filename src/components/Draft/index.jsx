import React from "react";
import nft from "../../Assets/nft.png";
import jugadorAmarillo from "../../Assets/jugadorAmarillo.png";
import jugadorNaranja from "../../Assets/jugadorNaranja.png";
import fondoJugadorAmarillo from "../../Assets/fondoJugadorAmarillo.png";

export default function Draft() {
  return (
    <div className="draftContainer">
      <div className="separador">
        <p>
          ARTISTAS-ARTISTAS-ARTISTAS-ARTISTAS-ARTISTAS-ARTISTAS-ARTISTAS-ARTISTAS-ARTISTAS-ARTISTAS-ARTISTAS-ARTISTAS-ARTISTAS-{" "}
        </p>
      </div>
      <img src={nft} alt="nft" />
      <div className="textDraft">
        <h4>PARTICIPA EN NUESTRO</h4>
        <h2>DRAFT DE ARTISTAS</h2>
      </div>
      <a href="https://www.mimusa.io/free-trial">
        <button>INSCRIBITE</button>
      </a>
      <div className="bannerFormArtist">
        <h2>YA ESTÁ AQUÍ EL NUEVO TOKEN DE</h2>
        <h2>STADIOPLUS</h2>
        <p>
          El token que revolucionará el modelo de monetización del mundo del
          deporte y los eSports gracias a los NFTs.
        </p>
        <input type="text" />
        <button>Join the waitlist.</button>
        <div>
          <input type="checkbox" />{" "}
          <p>I understand I can unsubscribe at any time. Privacy Policy</p>
        </div>
        <div className="draftImages">
          <img src={jugadorAmarillo} alt="jugadorAmarillo" />
          <img src={jugadorNaranja} alt="jugadorNaranja" />
          <img src={fondoJugadorAmarillo} alt="fondoJugadorAmarillo" />
        </div>
      </div>
    </div>
  );
}
