const btnSaladOpen = document.querySelector('.btn-salad');
const btnSaladClose = document.querySelector('.salad__close');
 function toggleSalad(){
    const salad = document.querySelector('.salad');
    salad.classList.toggle('salad_opened');
    window.document.title = 'Carta de ensaladas | San Antonio';
    const body = document.querySelector("body");
    body.style.overflow="hidden";
 }
    btnSaladOpen.addEventListener('click', toggleSalad);
    btnSaladClose.addEventListener('click', toggleSalad);
    btnSaladClose.addEventListener('click', function() {
      const body = document.querySelector("body");
      body.style.overflow="visible";
    });
