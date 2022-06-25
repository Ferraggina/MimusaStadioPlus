import React from "react";
import tarjAzul from "../../Assets/tarjetaAzulDer.png";
import tarjAzul2 from "../../Assets/tarjetaAzulDer2.png";
import logo1 from "../../Assets/logo1.png";
import logo2 from "../../Assets/logo2.png";
import logo3 from "../../Assets/logo3.png";
import logo4 from "../../Assets/logo4.png";
import logo5 from "../../Assets/logo5.png";
import "../../scss/components/_partnerSection.scss";

import backGroundTarjAzul1 from "../../Assets/fondoTarjetaAzul.png";
export default function PartnerSection() {
  return (
    <div className="partenerContainer">
      <div className="bannerContainer">
        <div className="fondoBann">
          <div className="textContainer">
            <h2>CONOCE EL NUEVO MARKETPLACE NFT</h2>
            <h2 className="colorH2">STADIOPLUS</h2>
            <p>
              Podrás conseguir cualquier NFT de deporte de la red ethereum y{" "}
              <br /> BSC con solo un 1% de comisión
            </p>
            <a href="https://www.mimusa.io/free-trial">
              <button className="buttonPartner">MERCADO SECUNDARIO</button>
            </a>
          </div>

          <img
            className="backgrounBanner"
            src={backGroundTarjAzul1}
            alt="bakcGroundTarjAzul"
          />
        </div>
        <div className="imgCardBlue">
          <img className="cardBlu2" src={tarjAzul2} alt="tarjAzul" />
          <img className="cardBlu1" src={tarjAzul} alt="tarjAzul" />
        </div>
      </div>
      <div className="partners">
        <div className="texcPartNerContainer">
          <h4>DESCUBRE NUESTROS</h4>
          <h2>PARTNERS</h2>
        </div>
        <a href="https://www.mimusa.io/post/como-trabajan-las-consultoras-con-mimusa">
          <img src={logo1} alt="logo1" />
        </a>
        <a href="https://www.mimusa.io/post/como-trabajan-las-consultoras-con-mimusa">
          <img src={logo2} alt="logo2" />
        </a>
        <a href="https://www.mimusa.io/post/como-trabajan-las-consultoras-con-mimusa">
          <img src={logo3} alt="logo3" />
        </a>
        <a href="https://www.mimusa.io/post/como-trabajan-las-consultoras-con-mimusa">
          <img src={logo4} alt="logo4" />
        </a>
        <a href="https://www.mimusa.io/post/como-trabajan-las-consultoras-con-mimusa">
          <img src={logo5} alt="logo5" />
        </a>
      </div>
    </div>
  );
}
