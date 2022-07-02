const btnBrasaOpen = document.querySelector(".btn-brasa");
const btnBrasaClose = document.querySelector(".brasa__close");
function toggleBrasa() {
    const brasa = document.querySelector(".brasa");
    brasa.classList.toggle("brasa_opened");
    window.document.title = 'Pollos a la brasa | San Antonio';
    const body = document.querySelector("body");
    body.style.overflow = "hidden";
}
    btnBrasaOpen.addEventListener("click", toggleBrasa);
    btnBrasaClose.addEventListener("click", toggleBrasa);
    btnBrasaClose.addEventListener("click", function() {
        const body = document.querySelector("body");
        body.style.overflow="visible";
    });