import React from "react";
import tarjAzul from "../../Assets/tarjetaAzulDer.png";
import tarjAzul2 from "../../Assets/tarjetaAzulDer2.png";
import logo1 from "../../Assets/logo1.png";
import logo2 from "../../Assets/logo2.png";
import logo3 from "../../Assets/logo3.png";
import logo4 from "../../Assets/logo4.png";
import logo5 from "../../Assets/logo5.png";

import backGroundTarjAzul1 from "../../Assets/fondoTarjetaAzul.png";
export default function PartnerSection() {
  return (
    <div className="partenerContainer">
      <div className="banner">
        <h2>CONOCE EL NUEVO MARKETPLACE NFT</h2>
        <h2>STADIOPLUS</h2>
        <p>
          Podrás conseguir cualquier NFT de deporte de la red ethereum y BSC con
          solo un 1% de comisión
        </p>
        <img src={tarjAzul} alt="tarjAzul" />
        <img src={tarjAzul2} alt="tarjAzul" />

        <img src={backGroundTarjAzul1} alt="bakcGroundTarjAzul" />

        <a href="https://www.mimusa.io/free-trial">
          <button>MERCADO SECUNDARIO</button>
        </a>
      </div>
      <div className="partners">
        <h4>DESCUBRE NUESTROS</h4>
        <h2>PARTNERS</h2>
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
