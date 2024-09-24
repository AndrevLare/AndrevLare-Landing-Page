const consultMedia = () => {
  const mediaQuery = window.matchMedia(
    "(min-width: 1000px) and (orientation: landscape)"
  );
  return mediaQuery.matches;
};
