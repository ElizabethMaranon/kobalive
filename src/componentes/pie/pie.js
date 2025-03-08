import React, { Component } from 'react';
import '../../estilos/pie/pie.scss';
import Mielma from '../../assets/images/Logo_MielmaDev.png';

export default class Pie extends Component {
render () {
  return (
  <img src={Mielma} alt="Logo MielmaDev" className="mielma_img" />
);
}
}