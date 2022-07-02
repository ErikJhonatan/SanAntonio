
// Main Parrilla
const btnParrillaOpen = document.querySelector(".btn-parrilla");
const btnParrillaClose = document.querySelector(".parrilla__close");
function toggleParrilla() {
  const parrilla = document.querySelector(".parrilla");
  parrilla.classList.toggle("parrilla_opened");
  window.document.title = 'Carnes a la parrilla | San Antonio';
  const body = document.querySelector("body");
  body.style.overflow = "hidden";
}
    btnParrillaOpen.addEventListener("click", toggleParrilla);
    btnParrillaClose.addEventListener("click", toggleParrilla);
    btnParrillaClose.addEventListener("click", function() {
      const body = document.querySelector("body");
      body.style.overflow="visible";
    });