import "../src/styles.scss";

// Zusätzliche Module importiert.

import { createHeader } from "./modules/header";
import { Pizza } from "./modules/pizza";
import { Cart } from "./modules/cart";
import { Pasta } from "./modules/pasta";
import { Salad } from "./modules/salad";
import { Drink } from "./modules/drink";


// Instanz des Warenkorbs wird exportiert.
export const cart = new Cart();
function init() {
    // Event-Listener für Add-to-Cart-Buttons wurden hinzugefügt.
  const pizza_add_to_cart = document.querySelector(".pizza_add_to_cart");
  const pasta_add_to_cart = document.querySelector(".pasta_add_to_cart");
  const salad_add_to_cart = document.querySelector(".salad_add_to_cart");

  createHeader();

    // Jeder Klick-Event erstellt eine neue Instanz des entsprechenden Lebensmittels und fügt sie dem Warenkorb hinzu.
  pizza_add_to_cart?.addEventListener("click", () => {
    console.log("clicked");
    const pizza = new Pizza();
    cart.addToCart(pizza);
    pizza.renderUI(); // Die UI des jeweiligen Lebensmittels wird gerendert.
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

    // Im Gegensatz zum alten Code wird hier ein Getränk sofort dem Warenkorb hinzugefügt und gerendert.
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
