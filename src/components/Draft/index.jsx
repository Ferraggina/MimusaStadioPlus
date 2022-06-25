import React from "react";
import nft from "../../Assets/nft.png";
import "../../scss/components/_draft.scss";
export default function Draft() {
  return (
    <div className="draftContainer">
      <div className="separador">
        <p>
          -ARTISTAS-ARTISTAS-ARTISTAS-ARTISTAS-ARTISTAS-ARTISTAS-ARTISTAS-ARTISTAS-ARTISTAS-ARTISTAS-ARTISTAS-ARTISTAS-ARTISTAS-ARTISTAS-ARTISTAS-{" "}
        </p>
      </div>
      <div className="monkeyContainer">
        <img className="monkey" src={nft} alt="nft" />
      </div>
      <div className="textDraft">
        <h4 className="h4draft">PARTICIPA EN NUESTRO</h4>
        <h2>DRAFT DE ARTISTAS</h2>
      </div>
      <a href="https://www.mimusa.io/free-trial">
        <button className="buttonIns">INSCRIBITE</button>
      </a>
    </div>
  );
}
