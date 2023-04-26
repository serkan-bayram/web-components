const navShow = () => {
  const burgerMenu = document.querySelector(".burger-icon");
  const nav = document.querySelector(".responsive-container");

  burgerMenu.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });
};

navShow();
