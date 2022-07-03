import { Food } from "./Food.js";
import { ShoppingCart } from "./shoppingCart.js";

const addToShoppingCartButtonsParrilla = document.querySelectorAll(
  ".btn-addProduct-parrilla"
);
addToShoppingCartButtonsParrilla.forEach((button) => {
  button.addEventListener("click", addToCartClickedParrilla);
});
const shoppingCart = new ShoppingCart();
const shoppingCartContainer = document.querySelector(".shoppingCart-container");
function addToCartClickedParrilla(event) {
  const button = event.target;
  const item = button.closest(".parrilla-item__details");
  const itemName = item.querySelector(".parrilla-item__name").textContent;
  const itemDescription = item.querySelector(
    ".parrilla-item__description"
  ).textContent;
  const itemPrice = item.querySelector(".parrilla-item__price").textContent;
  const itemPriceValue = parseFloat(itemPrice.replace("S/. ", ""));
  const itemImg = item.querySelector(".parrilla-item__img img").src;
  const divShoppingCartEmpty = document.querySelector(
    ".shoppingCart-container__empty"
  );
  if (divShoppingCartEmpty) {
    divShoppingCartEmpty.remove();
  }
  const product = new Food(itemName, 1, itemPriceValue, itemDescription);
  if (shoppingCart.addProductArray(product)) {
    swal({
      title: "Agregado con exito!",
      text: "Para continuar comprando, presiona Aceptar",
      icon: "success",
      button: "Aceptar",
    });
    addItemToShoppingCart(
      product.getNameFood(),
      product.getAmount(),
      product.getDescription(),
      product.calculatePrice(),
      itemImg
    );
  } else {
    swal({
      title: "Error!",
      text: "El producto ya se encuentra en el carrito",
      icon: "error",
      button: "Aceptar",
    });
  }

  const btnPlus = document.querySelectorAll(".cart-item__count-plus");
  btnPlus.forEach((btn) => {
    btn.addEventListener("click", plusClicked);
  });
  const btnMinus = document.querySelectorAll(".cart-item__count-minus");
  btnMinus.forEach((btn) => {
    btn.addEventListener("click", minusClicked);
  });
  const btnDelete = document.querySelectorAll(".item_delete");
  btnDelete.forEach((btn) => {
    btn.addEventListener("click", deleteClicked);
  });
  let priceTotalProducts = shoppingCart.priceTotal();
  priceTotal(priceTotalProducts);
  let totalProduct = shoppingCart.totalProducts();
  totalProducts(totalProduct);
}
const addToShoppingCartButtonsBrasa = document.querySelectorAll(
  ".btn-addProduct-brasa"
);
addToShoppingCartButtonsBrasa.forEach((button) => {
  button.addEventListener("click", addToCartClickedBrasa);
});
function addToCartClickedBrasa(event) {
  const button = event.target;
  const item = button.closest(".brasa-item__details");
  const itemName = item.querySelector(".brasa-item__name").textContent;
  const itemDescription = item.querySelector(
    ".brasa-item__description"
  ).textContent;
  const itemPrice = item.querySelector(".brasa-item__price").textContent;
  const itemPriceValue = parseFloat(itemPrice.replace("S/. ", ""));
  const itemImg = item.querySelector(".brasa-item__img img").src;
  const divShoppingCartEmpty = document.querySelector(
    ".shoppingCart-container__empty"
  );
  if (divShoppingCartEmpty) {
    divShoppingCartEmpty.remove();
  }
  const product = new Food(itemName, 1, itemPriceValue, itemDescription);
  if (shoppingCart.addProductArray(product)) {
    swal({
      title: "Agregado con exito!",
      text: "Para continuar comprando, presiona Aceptar",
      icon: "success",
      button: "Aceptar",
    });
    addItemToShoppingCart(
      product.getNameFood(),
      product.getAmount(),
      product.getDescription(),
      product.calculatePrice(),
      itemImg
    );
  } else {
    swal({
      title: "Error!",
      text: "El producto ya se encuentra en el carrito",
      icon: "error",
      button: "Aceptar",
    });
  }
  const btnPlus = document.querySelectorAll(".cart-item__count-plus");
  btnPlus.forEach((btn) => {
    btn.addEventListener("click", plusClicked);
  });
  const btnMinus = document.querySelectorAll(".cart-item__count-minus");
  btnMinus.forEach((btn) => {
    btn.addEventListener("click", minusClicked);
  });
  const btnDelete = document.querySelectorAll(".item_delete");
  btnDelete.forEach((btn) => {
    btn.addEventListener("click", deleteClicked);
  });
  let priceTotalProducts = shoppingCart.priceTotal();
  priceTotal(priceTotalProducts);
  let totalProduct = shoppingCart.totalProducts();
  totalProducts(totalProduct);
}
const addToShoppingCartButtonsSalad = document.querySelectorAll(
  ".btn-addProduct-salad"
);
addToShoppingCartButtonsSalad.forEach((button) => {
  button.addEventListener("click", addToCartClickedSalad);
});
function addToCartClickedSalad(event) {
  const button = event.target;
  const item = button.closest(".salad-item__details");
  const itemName = item.querySelector(".salad-item__name").textContent;
  const itemDescription = item.querySelector(
    ".salad-item__description"
  ).textContent;
  const itemPrice = item.querySelector(".salad-item__price").textContent;
  const itemPriceValue = parseFloat(itemPrice.replace("S/. ", ""));
  const itemImg = item.querySelector(".salad-item__img img").src;
  const divShoppingCartEmpty = document.querySelector(
    ".shoppingCart-container__empty"
  );
  if (divShoppingCartEmpty) {
    divShoppingCartEmpty.remove();
  }
  const product = new Food(itemName, 1, itemPriceValue, itemDescription);
  if (shoppingCart.addProductArray(product)) {
    swal({
      title: "Agregado con exito!",
      text: "Para continuar comprando, presiona Aceptar",
      icon: "success",
      button: "Aceptar",
    });
    addItemToShoppingCart(
      product.getNameFood(),
      product.getAmount(),
      product.getDescription(),
      product.calculatePrice(),
      itemImg
    );
  } else {
    swal({
      title: "Error!",
      text: "El producto ya se encuentra en el carrito",
      icon: "error",
      button: "Aceptar",
    });
  }
  const btnPlus = document.querySelectorAll(".cart-item__count-plus");
  btnPlus.forEach((btn) => {
    btn.addEventListener("click", plusClicked);
  });
  const btnMinus = document.querySelectorAll(".cart-item__count-minus");
  btnMinus.forEach((btn) => {
    btn.addEventListener("click", minusClicked);
  });
  const btnDelete = document.querySelectorAll(".item_delete");
  btnDelete.forEach((btn) => {
    btn.addEventListener("click", deleteClicked);
  });
  let priceTotalProducts = shoppingCart.priceTotal();
  priceTotal(priceTotalProducts);
  let totalProduct = shoppingCart.totalProducts();
  totalProducts(totalProduct);
}
const addToShoppingCartButtonsFastFood = document.querySelectorAll(
  ".btn-addProduct-fast-food"
);
addToShoppingCartButtonsFastFood.forEach((button) => {
  button.addEventListener("click", addToCartClickedFastFood);
});
function addToCartClickedFastFood(event) {
  const button = event.target;
  const item = button.closest(".fast-food-item__details");
  const itemName = item.querySelector(".fast-food-item__name").textContent;
  const itemDescription = item.querySelector(
    ".fast-food-item__description"
  ).textContent;
  const itemPrice = item.querySelector(".fast-food-item__price").textContent;
  const itemPriceValue = parseFloat(itemPrice.replace("S/. ", ""));
  const itemImg = item.querySelector(".fast-food-item__img img").src;
  const divShoppingCartEmpty = document.querySelector(
    ".shoppingCart-container__empty"
  );
  if (divShoppingCartEmpty) {
    divShoppingCartEmpty.remove();
  }
  const product = new Food(itemName, 1, itemPriceValue, itemDescription);
  if (shoppingCart.addProductArray(product)) {
    swal({
      title: "Agregado con exito!",
      text: "Para continuar comprando, presiona Aceptar",
      icon: "success",
      button: "Aceptar",
    });
    addItemToShoppingCart(
      product.getNameFood(),
      product.getAmount(),
      product.getDescription(),
      product.calculatePrice(),
      itemImg
    );
  } else {
    swal({
      title: "Error!",
      text: "El producto ya se encuentra en el carrito",
      icon: "error",
      button: "Aceptar",
    });
  }
  const btnPlus = document.querySelectorAll(".cart-item__count-plus");
  btnPlus.forEach((btn) => {
    btn.addEventListener("click", plusClicked);
  });
  const btnMinus = document.querySelectorAll(".cart-item__count-minus");
  btnMinus.forEach((btn) => {
    btn.addEventListener("click", minusClicked);
  });
  const btnDelete = document.querySelectorAll(".item_delete");
  btnDelete.forEach((btn) => {
    btn.addEventListener("click", deleteClicked);
  });
  let priceTotalProducts = shoppingCart.priceTotal();
  priceTotal(priceTotalProducts);
  let totalProduct = shoppingCart.totalProducts();
  totalProducts(totalProduct);
}
const addToShoppingCartButtonsSoup = document.querySelectorAll(
  ".btn-addProduct-soup"
);
addToShoppingCartButtonsSoup.forEach((button) => {
  button.addEventListener("click", addToCartClickedSoup);
});
function addToCartClickedSoup(event) {
  const button = event.target;
  const item = button.closest(".soup-item__details");
  const itemName = item.querySelector(".soup-item__name").textContent;
  const itemDescription = item.querySelector(
    ".soup-item__description"
  ).textContent;
  const itemPrice = item.querySelector(".soup-item__price").textContent;
  const itemPriceValue = parseFloat(itemPrice.replace("S/. ", ""));
  const itemImg = item.querySelector(".soup-item__img img").src;
  const divShoppingCartEmpty = document.querySelector(
    ".shoppingCart-container__empty"
  );
  if (divShoppingCartEmpty) {
    divShoppingCartEmpty.remove();
  }
  const product = new Food(itemName, 1, itemPriceValue, itemDescription);
  if (shoppingCart.addProductArray(product)) {
    swal({
      title: "Agregado con exito!",
      text: "Para continuar comprando, presiona Aceptar",
      icon: "success",
      button: "Aceptar",
    });
    addItemToShoppingCart(
      product.getNameFood(),
      product.getAmount(),
      product.getDescription(),
      product.calculatePrice(),
      itemImg
    );
  } else {
    swal({
      title: "Error!",
      text: "El producto ya se encuentra en el carrito",
      icon: "error",
      button: "Aceptar",
    });
  }
  const btnPlus = document.querySelectorAll(".cart-item__count-plus");
  btnPlus.forEach((btn) => {
    btn.addEventListener("click", plusClicked);
  });
  const btnMinus = document.querySelectorAll(".cart-item__count-minus");
  btnMinus.forEach((btn) => {
    btn.addEventListener("click", minusClicked);
  });
  const btnDelete = document.querySelectorAll(".item_delete");
  btnDelete.forEach((btn) => {
    btn.addEventListener("click", deleteClicked);
  });
  let priceTotalProducts = shoppingCart.priceTotal();
  priceTotal(priceTotalProducts);
  let totalProduct = shoppingCart.totalProducts();
  totalProducts(totalProduct);
}
const addToShoppingCartButtonsBeverages = document.querySelectorAll(
  ".btn-addProduct-beverages"
);
addToShoppingCartButtonsBeverages.forEach((button) => {
  button.addEventListener("click", addToCartClickedBeverages);
});
function addToCartClickedBeverages(event) {
  const button = event.target;
  const item = button.closest(".beverages-item__details");
  const itemName = item.querySelector(".beverages-item__name").textContent;
  const itemDescription = item.querySelector(
    ".beverages-item__description"
  ).textContent;
  const itemPrice = item.querySelector(".beverages-item__price").textContent;
  const itemPriceValue = parseFloat(itemPrice.replace("S/. ", ""));
  const itemImg = item.querySelector(".beverages-item__img img").src;
  const divShoppingCartEmpty = document.querySelector(
    ".shoppingCart-container__empty"
  );
  if (divShoppingCartEmpty) {
    divShoppingCartEmpty.remove();
  }
  const product = new Food(itemName, 1, itemPriceValue, itemDescription);
  if (shoppingCart.addProductArray(product)) {
    swal({
      title: "Agregado con exito!",
      text: "Para continuar comprando, presiona Aceptar",
      icon: "success",
      button: "Aceptar",
    });
    addItemToShoppingCart(
      product.getNameFood(),
      product.getAmount(),
      product.getDescription(),
      product.calculatePrice(),
      itemImg
    );
  } else {
    swal({
      title: "Error!",
      text: "El producto ya se encuentra en el carrito",
      icon: "error",
      button: "Aceptar",
    });
  }
  const btnPlus = document.querySelectorAll(".cart-item__count-plus");
  btnPlus.forEach((btn) => {
    btn.addEventListener("click", plusClicked);
  });
  const btnMinus = document.querySelectorAll(".cart-item__count-minus");
  btnMinus.forEach((btn) => {
    btn.addEventListener("click", minusClicked);
  });
  const btnDelete = document.querySelectorAll(".item_delete");
  btnDelete.forEach((btn) => {
    btn.addEventListener("click", deleteClicked);
  });
  let priceTotalProducts = shoppingCart.priceTotal();
  priceTotal(priceTotalProducts);
  let totalProduct = shoppingCart.totalProducts();
  totalProducts(totalProduct);
}

