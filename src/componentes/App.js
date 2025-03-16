import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.scss';
// Complementos de la aplicación
import Encabezado from './encabezadoPie/encabezado';
import Pie from './encabezadoPie/pie';
// Páginas de la aplicación
import Home from './pagina/home';
import Sobre from './pagina/sobre';
import Faq from './contenido/faqContenido';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Encabezado />
        <Router>
          <nav className="navegador">
            <Link to="/">Home</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/faq">FAQ</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/faq" element={<Faq />} />
          </Routes>
        </Router>
        <Pie />
      </div>
    );
  }
}
