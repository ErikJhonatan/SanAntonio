const btnBeverages = document.querySelector('.btn-beverages');
const btnBeveragesClose = document.querySelector('.beverages__close');
function toggleBeverages() {
    const beverages = document.querySelector('.beverages');
    beverages.classList.toggle('beverages_opened');
    window.document.title = 'Bebidas | San Antonio';
}
    btnBeverages.addEventListener('click', toggleBeverages);
    btnBeveragesClose.addEventListener('click', toggleBeverages);
    