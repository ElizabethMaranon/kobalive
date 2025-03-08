import React, { Component } from 'react';
import '../estilos/App.scss';
import Encabezado from './encabezado/encabezado';
import Entradas from './encabezado/entradas';
import ContenidoApp from './contenido/contenidoApp';
import Pie from './pie/pie';

export default class App extends Component {
  render() {
    return (
      <div>
        <Encabezado />
        <Entradas />
        <ContenidoApp />
        <Pie />
      </div>
    );
  }
}