document.addEventListener("DOMContentLoaded", () => {
  const enlaces = document.querySelectorAll(".navegador a");

  enlaces.forEach((enlace) => {
    enlace.addEventListener("click", () => {
      // Elimina la clase "active" de todos los enlaces
      enlaces.forEach((e) => e.classList.remove("active"));

      // Agrega la clase "active" al enlace clicado
      enlace.classList.add("active");
    });
  });
});
