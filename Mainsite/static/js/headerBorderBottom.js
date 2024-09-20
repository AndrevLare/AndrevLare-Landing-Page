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
