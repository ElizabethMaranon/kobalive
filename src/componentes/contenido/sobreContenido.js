import React, { Component } from 'react';
import '../../estilos/contenido/sobreContenido.scss';
import Images from '../../assets/imageIndex';
export default class SobreContenido extends Component {
  render() {
    return (
      <div className="sobreContenido">

        <div className="imagen">
          <img className="imagen-perfil" src={Images.Koba.Perfil} alt="Perfil" />
          <img className="imagen-equipo" src={Images.Koba.Equipo} alt="Equipo" />
          <img className="imagen-perfil" src={Images.Koba.Perfil} alt="Perfil" />

          <div className="imagen-texto">
            <h1>¿Quienes somos?</h1>
            <h2>Hay 3 palabras</h2>
            <h2>que definen</h2>
            <h2>al equipo</h2>
            <h2>del Koba Live </h2>
            <h2>Honestidad Pasión Corazón</h2>
          </div>
        </div>

        
        <p>Suponemos que nuestra historia no es diferente a la de otros, pero es la nuestra y la llevamos por bandera con mucho orgullo.</p>
        <p>Sugaar Musika Elkartea es la asociación cultural que está detrás del Koba Live y está formada por un equipo de locos que no puede vivir sin la música metal. Todos teníamos claro que queríamos hacer realidad uno de nuestros sueños: organizar un festival en nuestra tierra, dónde hemos nacido y crecido.</p>
        <p>Ha sido un trabajo duro, muy de "pico y pala", hasta que se nos dio la oportunidad de demostrar el potencial que tenía el Koba en Abadiño.</p>
        <p>Aún recordamos el día en que recibimos todo el apoyo que necesitábamos para organizar nuestra primera edición, fue uno de los más felices de nuestra vida.</p>
        <p>Formar el equipo fue lo más fácil, la vida nos ha ido poniendo a unos frente a los otros por casualidades o causalidades, eso no lo tenemos tan claro.</p>
        <p>Sea como fuere, aquí detrás tienes a gente honesta, que pone el alma en lo que hace y que ha puesto todo el corazón para sacar adelante este festival.</p>
      </div >
    );
  }
}