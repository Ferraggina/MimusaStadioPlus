import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { TiSocialTwitter } from "react-icons/ti";
import logoFooter from "../../Assets/logoFooter.png";
import "../../scss/components/_footer.scss";

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footerText">
          <img src={logoFooter} alt="logoFooter" />
          <h6>ya esta aqui el nuevo token de StadioPlus</h6>
        </div>
        <div className="socialIcons">
          <a className="icono" href="https://www.facebook.com/">
            <BsFacebook />
          </a>
          <a className="icono" href="https://www.instagram.com/">
            <BsInstagram />
          </a>
          <a className="icono" href="https://twitter.com/?lang=es">
            <TiSocialTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
}
