
// Main Parrilla
const btnParrillaOpen = document.querySelector(".btn-parrilla");
const btnParrillaClose = document.querySelector(".parrilla__close");
function toggleParrilla() {
  const parrilla = document.querySelector(".parrilla");
  parrilla.classList.toggle("parrilla_opened");
  window.document.title = 'Carnes a la parrilla | San Antonio';
}
    btnParrillaOpen.addEventListener("click", toggleParrilla);
    btnParrillaClose.addEventListener("click", toggleParrilla);
