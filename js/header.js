const menu = document.querySelector(".header-menu");
const openMenuBtn = document.querySelector(".header-menu__open");
const closeMenuBtn = document.querySelector(".header-menu__close");

function toggleMenu() {
  menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);