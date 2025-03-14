import React, { Component } from 'react';
import '../../estilos/pie/pie.scss';
import PieMonte from '../../assets/images/pie_pag.jpg';
import Sugaar from '../../assets/images/Sugaar.png';

export default class Pie extends Component {
  render() {
    return (
      <div className="pie_container">
        <div className="pie_fondo">
          <img src={PieMonte} alt="Monte" className="pie_monte" />
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
            <div className="texto_promotorr">
              Promotores
              Sustatzaileak
            </div>
            <div className="logo_promotor">

            </div>
          </div>

        </div>
      </div>
    );
  }
}