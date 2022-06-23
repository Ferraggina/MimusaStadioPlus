import React from "react";
import Bombonera from "../../Assets/Bombonera.png";
import Maradona from "../../Assets/Maradona.png";
import Esquiar from "../../Assets/Esquiar.png";

export default function Cards() {
  return (
    <div className="allCardsContainer">
      <div className="cardsContainer">
        <div className="card1">
          <img src={Bombonera} alt="nft1" />
          <h4 className="tittleCard">
            LA BOMBONER -"TEMPLE OF WORLD FOOTBALL"
          </h4>
          <h5 className="precioCard">0.034 BNB</h5>
          <h6 className="precioCardEuro">"($10.88 / 10.44€ )"</h6>
          <button>COMPRAR</button>
        </div>
        <div className="card2">
          <img src={Maradona} alt="nft1" />
          <h4 className="tittleCard">EL SEMILLERO DEL MUNDO</h4>
          <h5 className="precioCard">5 BNB</h5>
          <h6 className="precioCardEuro">"($1600 / 1490.50€ )"</h6>
          <button>COMPRAR</button>
        </div>
        <div className="card3">
          <img src={Esquiar} alt="nft1" />
          <h4 className="tittleCard">TOMBA LA BOMBA</h4>
          <h5 className="precioCard">0.034 BNB</h5>
          <h6 className="precioCardEuro">"($10.88 / 10.44€ )"</h6>
          <button>COMPRAR</button>
        </div>
      </div>
    </div>
  );
}
