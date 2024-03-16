import "../src/styles.scss";

import { createHeader } from "./modules/header";
import { Pizza } from "./modules/pizza";
import { Cart } from "./modules/cart";
import { Pasta } from "./modules/pasta";
import { Salad } from "./modules/salad";
import { Drink } from "./modules/drink";

export const cart = new Cart();
function init() {
  const pizza_add_to_cart = document.querySelector(".pizza_add_to_cart");
  const pasta_add_to_cart = document.querySelector(".pasta_add_to_cart");
  const salad_add_to_cart = document.querySelector(".salad_add_to_cart");
  createHeader();

  pizza_add_to_cart?.addEventListener("click", () => {
    console.log("clicked");
    const pizza = new Pizza();

    cart.addToCart(pizza);
    pizza.renderUI();
  });

  pasta_add_to_cart?.addEventListener("click", () => {
    console.log("clicked");
    const pasta = new Pasta();
    cart.addToCart(pasta);

    pasta.renderUI();
  });

  salad_add_to_cart?.addEventListener("click", () => {
    console.log("clicked");
    const salad = new Salad();
    cart.addToCart(salad);
    salad.renderUI();
  });

  const drinks = new Drink();
  cart.addToCart(drinks);
  drinks.renderUI();

  document.querySelector(".add_ingredient")?.addEventListener("click", (e) => {
    console.log({ e });
  });
  document
    .querySelector(".get_cart_elements")
    ?.addEventListener("click", (e) => {
      cart.renderCart();
    });
  // createFooter();
  console.log("footer created");
}

init();
