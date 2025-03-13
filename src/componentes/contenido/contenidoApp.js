import React, { Component } from 'react';
import '../../estilos/contenido/contenidoApp.scss';
import Logo from '../../assets/images/LogoKoba.png';
import Fecha from '../../assets/images/fecha.jpg';


export default class ContenidoApp extends Component {
  render() {
    return (
      <div className='contenido_app_container'>
        <div className='contenido_app_banda'>
          <div className='banda'>
            banda1
          </div>
          <div className='banda'>
            banda2
          </div>
          <div className='banda'>
            banda3
          </div>
          <div className='banda'>
            banda4
          </div>
          <div className='banda'>
            banda5
          </div>
          <div className='banda'>
            banda6
          </div>
          <div className='banda'>
            banda7
          </div>
          <div className='banda'>
            banda8
          </div>
        </div>
      </div>
    );
  }
}