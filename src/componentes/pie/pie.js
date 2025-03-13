import React, { Component } from 'react';
import '../../estilos/pie/pie.scss';
import PieMonte from '../../assets/images/pie_pag.jpg';

export default class Pie extends Component {
  render() {
    return (
      <div className="pie_container">
        <div className="pie_fondo">
          <img src={PieMonte} alt="Monte" className="pie_monte" />
        </div>
      </div>
    );
  }
}