function deleteClicked(event) {
  const button = event.target;
  const item = button.closest(".shoppingCart__item");
  const itemName = item.querySelector(
    ".cart-item__description #name"
  ).textContent;
  const itemPrice = item.querySelector(
    ".cart-item__description #price"
  ).textContent;
  const itemPriceValue = parseFloat(itemPrice.replace("S/. ", ""));
  shoppingCart.removeProduct(itemName, itemPriceValue);
  item.remove();
  const divItem = document.createElement("div");
  divItem.classList.add("shoppingCart-container__empty");
  if (shoppingCart.getProducts().length === 0) {
    divItem.innerHTML = `<h2>No hay productos en el carrito</h2>`;
    shoppingCartContainer.appendChild(divItem);
  }
  const priceTotalProducts = shoppingCart.priceTotal();
  priceTotal(priceTotalProducts);
  let totalProduct = shoppingCart.totalProducts();
  totalProducts(totalProduct);
}
function plusClicked(event) {
  const button = event.target;
  const item = button.closest(".cart-item__count-container");
  const nameItem = button.closest(".cart-item__description");
  //Buscar el index de un objeto por su nombre
  const index = shoppingCart
    .getProducts()
    .findIndex(
      (product) =>
        product.getNameFood() ===
        nameItem.querySelector(".cart-item__description h3").textContent
    );

  const itemAmount = item.querySelector(
    ".cart-item__count-number p"
  ).textContent;
  const itemAmountValue = parseInt(itemAmount);
  const amountItem = itemAmountValue + 1;
  item.querySelector(".cart-item__count-number p").textContent = amountItem;
  shoppingCart.getProducts()[index].setAmount(amountItem);
  shoppingCart.getProducts()[index].calculatePrice();
  const priceTotalProducts = shoppingCart.priceTotal();
  priceTotal(priceTotalProducts);
  let totalProduct = shoppingCart.totalProducts();
  totalProducts(totalProduct);
}
function minusClicked(event) {
  const button = event.target;
  const item = button.closest(".cart-item__count-container");
  const itemAmount = item.querySelector(
    ".cart-item__count-number p"
  ).textContent;
  const nameItem = button.closest(".cart-item__description");
  //Buscar el index de un objeto por su nombre
  const index = shoppingCart
    .getProducts()
    .findIndex(
      (product) =>
        product.getNameFood() ===
        nameItem.querySelector(".cart-item__description h3").textContent
    );
  const itemAmountValue = parseInt(itemAmount);
  let amountItem = 1;
  if (itemAmountValue > 1) {
    amountItem = itemAmountValue - 1;
  }
  item.querySelector(".cart-item__count-number p").textContent = amountItem;
  shoppingCart.getProducts()[index].setAmount(amountItem);
  shoppingCart.getProducts()[index].calculatePrice();
  const priceTotalProducts = shoppingCart.priceTotal();
  priceTotal(priceTotalProducts);
  let totalProduct = shoppingCart.totalProducts();
  totalProducts(totalProduct);
}
function priceTotal(priceTotalProducts) {
  const priceTotal = document.querySelector("#shoppingtotalPay");
  priceTotal.textContent = `S/. ${priceTotalProducts}`;
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
                <p id="price"> Precio: S/. ${price}</p>
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
                </div>
                </div>
                <div class="item_delete"></div>
                `;
  divItem.innerHTML = shoppingCartTags;
  shoppingCartContainer.append(divItem);
}
function totalProducts(totalProduct) {
  const totalProducts = document.querySelector("#totalProducts");
  totalProducts.textContent = `${totalProduct}`;
  const totalProductsHeader = document.querySelector("#totalProductsHeader");
  totalProductsHeader.textContent = `${totalProduct}`;
}
