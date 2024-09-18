// conseguir el contenedor,la targeta(contenedor de ambos lados) y el reverzo de la targeta
let card = document.querySelector(".card");
let cardBack = document.querySelector(".card-back");
//Bool si la targeta esta girada; Default = false
let isFliped = false;

//Girar la targeta con click (Solo Movil)
const flipCard = () => {
  if (isFliped) {
    card.classList.remove("flip-card");
  } else {
    card.classList.add("flip-card");
  }
  isFliped = !isFliped;
};
