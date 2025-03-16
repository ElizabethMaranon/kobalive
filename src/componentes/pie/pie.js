import React, { Component } from 'react';
import '../../estilos/pie/pie.scss';
import Sugaar from '../../assets/images/Sugaar.png';
import Abadiño from '../../assets/images/Abadiño.png';
import Lasuen from '../../assets/images/Lasuen_Erlia.png';
import Diputacion from '../../assets/images/Diputacion.png';

export default class Pie extends Component {
  render() {
    return (
      <div className="pie_container">
        <div className="patrocinio">
          <div className="organizador">
            <div className="texto_organizador">
              Organizador / Antolatzailea
            </div>
            <div className="logo_organizador">
              Logo Sugaar
            </div>
          </div>
          <div className="promotor">
            <div className="texto_promotor">
              Promotores / Sustatzaileak
            </div>
            <div className="logo_promotor">
              <p>Logo Abadiño</p>
              <p>Logo Lasuen</p>
              <p>Logo Diputación</p>
            </div>
          </div>
          <div className="contacto">
            <div className="texto_contacto">
              Contacto / Kontaktua
            </div>
            <div className="logo_contacto">
              <p>Información / Informazioa</p>
              <p>Contrataciones / Kontratazioak</p>
              <p>Abadiño</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}