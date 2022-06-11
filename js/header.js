const menu = document.querySelector(".header-menu");
const openMenuBtn = document.querySelector(".header-menu__open");
const closeMenuBtn = document.querySelector(".header-menu__close");

function toggleMenu() {
  menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

//header sticky
const headerContainer = document.querySelector(".header-container");

  window.addEventListener("scroll", function() {
    if (window.pageYOffset > 0) {
      headerContainer.classList.add("header-container_scrolled");
    } else {
      headerContainer.classList.remove("header-container_scrolled");
    }
  });
