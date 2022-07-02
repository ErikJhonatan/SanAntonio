const openCart = document.querySelector('.header-shopcar');
const closeCart = document.querySelector('.shoppingCart_close');
function toggleCart(){
    const cart = document.querySelector('.shoppingCart');
    cart.classList.toggle('cart_opened');
    window.document.title = 'Carrito de compras | San Antonio';
    const body = document.querySelector("body");
    body.style.overflow = "hidden";
}
    openCart.addEventListener('click', toggleCart);
    closeCart.addEventListener('click', toggleCart);
    closeCart.addEventListener('click', function() {
        const body = document.querySelector("body");
        body.style.overflow="visible";
    });