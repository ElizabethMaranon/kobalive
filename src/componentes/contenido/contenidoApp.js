import React, { Component } from 'react';
import '../../estilos/contenido/contenidoApp.scss';
import Logo from '../../assets/images/LogoKoba.png';
import Fecha from '../../assets/images/fecha.jpg';


export default class ContenidoApp extends Component {
  render() {
    return (
      <div className='contenido_app_container'>
        <div className='contenido_app_banda'>
          <img src={Logo} alt="Logo Koba" className="banda_img" />
          <img src={Logo} alt="Logo Koba" className="banda_img" />
          <img src={Logo} alt="Logo Koba" className="banda_img" />
          <img src={Logo} alt="Logo Koba" className="banda_img" />
          <img src={Logo} alt="Logo Koba" className="banda_img" />
          <img src={Logo} alt="Logo Koba" className="banda_img" />
          <img src={Logo} alt="Logo Koba" className="banda_img" />
        </div>
      </div>

    );
  }
}