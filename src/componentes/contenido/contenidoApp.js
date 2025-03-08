import React, { Component } from 'react';
import '../../estilos/contenido/contenidoApp.scss';
import Logo from '../../assets/images/LogoKoba.png';
import Fecha from '../../assets/images/fecha.jpg';


export default class ContenidoApp extends Component {
  render() {
    return (
      <div className='contenido_app_container'>
        <div className='contenido_app_fecha'>
          <img src={Fecha} alt="Fecha" className="fecha" />
          </div>
        <div className='contenido_app_banda'>
          <div className='banda1'>
            banda1
          </div>
          <div className='banda2'>
            banda2
          </div>
          <div className='banda3'>
            banda3
          </div>
          <div className='banda4'>
            banda4
          </div>
          <div className='banda5'>
            banda5
          </div>
          <div className='banda6'>
            banda6
          </div>
          <div className='banda7'>
            banda7
          </div>
          <div className='banda8'>
            banda8
            </div>
        </div>
      </div>
    );
  }
}