import React, { Component } from 'react';
import '../estilos/App.scss';
import Encabezado from './encabezado/encabezado';
import ContenidoApp from './contenido/contenidoApp';
import Pie from './pie/pie';

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