const formContainer = document.getElementById("contact");
const formDivSelect = document.querySelector(".form-div-select");
const select = document.getElementById("service");
const form = document.getElementById("form");
const response = document.querySelector(".response");

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

// Enviar datos del formulario
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevenir el envío del formulario tradicional
  response.innerHTML = "<i class='fa-solid fa-hourglass-half fa-flip'></i>";

  let formData = new FormData(this);

  select.classList.remove("selected");
  form.reset();

  fetch("/form-submit/", {
    method: "POST",
    body: formData,
    headers: {
      "X-CSRFToken": document.querySelector("[name=csrfmiddlewaretoken]").value, // Django CSRF token
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        response.innerHTML =
          "<span class='response-success'>Mensaje enviado con exito</span>";
      } else {
        response.innerHTML =
          "<span class='response-failure'>Error al enviar el mensaje.</span>";
      }
    })
    .catch((error) => {
      response.innerHTML =
        "<span class='response-failure'>Error al enviar el mensaje.</span>";
      console.error("Error Marica ): :", error);
    });
});
