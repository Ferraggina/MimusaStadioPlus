import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { TiSocialTwitter } from "react-icons/ti";

export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerText">
        <img src="" alt="" />
        <h3>StadioPlus</h3>
        <p>YA ESTA AQUÍ EL NUEVO TOKEN DE STADIOPLUS</p>
      </div>
      <div className="redes">
        <a href="https://www.facebook.com/">
          <BsFacebook />
        </a>
        <a href="https://twitter.com/?lang=es">
          <BsInstagram />
        </a>
        <a href="https://www.instagram.com/">
          <TiSocialTwitter />
        </a>
      </div>
    </div>
  );
}
