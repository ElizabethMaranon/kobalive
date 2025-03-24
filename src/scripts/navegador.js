document.addEventListener("DOMContentLoaded", () => {
  const enlaces = document.querySelectorAll(".navegador a");

  enlaces.forEach((enlace) => {
    enlace.addEventListener("click", () => {
      // Elimina la clase "active" de todos los enlaces
      enlaces.forEach((e) => e.classList.remove("active"));

      enlace.classList.add("active");
    });
  });
});
