import React, { Component } from 'react';
import '../../estilos/pie/pie.scss';
import MonteNegro from '../../assets/images/MonteNegro.jpg';
import Sugaar from '../../assets/images/Sugaar.png';
import Abadiño from '../../assets/images/Abadiño.png';
import Lasuen from '../../assets/images/Lasuen_Erlia.png';
import Diputacion from '../../assets/images/Diputacion.png';

export default class Pie extends Component {
  render() {
    return (
      <div className="pie_container">
        <div className="pie_fondo">
          <img src={MonteNegro} alt="Monte" className="pie_monte" />
        </div>
        <div className="patrocinio">
          <div className="organizador">
            <div className="texto_organizador">
              Organizador
              Antolatzailea
            </div>
            <div className="logo_organizador">
              <img src={Sugaar} alt="Monte" className="pie_monte" />
            </div>
          </div>
          <div className="promotor">
            <div className="texto_promotor">
              Promotores
              Sustatzaileak
            </div>
            <div className="logo_promotor">
              <img src={Abadiño} alt="Monte" className="pie_monte" />
              <img src={Lasuen} alt="Lasuen_Erlia" className="lasuen_erlia" />
              <img src={Diputacion} alt="Diputación" className="diputacion" />

            </div>
          </div>

        </div>
      </div>
    );
  }
}