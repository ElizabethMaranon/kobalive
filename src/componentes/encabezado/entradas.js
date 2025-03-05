import React, { Component } from 'react';
import '../../estilos/encabezado/entradas.scss';

export default class Entradas extends Component {
  render() {
    return (
      <div className='entradas_container'>
        <div className='entradas_titulo'>
          Sumérgete en una experiencia que nunca olvidará
        </div>
        <div className='entradas_boton'>
          Consigue aquí tus entradas
        </div>

      </div>
    );
  }
}

