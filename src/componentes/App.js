import React, { Component } from 'react';
import './App.scss';
import Encabezado from './encabezadoPie/encabezado';
import ContenidoApp from './contenido/contenidoApp';
import Pie from './encabezadoPie/pie';

export default class App extends Component {
  render() {
    return (
      <div>
        <Encabezado />
        <ContenidoApp />
        <Pie />
      </div>
    );
  }
}