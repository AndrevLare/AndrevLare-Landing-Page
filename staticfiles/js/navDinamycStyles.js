// Border Bottom
window.addEventListener("scroll", function () {
  let scrollPos = document.documentElement.scrollTop;
  let scrollHeight = document.documentElement.scrollHeight;
  let clientHeight = document.documentElement.clientHeight;

  let scrollPercentage = (scrollPos / (scrollHeight - clientHeight)) * 100;

  document.documentElement.style.setProperty(
    "--header-border-bottom-width",
    `${scrollPercentage}%`
  );
});

// Active Section
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".non-mobile-section");

  const navElementsArray = Array.from(
    document.querySelectorAll(".header__nav__ul--li")
  );
  const filteredNavElements = navElementsArray.filter(
    (element) => !element.classList.contains("nav-li-extra")
  );

  const navElements = {};
  filteredNavElements.forEach((element, i) => {
    const key = sections[i].id;
    const navElement = filteredNavElements[i];

    navElements[key] = navElement;
  });

  const options = {
    root: null, // Usa la ventana de visualización como contenedor.
    threshold: 0.75, // El porcentaje del elemento visible antes de activar el callback.
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        filteredNavElements.forEach((e) => {
          e.classList.toggle("nav-li-selected", false);
        });
        navElements[entry.target.id].classList.toggle("nav-li-selected", true);
      }
    });
  }, options);

  sections.forEach((section) => {
    observer.observe(section);
  });
});
