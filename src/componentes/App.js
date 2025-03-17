import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.scss';
// Complementos de la aplicación
import Encabezado from './encabezadoPie/encabezado';
import Pie from './encabezadoPie/pie';
// Páginas de la aplicación
import Home from './pagina/home';
import Sobre from './pagina/sobre';
import Faq from './pagina/faq';
import Merchandising from './pagina/merchandising';

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
            <Link to="/merchandising">Merchandising</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/merchandising" element={<Merchandising />} />
          </Routes>
        </Router>
        <Pie />
      </div>
    );
  }
}
