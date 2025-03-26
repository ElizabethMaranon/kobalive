document.addEventListener('DOMContentLoaded', () => {
  const setDynamicHeight = (selector, cssVar) => {
    const element = document.querySelector(selector);
    if (element) {
      const height = element.offsetHeight;
      document.documentElement.style.setProperty(cssVar, `${height}px`);
    }
  };

  setDynamicHeight('.encabezado_container', '--header-height'); // Altura del encabezado
  setDynamicHeight('.pie_container', '--footer-height'); // Altura del pie de página
});
