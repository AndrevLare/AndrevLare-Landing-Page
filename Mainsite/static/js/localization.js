const buttonsUL = document.querySelector(".language__ul"); // ul con los dos botones (español e ingles)
const textsToChange = document.querySelectorAll("[data-section]"); // lista con todos los elementos que cambian de idioma

const defaultLanguage = navigator.language || navigator.userLanguage; //Obtener el lenguaje predeterminado del navegador

// Cambiar idioma target = al elemento q lo llamo
changeLanguage = async (target) => {
  let language = target.dataset.lang; // Idioma deseado (sacado de la propiedad data-lang del elemento target)

  //Visual (Mostrar idioma seleccionado)
  switch (language) {
    case "es":
      buttonsUL.classList.toggle("language-es", true);
      buttonsUL.classList.toggle("language-en", false);
      break;
    case "en":
      buttonsUL.classList.toggle("language-es", false);
      buttonsUL.classList.toggle("language-en", true);
      break;
  }

  //Funcional
  const requestJson = await fetch(`/static/json/${language}.json`); //solicita el json q necesite (es.json o en.json) | devuelve la request
  const texts = await requestJson.json(); // obtiene el .json de la request

  for (const textToChange of textsToChange) {
    // recorre todos los textos y los cambia de idioma
    const section = textToChange.dataset.section;
    const value = textToChange.dataset.value;
    textToChange.innerHTML = texts[section][value];
  }
};

//cambiar idioma al predeterminado del navegador
if (defaultLanguage.startsWith("es")) {
  changeLanguage(document.querySelector(`[data-lang="es"]`));
} else {
  changeLanguage(document.querySelector(`[data-lang="en"]`));
}
