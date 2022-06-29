const btnBrasaOpen = document.querySelector(".btn-brasa");
const btnBrasaClose = document.querySelector(".brasa__close");
function toggleBrasa() {
    const brasa = document.querySelector(".brasa");
    brasa.classList.toggle("brasa_opened");
    window.document.title = 'Pollos a la brasa | San Antonio';
}
    btnBrasaOpen.addEventListener("click", toggleBrasa);
    btnBrasaClose.addEventListener("click", toggleBrasa);