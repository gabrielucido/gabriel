import React from "react";

import envelop from "../../assets/envelop.svg";
import github from "../../assets/github.svg";
import heart from "../../assets/heart.svg";
import linkedin from "../../assets/linkedin.svg";
import whatsapp from "../../assets/whatsapp.svg";

const Footer = () => {
  return (
    <footer className="py-3 color-gray-400 bg-gray-900" id="contact">
      <div className="container">
        <div className="row">
          <h3 className="color-gray-200 mb-2">Contato</h3>
        </div>
        <div className="row">
          <div className="col-6 col-lg-6 col-xl-4 mb-1">
            <a className="flex items-center" target="_blank" rel="noreferrer" href="mailto:gabriel.rodrigues.0501@gmail.com@gmail.com">
              <img className="mr-1" height="32" src={envelop} alt="Icone de Envelope" />
              gabriel.rodrigues.0501@gmail.com
            </a>
          </div>
          <div className="col-6 col-lg-6 col-xl-4 mb-1">
            <a className="flex items-center" href="tel:+55 67 984690468">
              <img className="mr-1" height="32" src={whatsapp} alt="Icone do WhatsApp" />
              +5567984690468
            </a>
          </div>
          <div className="col-6 col-lg-6 col-xl-4 mb-1">
            <a className="flex items-center" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/gabriel-rodrigues-ribeiro-0634ba184">
              <img className="mr-1" height="32" src={linkedin} alt="Icone Linkedin" />
              Gabriel Rodrigues
            </a>
          </div>
          <div className="col-6 col-lg-6 col-xl-4 mb-1">
            <a className="flex items-center" target="_blank" rel="noreferrer" href="https://github.com/h3gon101">
              <img className="mr-1" height="32" src={github} alt="Icone do Github" />
              Gabriel Rodrigues
            </a>
          </div>
        </div>
        <p className="mt-2 flex items-center justify-center flex-wrap">Desenvolvido com <img className="px-1" height="20" src={heart} alt="Amor. Icone de coração" /> por <a className="ml-1 color-white fw-bold" href="#main">Archangel Interative</a>.</p>
      </div>
    </footer>
  );
}

export default Footer;
