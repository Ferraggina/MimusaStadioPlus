import React from "react";
import jugadorAmarillo from "../../Assets/jugadorAmarillo.png";
import jugadorNaranja from "../../Assets/jugadorNaranja.png";
import fondoJugadorAmarillo from "../../Assets/fondoJugadorAmarillo.png";
import "../../scss/components/_bannerCont.scss";

export default function BannerCont() {
  return (
    <section className="bannerConteiner">
      <div className="imgText">
        <article className="textConteiner">
          <h1>
            YA ESTA AQUI EL NUEVO TOKEN DE <label>STADIOPLUS</label>
          </h1>
          <p>
            El token que revolucionará el modelo de monetización del mundo del
            deporte y los eSports gracias a los NFTs.
          </p>
          <div className="correoDiv">
            <input type="text" className="correoInput" />
            <button>Join the waitlist.</button>
          </div>
          <div className="checkboxDiv">
            <p>I understand I can unsubscribe at any time. Privacy Policy</p>
            <input type="checkbox" />
          </div>
        </article>
        <article className="imageConteiner">
          <img src={jugadorNaranja} alt="" className="JugadorNaranja" />

          <img src={jugadorAmarillo} alt="" className="JugadorAmarillo" />

          <img src={jugadorNaranja} alt="" className="JugadorNaranja2" />
        </article>
      </div>
      <div className="imagenFondoBanner">
        <img src={fondoJugadorAmarillo} alt="" />
      </div>
    </section>
  );
}
