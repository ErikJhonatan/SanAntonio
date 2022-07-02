const btnFastFoodOpen = document.querySelector('.btn-fast-food');
const btnFastFoodClose = document.querySelector('.fast-food__close');
function toggleFastFood() {
    const fastFood = document.querySelector('.fast-food');
    fastFood.classList.toggle('fast-food_opened');
    window.document.title = 'Comidas rapidas | San Antonio';
    const body = document.querySelector("body");
    body.style.overflow = "hidden";
}
    btnFastFoodOpen.addEventListener('click', toggleFastFood);
    btnFastFoodClose.addEventListener('click', toggleFastFood);
    btnFastFoodClose.addEventListener('click', function() {
        const body = document.querySelector("body");
        body.style.overflow="visible";
    });
