import {Food} from './Food.js';
import {ShoppingCart} from './shoppingCart.js';

const shoppingCart = new ShoppingCart();
const shoppingCartContainer = document.querySelector('.shoppingCart-container');
const categories = ['parrilla', 'brasa', 'salad', 'fast-food', 'soup', 'beverages'];
for (const category of categories) {
  for (const button of document.querySelectorAll('.btn-addProduct-' + category)) {
    button.addEventListener('click', () => addFromCard(button, category));
  }
}
function addFromCard(button, category) {
  const card = button.closest('.' + category + '-item__details');
  if (!card || !shoppingCartContainer) return;
  const get = suffix => card.querySelector('.' + category + '-item__' + suffix);
  const name = get('name')?.textContent;
  const description = get('description')?.textContent || '';
  const price = Number(get('price')?.textContent.replace('S/. ', '').trim());
  const image = get('img')?.querySelector('img')?.src;
  if (!name || !Number.isFinite(price) || price < 0 || !image) return;
  const product = new Food(name, 1, price, description);
  if (!shoppingCart.addProductArray(product)) {
    swal({title: 'Error!', text: 'El producto ya se encuentra en el carrito', icon: 'error', button: 'Aceptar'});
    return;
  }
  shoppingCartContainer.querySelector('.shoppingCart-container__empty')?.remove();
  addItemToShoppingCart(name, product.getAmount(), description, price, image);
  swal({title: 'Agregado con exito!', text: 'Para continuar comprando, presiona Aceptar', icon: 'success', button: 'Aceptar'});
}
const controlSelector = '.item_delete, .cart-item__count-plus, .cart-item__count-minus';
shoppingCartContainer?.addEventListener('click', event => {
  const control = event.target.closest(controlSelector);
  if (!control || !shoppingCartContainer.contains(control)) return;
  if (control.matches('.item_delete')) deleteClicked(event);
  else changeQuantity(event, control.matches('.cart-item__count-plus') ? 1 : -1);
});
shoppingCartContainer?.addEventListener('keydown', event => {
  const control = event.target.closest(controlSelector);
  if (control && (event.key === 'Enter' || event.key === ' ')) { event.preventDefault(); control.click(); }
});
function cartEntry(event) {
  const row = event.target.closest('.shoppingCart__item');
  if (!row) return null;
  const index = shoppingCart.findIndexProducts(row.dataset.name, Number(row.dataset.price));
  return index < 0 ? null : {row, index, product: shoppingCart.getProducts()[index]};
}
function deleteClicked(event) {
  const entry = cartEntry(event);
  if (!entry || !shoppingCart.deleteByIndex(entry.index)) return;
  entry.row.remove();
  if (shoppingCart.totalElementos() === 0 && !shoppingCartContainer.querySelector('.shoppingCart-container__empty')) {
    const empty = document.createElement('div');
    empty.classList.add('shoppingCart-container__empty');
    const title = document.createElement('h2');
    title.textContent = 'No hay productos en el carrito';
    empty.append(title);
    shoppingCartContainer.append(empty);
  }
  updateShoppingCartTotal();
}
function changeQuantity(event, delta) {
  const entry = cartEntry(event);
  if (!entry) return;
  const amount = Math.max(1, entry.product.getAmount() + delta);
  if (!Number.isSafeInteger(amount)) return;
  entry.product.setAmount(amount);
  entry.row.querySelector('.cart-item__count-number p').textContent = amount;
  updateShoppingCartTotal();
}
function addItemToShoppingCart(name, amount, description, price, img) {
  const divItem = document.createElement("div");
  divItem.classList.add("shoppingCart__item");
  const shoppingCartTags = `
 <div class="cart-item__img">
                <img src="${img}" alt="">
            </div>
            <div class="cart-item__description">
                <h3 class="cart-item__name" id="name">${name}</h3>
                <p id="price" class="cart-item__price"> Precio: S/. ${price}</p>
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
                </div>
                </div>
                <div class="item_delete"></div>
                `;
  divItem.innerHTML = shoppingCartTags;
  divItem.dataset.name = name;
  divItem.dataset.price = String(price);
  for (const [selector, label] of [['.cart-item__count-plus', 'Aumentar cantidad'], ['.cart-item__count-minus', 'Disminuir cantidad'], ['.item_delete', 'Eliminar producto']]) {
    const control = divItem.querySelector(selector);
    control.tabIndex = 0;
    control.setAttribute('role', 'button');
    control.setAttribute('aria-label', label);
  }
  shoppingCartContainer.append(divItem);
  updateShoppingCartTotal();
}
function updateShoppingCartTotal() {
  const values = {
    shoppingtotalPay: 'S/. ' + shoppingCart.priceTotal().toFixed(2),
    totalProducts: shoppingCart.totalProducts(),
    totalProductsHeader: shoppingCart.totalProducts(),
  };
  for (const [id, value] of Object.entries(values)) {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
  }
}
