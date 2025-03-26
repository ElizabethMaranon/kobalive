import React, { Component } from 'react';
import '../../estilos/contenido/homeContenido.scss';
import Suicidal from '../../assets/images/Bandas/Suicidal_Angels_Logo.png';


export default class HomeContenido extends Component {
  render() {
    return (
      <div className='contenido-app-container'>
        <div className='fecha-container'>
          <div className='año'>2025</div>
          <div className='fecha'>20 de Septiembre</div>
          <div className='fecha'>Irailaren 20a</div>
          <div className='fecha'>September 20</div>
          <div className='lugar'>Matiena (Adabiño)</div>
          <div className='lugar'>dirección</div>
        </div>

        <div className='banda-container'>
          <div className='banda'>
            <img src={Suicidal} alt="Logo Suicidal Angels" className="suicidal" />
          </div>
          <div className='banda'>
            <img src={Suicidal} alt="Logo Suicidal Angels" className="suicidal" />
          </div>
          <div className='banda'>
            <img src={Suicidal} alt="Logo Suicidal Angels" className="suicidal" />
          </div>
          <div className='banda'>
            <img src={Suicidal} alt="Logo Suicidal Angels" className="suicidal" />
          </div>
          <div className='banda'>
            <img src={Suicidal} alt="Logo Suicidal Angels" className="suicidal" />
          </div>
          <div className='banda'>
            <img src={Suicidal} alt="Logo Suicidal Angels" className="suicidal" />
          </div>
          <div className='banda'>
            <img src={Suicidal} alt="Logo Suicidal Angels" className="suicidal" />
          </div>
          <div className='banda'>
            <img src={Suicidal} alt="Logo Suicidal Angels" className="suicidal" />
          </div>
        </div>
      </div>
    );
  }
}