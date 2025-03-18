import React, { Component } from 'react';
import './homeContenido.scss';
import Suicidal from '../../assets/images/Bandas/Suicidal_Angels_Logo.png';


export default class HomeContenido extends Component {
  render() {
    return (
      <div className='contenido_app_container'>
        <div className='contenido_app_banda'>
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
          <div className='banda'>
          </div>
        </div>
      </div>
    );
  }
}