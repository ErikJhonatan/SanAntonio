import { Food } from "./Food.js";
import { ShoppingCart } from "./shoppingCart.js";

const addToShoppingCartButtons = document.querySelectorAll(".btn-addProduct-parrilla");
addToShoppingCartButtons.forEach(button => {
    button.addEventListener("click",
    addToCartClicked);
});
const shoppingCart = new ShoppingCart();
const shoppingCartContainer = document.querySelector('.shoppingCart-container');
function addToCartClicked(event){
    const button = event.target;
    const item = button.closest('.parrilla-item__details');
    const itemName = item.querySelector('.parrilla-item__name').textContent;
    const itemDescription = item.querySelector('.parrilla-item__description').textContent;
    const itemPrice = item.querySelector('.parrilla-item__price').textContent;
    const itemImg = item.querySelector('.parrilla-item__img img').src;
    const divShoppingCartEmpty = document.querySelector('.shoppingCart-container__empty');
    if(divShoppingCartEmpty){
    divShoppingCartEmpty.remove();
    }
    const product = new Food(itemName, 1, itemPrice, itemDescription);
    addItemToShoppingCart(
        product.getNameFood(),
        product.getAmount(),
        product.getDescription(),
        product.getPrice(),
        itemImg
    );
    swal({
        title: "Agregado con exito!",
        text: "Para continuar comprando, presiona Aceptar",
        icon: "success",
        button: "Aceptar",
      });
}
function addItemToShoppingCart(name, amount, description, price, img){
 const divItem = document.createElement('div');
 divItem.classList.add('shoppingCart__item');
 const shoppingCartTags = `
 <div class="cart-item__img">
                <img src="${img}" alt="">
            </div>
            <div class="cart-item__description">
                <h3>${name}</h3>
                <p> Precio: ${price}</p>
                <p> ${description}</p>
                <div class="cart-item__count">
                    <h3>Cantidad:</h3>
                    <div class="cart-item__count-container">
                        <div class="cart-item__count-minus">
                            <img src="./icons/minus.png" alt="">
                        </div>
                        <div class="cart-item__count-number">
                            <p id="count-cart">${amount}</p>
                        </div>
                        <div class="cart-item__count-plus">
                            <img src="./icons/plus.png" alt="">
                        </div>
                    </div>
                </div>`
    divItem.innerHTML = shoppingCartTags;
    shoppingCartContainer.append(divItem);
}
