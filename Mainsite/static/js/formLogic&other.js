const formContainer = document.getElementById("contact");
const formDivSelect = document.querySelector(".form-div-select");
const select = document.getElementById("service");

/* SERVICE */

/* Color para el texto de #service (<select>) */
select.addEventListener("change", function () {
  if (this.value == "Selecciona un servicio") {
    this.classList.remove("selected");
  } else {
    this.classList.add("selected");
  }
  this.blur();
});

/* Botones "Seleccionar" de los servicios. eligen el servicio en el <select> y ejecuta una pequeña animacion */

// Función para iniciar la animación
function startAnimation() {
  formDivSelect.animate(
    [
      // Estados de la animación
      { transform: "scale(1)" }, // 0%
      { transform: "scale(1)" }, // 25%
      { transform: "scale(1)" }, // 25%
      { transform: "scale(1.1)" }, // 75%
      { transform: "scale(1)" }, // 100%
    ],
    {
      // Configuración de la animación
      duration: 1500,
      easing: "ease-in-out",
      iterations: 1,
      fill: "forwards",
    }
  );
}
const selectOption = (i) => {
  select.selectedIndex = i;
  select.dispatchEvent(new Event("change"));
  formContainer.scrollIntoView({ behavior: "smooth", block: `start` });
  startAnimation();
};
