import React, { Component } from 'react';
import '../../style/encabezado/entradas_style.scss';

export default class Entradas extends Component {
  render() {
    return (
      <div className='entradas_container'>
        <div className='entradas_titulo'>
          No te quedes sin tu entrada
        </div>
        <div className='entradas_boton'>
          Compra tu entrada aquí
        </div>

      </div>
    );
  }
}

