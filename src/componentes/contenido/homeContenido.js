import React, { Component } from 'react';
import './homeContenido.scss';


export default class HomeContenido extends Component {
  render() {
    return (
      <div className='contenido_app_container'>
        <div className='contenido_app_banda'>
          <div className='banda'>
            Suicidal Angels
          </div>
          <div className='banda'>
            Wolfheart          </div>
          <div className='banda'>
            The Electric Alley
          </div>
          <div className='banda'>
            Eclipse (Sweden)
          </div>
          <div className='banda'>
            Before The Dawn
          </div>
          <div className='banda'>
            Asgarth 
          </div>
          <div className='banda'>
            Moonshinerds 
          </div>
          <div className='banda'>
            Ehun Kilo
          </div>
        </div>
      </div>
    );
  }
}