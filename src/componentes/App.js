import React, { Component } from 'react';
import '../estilos/App.scss';
import Encabezado from './encabezado/encabezado';
import Entradas from './encabezado/entradas';

export default class App extends Component {
  render() {
    return (
      <div>
        <Encabezado />
        <Entradas />
      </div>
    );
  }
}