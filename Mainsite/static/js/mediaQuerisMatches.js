const isTouchDevice = () => {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
};

const consultMedia = () => {
  const mediaQuery = window.matchMedia(
    "(min-width: 1000px) and (orientation: landscape)"
  );
  return mediaQuery.matches && !isTouchDevice();
};
