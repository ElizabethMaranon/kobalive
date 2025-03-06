import React, { Component } from 'react';
import '../../estilos/contenido/contenidoApp.scss';

export default class ContenidoApp extends Component {
  render() {
    return (
      <div className='contenido_app_container'>
        <div className='contenido_app_titulo'>
          Descubre la mejor aplicación de música
        </div>
        <div className='contenido_app_descripcion'>
          Escucha tus canciones favoritas en cualquier lugar, en cualquier momento.
        </div>
        <div className='contenido_app_boton'>
          Descargar
        </div>
      </div>
    );
  }
}