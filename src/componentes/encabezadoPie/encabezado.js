import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/es';
import '../../estilos/encabezadoPie/encabezado.scss';

import Logo from '../../assets/images/Koba/LogoKoba.png';

moment.locale('es');

export default class Encabezado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      now: moment()
    };
  }

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    this.clearTimer();
  }

  startTimer() {
    this.interval = setInterval(() => {
      this.setState({ now: moment() });
    }, 1000);
  }

  clearTimer() {
    clearInterval(this.interval);
  }

  calculateCountdown() {
    const targetDate = moment('2025-09-20');
    const { now } = this.state;
    const duration = moment.duration(targetDate.diff(now));
    return {
      days: Math.floor(duration.asDays()),
      hours: duration.hours(),
      minutes: duration.minutes(),
      seconds: duration.seconds()
    };
  }

  renderCountdown() {
    const { days, hours, minutes, seconds } = this.calculateCountdown();
    return `Faltan ${days} días, ${hours} horas ${minutes} minutos y ${seconds} segundos`;
  }

  render() {
    return (
      <div className="encabezado_container">
        <div className="logo">
          <img src={Logo} alt="Logo Koba" className="logo_img" />
        </div>
        <div className="encabezado">
          <div className="falta">{this.renderCountdown()}</div>
          <div className="entradas_titulo">
            Sumérgete en una experiencia que nunca olvidarás
          </div>
          <div className="entradas_boton">Consigue aquí tus entradas</div>
        </div>
      </div>
    );
  }
}