import jugadorAmarillo from "../../Assets/jugadorAmarillo.png";
import jugadorNaranja from "../../Assets/jugadorNaranja.png";
import fondoJugadorAmarillo from "../../Assets/fondoJugadorAmarillo.png";
<div className="bannerFormArtist">
  <h2>YA ESTÁ AQUÍ EL NUEVO TOKEN DE</h2>
  <h2>STADIOPLUS</h2>
  <p>
    El token que revolucionará el modelo de monetización del mundo del deporte y
    los eSports gracias a los NFTs.
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
</div>;
