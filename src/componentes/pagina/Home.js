import React, { Component } from 'react';
import Encabezado from '../encabezadoPie/encabezado';
import ContenidoHome from '../contenido/contenidoHome';
import Pie from '../encabezadoPie/pie';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Encabezado />
        <ContenidoHome />
        <Pie />
      </div>
    );
  }
}