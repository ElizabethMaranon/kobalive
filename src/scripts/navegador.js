document.addEventListener("DOMContentLoaded", () => {
  const enlaces = document.querySelectorAll(".navegador a");

  enlaces.forEach((enlace) => {
    enlace.addEventListener("click", () => {
      enlaces.forEach((e) => e.classList.remove("active"));

      enlace.classList.add("active");
    });
  });
});
