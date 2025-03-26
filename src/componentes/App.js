import React, { lazy, Suspense, memo } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import '../estilos/App.scss';
// Complementos de la aplicación
import Encabezado from './encabezadoPie/encabezado';
import Pie from './encabezadoPie/pie';

// Lazy loading de componentes para mejor rendimiento
const Home = lazy(() => import('./pagina/home'));
const Sobre = lazy(() => import('./pagina/sobre'));
const Faq = lazy(() => import('./pagina/faq'));
const Merchandising = lazy(() => import('./pagina/merchandising'));

// Constantes de rutas para evitar errores de escritura
const RUTAS = {
  HOME: '/',
  SOBRE: '/sobre',
  FAQ: '/faq',
  MERCHANDISING: '/merchandising'
};

// Definición de rutas con constantes
const rutas = [
  {
    path: RUTAS.HOME,
    nombre: '20 Sept 2025',
    componente: <Home />,
    clase: 'link-home'
  },
  {
    path: RUTAS.SOBRE,
    nombre: 'Sobre',
    componente: <Sobre />,
    clase: 'link-sobre'
  },
  {
    path: RUTAS.FAQ,
    nombre: 'FAQ',
    componente: <Faq />,
    clase: 'link-faq'
  },
  {
    path: RUTAS.MERCHANDISING,
    nombre: 'Merchandising',
    componente: <Merchandising />,
    clase: 'link-merchandising'
  },
];

// Componente de carga
const Cargando = () => <div className="cargando">Cargando...</div>;

// Componente de error
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div className="error">Ocurrió un error al cargar la página</div>;
    }
    return this.props.children;
  }
}

// Componente de navegación memorizado para evitar renderizados innecesarios
const Navegador = memo(() => (
  <nav className="navegador" aria-label="Navegación principal">
    {rutas.map(({ path, nombre, clase }) => (
      <NavLink
        key={path}
        to={path}
        className={({ isActive }) => isActive ? `${clase} active` : clase}
        aria-current={({ isActive }) => isActive ? 'page' : undefined}
      >
        {nombre}
      </NavLink>
    ))}
  </nav>
));

// Componente principal usando función en lugar de clase
const App = () => {
  return (
    <Router>
      <div className="App">
        <Encabezado />
        <Navegador />
        <main className="rutas">
          <ErrorBoundary>
            <Suspense fallback={<Cargando />}>
              <Routes>
                {rutas.map(({ path, componente }) => (
                  <Route key={path} path={path} element={componente} />
                ))}
                <Route path="*" element={<div>Página no encontrada</div>} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </main>
        <Pie />
      </div>
    </Router>
  );
};

export default App;
