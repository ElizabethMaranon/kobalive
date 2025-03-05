import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/es'; // Importa el idioma español
import '../../estilos/encabezado/encabezado.scss'; // Importa el archivo CSS
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
      <div className="encabezadoFecha_container">
        <div className='logo'>
          <img src={Logo} alt="Logo Koba" className="logo_img" />
        </div>
        <div className="falta">
          Faltan {days} días, {hours} horas {minutes} minutos y {seconds} segundos
        </div>
      </div>
    );
  }
}