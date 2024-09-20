// Variables
const button = document.querySelector(".header__div__button"); //Contenedor barras y boton
const bars = document.querySelectorAll(".header__div__button--span"); // lista con las 3 barras
const barsArray = [...bars]; // conversion de la lista bars a array
const menu = document.querySelector(".header__nav"); //objeto de la lista del menu
let active = false; //Bool menu activado
const options = document.querySelectorAll(".header__nav__ul--li"); // array de las 5 opciones
const sections = {
  home: document.getElementById("home"),
  portfolio: document.getElementById("portfolio"),
  CTA: document.getElementById("CTA"),
  contact: document.getElementById("contact"),
  services: document.getElementById("services"),
  socials: document.getElementById("socials"),
};
document.addEventListener("click", (event) => {
  const currentTarget = event.target;
  if (
    active &&
    button !== currentTarget &&
    !barsArray.some((bar) => bar === currentTarget)
  )
    switchMenu();
});

addEventListener("scroll", () => {
  if (active) switchMenu();
});

button.addEventListener("click", () => {
  switchMenu();
});
switchMenu = () => {
  bars[0].classList.toggle("menuActive", !active);
  bars[1].classList.toggle("menuActive", !active);
  bars[2].classList.toggle("menuActive", !active);
  bars[0].classList.toggle("menuInactive", active);
  bars[1].classList.toggle("menuInactive", active);
  bars[2].classList.toggle("menuInactive", active);
  menu.style.transform = active ? "scale(1, 0)" : "scale(1, 1)";
  active = !active;
};

//scroll
function scrollToSection(section, block) {
  sections[section].scrollIntoView({ behavior: "smooth", block: `${block}` });
}
