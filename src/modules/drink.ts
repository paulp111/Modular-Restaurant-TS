// Importiert die UUID-Bibliothek für eindeutige Identifizierungen und integriert die Drink-Klasse in das Gesamtsystem.

import { v4 as uuidv4 } from "uuid";
// Importiert das cart-Objekt für eine direkte Integration in das Warenkorbsystem.

import { cart } from "../index";
import { Cart } from "./cart";

// Definiert eine Liste verfügbarer Getränke mit ID, Bezeichnung und Preis.

const drinks = [
  { id: "beer_.5l", label: "Beer, 0.5l", price: 3 },
  { id: "beer_.33l", label: "Beer, 0.33l", price: 2.7 },
  { id: "coca_cola_.5l", label: "Coca Cola, 0.5l", price: 2.2 },
  { id: "coca_cola_.33l", label: "Coca Cola, 0.33l", price: 1.8 },
  { id: "sprite_.5l", label: "Sprite, 0.5l", price: 2.2 },
  { id: "sprite_.33l", label: "Sprite, 0.33l", price: 1.8 },
  { id: "apple_juice_.5l", label: "Apple Juice, 0.5l", price: 1.9 },
  { id: "apple_juice_.33l", label: "Apple Juice, 0.33l", price: 1.6 },
  { id: "mineral_water_.5l", label: "Mineral Water, 0.5l", price: 1.7 },
];

export class Drink extends Cart {
  order: "DRINKS";
  id: string;
  drinks: Record<string, number>;
  price: number;
  constructor() {
    super();
    this.order = "DRINKS";
    this.id = uuidv4();
    this.drinks = {};
    this.price = 0;
  }
  renderUI() {
    const listContainer = document.createElement("div");
    listContainer.classList.add("container_wrapper");
    listContainer.id = this.id;

    const orderInfo = document.createElement("div");
    orderInfo.classList.add("orderInfo");
    listContainer.append(orderInfo);

    const primaryContainer = document.createElement("div");
    primaryContainer.classList.add("primary__container");

    const drinkContainer = document.createElement("div");
    const addOnTitle = document.createElement("h2");
    addOnTitle.innerHTML = "Add Ons";
    drinkContainer.append(addOnTitle);
    drinks.forEach((drink) => {
      const drink_item = document.createElement("div");
      drink_item.classList.add("ingredient_container");
      drink_item.innerHTML = `
        <p>${drink.label}</p>
        <p>${drink.price}</p>
        <button data-id="${this.id}" data-value="${drink.id}" data-price="${drink.price}" class="drink_content add_ingredient">+</button>
        <button data-id="${this.id}" data-value="${drink.id}" data-price="${drink.price}" class="drink_content decrease_ingredient">-</button>
        `;
      // Add event listener using DOM methods

      drinkContainer.append(drink_item);
    });
    primaryContainer.append(drinkContainer);
    // Attach event listeners to the buttons
    primaryContainer
      .querySelectorAll(".drink_content.add_ingredient")
      .forEach((button) => {
        button.addEventListener("click", this.add_ingredient.bind(this));
      });
    primaryContainer
      .querySelectorAll(".drink_content.decrease_ingredient")
      .forEach((button) => {
        button.addEventListener("click", this.decrease_ingredient.bind(this));
      });

    listContainer.append(primaryContainer);

    document.querySelector(".drink_content")?.append(listContainer);
  }
  add_ingredient(event: any) {
    const id = event.target.dataset.id;
    const value = event.target.dataset.value;
    const price = parseFloat(event.target.dataset.price);
    console.log(price, typeof price);

    this.drinks = {
      ...this.drinks,
      [value]: this.drinks[value] ? this.drinks[value] + 1 : 1,
    };
    this.price = this.price + price;

    console.log(this.drinks, this.price);

    this.renderInfo();
  }
  decrease_ingredient(event: any) {
    const id = event.target.dataset.id;
    const value = event.target.dataset.value;
    const price = parseFloat(event.target.dataset.price);
    console.log(price, typeof price);
    if (!this.drinks[value]) return;
    console.log("Data Attributes:", { id, value });

    const isZero = this.drinks[value] - 1;
    console.log({ isZero });
    if (isZero === 0) {
      console.log("HELLO fromZERO");
      delete this.drinks[value];
      this.renderInfo();
      return;
    }

    this.drinks = {
      ...this.drinks,
      [value]: this.drinks[value] - 1,
    };
    this.price = this.price - price;

    console.log(this.drinks, this.price);
    this.renderInfo();
  }

  renderInfo() {
    const renderInfo = document
      .getElementById(this.id)
      ?.querySelector(".orderInfo")!;
    renderInfo.innerHTML = "";

    // // Create an array of <h2> elements using map
    const h5Elements = Object.entries(this.drinks).map((str: any) => {
      // Create <h2> element
      const h5Element = document.createElement("h5");

      // Set text content of <h2> element to the string
      h5Element.textContent = str[0] + "---" + str[1];

      // Return the <h2> element
      return h5Element;
    });

    h5Elements.forEach((itm: any) => {
      renderInfo?.appendChild(itm);
    });

    const priceElement = document.createElement("h5");
    priceElement.textContent = "Price" + "---" + this.price;
    renderInfo?.appendChild(priceElement);
    console.log("RENDER INFO", this, renderInfo);
    cart.renderCart();
  }

  cartUI() {
    return {
      id: this.id,
      price: this.price,
      info: JSON.stringify(this.drinks),
    };
  }
}
