import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/es';
import '../../estilos/encabezado/encabezado.scss';

import Logo from '../../assets/images/LogoKoba.png';


moment.locale('es'); // Configura moment para usar español

export default class Encabezado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      now: moment()
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ now: moment() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const targetDate = moment('2025-09-20');
    const { now } = this.state;
    const duration = moment.duration(targetDate.diff(now));
    const days = Math.floor(duration.asDays());
    const hours = duration.hours();
    const minutes = duration.minutes();
    const seconds = duration.seconds();

    return (
      <div className="encabezado_container">
        <div className='logo'>
          <img src={Logo} alt="Logo Koba" className="logo_img" />
        </div>
        <div className='encabezado'>
          <div className="falta">
            Faltan {days} días, {hours} horas {minutes} minutos y {seconds} segundos
          </div>
          <div className='entradas_container'>
            <div className='entradas_titulo'>
              Sumérgete en una experiencia que nunca olvidarás
            </div>
            <div className='entradas_boton'>
              Consigue aquí tus entradas
            </div>
          </div>

        </div>
      </div>
    );
  }
}