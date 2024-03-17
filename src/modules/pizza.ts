// In Code 2 wird eine robustere ID-Erstellungsmethode mit 'uuidv4' verwendet.

import { v4 as uuidv4 } from "uuid";
// Die Cart-Klasse wird importiert, was darauf hindeutet, dass 'Pizza' jetzt eng mit dem Einkaufswagen verbunden ist.

import { cart } from "../index";
import { Cart } from "./cart";

// Die Definition der Pizzabasis, Saucen und Add-ons wurde von Arrays von Strings zu Arrays von Objekten geändert,
// was eine verbesserte Handhabung ermöglicht.
const base = [
    // ... Pizzabasen als Objekte
  { id: "wheat", label: "Wheat" },
  { id: "whole_grain", label: "Whole Grain" },
];
const sauces = [
    // ... Saucen als Objekte
  { id: "tomato_sauce", label: "Tomato Sauce" },
  { id: "white_sauce", label: "White Sauce" },
];

const add_ons = [
    // ... Zusatzstoffe als Objekte
  { id: "onion", label: "Onion" },
  { id: "garlic", label: "Garlic" },
  { id: "bell_pepper", label: "Bell Pepper" },
  { id: "pepperoni", label: "Pepperoni" },
  { id: "corn", label: "Corn" },
  { id: "mushrooms", label: "Mushrooms" },
  { id: "zucchini", label: "Zucchini" },
  { id: "fried_egg", label: "Fried Egg" },
  { id: "spinach", label: "Spinach" },
  { id: "pineapple", label: "Pineapple" },
  { id: "ham", label: "Ham" },
  { id: "salami", label: "Salami" },
  { id: "bacon", label: "Bacon" },
  { id: "gouda_cheese", label: "Gouda Cheese" },
  { id: "mozzarella", label: "Mozzarella" },
  { id: "parmesan", label: "Parmesan" },
  { id: "blue_cheese", label: "Blue Cheese" },
  { id: "cheddar", label: "Cheddar" },
];
const ingredient_price = 1.5; // Festpreis für add-ons

// 'Pizza' erbt nun von 'Cart' statt von 'Food', was eine signifikante Änderung in der Klassenhierarchie darstellt.
export class Pizza extends Cart {
    // Die Klasse definiert jetzt eigene Attribute für die Bestellung.

  order: "PIZZA";
  id: string;
  base: string;
  add_ons: Record<string, number>;
  sauce: string;
  price: number;
  constructor() {
    super(); // Aufruf des Konstruktors der Superklasse 'Cart'.
    this.id = uuidv4(); // Verwendung von uuidv4 für die ID-Zuweisung.
    // Initialisierung der Eigenschaften mit Standardwerten.
    this.order = "PIZZA";
    this.base = "";
    this.add_ons = {};
    this.sauce = "";
    this.price = 9.7;
  }

   // Eine völlig neue Methode 'renderUI', die die Benutzeroberfläche erstellt,
  // deutet auf eine stärkere Trennung von UI-Logik und Geschäftslogik hin.
  renderUI() {
    const listContainer = document.createElement("div");
    listContainer.classList.add("container_wrapper");
    listContainer.id = this.id;

    const orderInfo = document.createElement("div");
    orderInfo.classList.add("orderInfo");
    listContainer.append(orderInfo);

    const deleteOrder = document.createElement("div");
    deleteOrder.classList.add("deleteOrder");
    deleteOrder.innerHTML = "X";
    deleteOrder?.addEventListener("click", (event) => {
      this.handleDelete(event, this.id);
    });

    listContainer.append(deleteOrder);

    const primaryContainer = document.createElement("div");
    primaryContainer.classList.add("primary__container");

    const baseContainer = document.createElement("div");
    const baseTitle = document.createElement("h2");
    baseTitle.innerHTML = "Base";
    baseContainer.append(baseTitle);
    // Create a select element
    var selectElement = document.createElement("select");
    selectElement.classList.add("base");

    // Create options dynamically and append them to the select element
    base.forEach(function (optionText) {
      var optionElement = document.createElement("option");
      optionElement.textContent = optionText.label;
      optionElement.value = optionText.id;
      selectElement.appendChild(optionElement);
    });
    // selectElement?.addEventListener("change", this.baseChange);
    selectElement?.addEventListener("change", (event) => {
      this.handleSelect(event, "base");
    });

    baseContainer.append(selectElement);
    primaryContainer.append(baseContainer);

    const addOnContainer = document.createElement("div");
    const addOnTitle = document.createElement("h2");
    addOnTitle.innerHTML = "Add Ons";
    addOnContainer.append(addOnTitle);
    add_ons.forEach((add_on) => {
      const add_on_item = document.createElement("div");
      add_on_item.classList.add("ingredient_container");
      add_on_item.innerHTML = `
        <p>${add_on.label}</p>
        <button data-id="${this.id}" data-value="${add_on.id}" class="pizza_content add_ingredient">+</button>
        <button data-id="${this.id}" data-value="${add_on.id}" class="pizza_content decrease_ingredient">-</button>
        `;
      // Add event listener using DOM methods

      addOnContainer.append(add_on_item);
    });
    primaryContainer.append(addOnContainer);
    // Attach event listeners to the buttons
    primaryContainer
      .querySelectorAll(".pizza_content.add_ingredient")
      .forEach((button) => {
        button.addEventListener("click", this.add_ingredient.bind(this));
      });
    primaryContainer
      .querySelectorAll(".pizza_content.decrease_ingredient")
      .forEach((button) => {
        button.addEventListener("click", this.decrease_ingredient.bind(this));
      });

    const sauceContainer = document.createElement("div");
    const sauseTitle = document.createElement("h2");
    sauseTitle.innerHTML = "Sause";
    sauceContainer.append(sauseTitle);
    // Create a select element
    var selectSause = document.createElement("select");
    selectSause.classList.add("sause");

    // Create options dynamically and append them to the select element
    sauces.forEach(function (optionText) {
      var optionElement = document.createElement("option");
      optionElement.textContent = optionText.label;
      optionElement.value = optionText.id;
      selectSause.appendChild(optionElement);
    });
    selectSause?.addEventListener("change", (event) => {
      this.handleSelect(event, "sauce");
    });

    sauceContainer.append(selectSause);
    primaryContainer.append(sauceContainer);

    listContainer.append(primaryContainer);

    document.querySelector(".pizza_content")?.append(listContainer);
  }

  // Die Methoden 'add_ingredient' und 'decrease_ingredient' wurden ebenfalls überarbeitet,
  // um mit dem neuen Objektansatz zu arbeiten.

  // Weitere Methoden wie 'handleSelect', 'renderInfo' und 'handleDelete' sind ebenfalls neu
  add_ingredient(event: any) {
    const id = event.target.dataset.id;
    const value = event.target.dataset.value;

    console.log("Data Attributes:", { id, value }, this.add_ons);

    if (Object.keys(this.add_ons).length >= 5 && !this.add_ons[value]) {
      return alert("Cant Select More Than 5 ingredient");
    }

    this.add_ons = {
      ...this.add_ons,
      [value]: this.add_ons[value] ? this.add_ons[value] + 1 : 1,
    };
    this.price = this.price + ingredient_price;

    console.log(this.add_ons, this.price);
    this.renderInfo();
  }
  decrease_ingredient(event: any) {
    const id = event.target.dataset.id;
    const value = event.target.dataset.value;
    if (!this.add_ons[value]) return;
    console.log("Data Attributes:", { id, value });

    const isZero = this.add_ons[value] - 1;
    console.log({ isZero });
    if (isZero === 0) {
      console.log("HELLO fromZERO");
      delete this.add_ons[value];
      this.renderInfo();
      return;
    }

    this.add_ons = {
      ...this.add_ons,
      [value]: this.add_ons[value] - 1,
    };
    this.price = this.price - ingredient_price;

    console.log(this.add_ons, this.price);
    this.renderInfo();
  }

  handleSelect(event: any, arg: "sauce" | "base") {
    this[arg] = event.target.value;
    this.renderInfo();
    console.log(this);
  }

  renderInfo() {
    const renderInfo = document
      .getElementById(this.id)
      ?.querySelector(".orderInfo")!;
    renderInfo.innerHTML = "";

    const baseElement = document.createElement("h5");
    baseElement.textContent = "Base" + "---" + this.base;
    renderInfo?.appendChild(baseElement);

    const sauceElement = document.createElement("h5");
    sauceElement.textContent = "Sauce" + "---" + this.sauce;
    renderInfo?.appendChild(sauceElement);

    // // Create an array of <h2> elements using map
    const h5Elements = Object.entries(this.add_ons).map((str: any) => {
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
  // Die Methode 'cartUI' ist neu und scheint eine Schnittstelle für die Interaktion mit dem Warenkorb zu sein.

  cartUI() {
    return { id: this.id, price: this.price, info: this.base };
  }

  handleDelete(event: any, id: string) {
    cart.deleteFromCart(id);
    const removeElement = (el: HTMLElement | null) => {
      if (el && el.parentNode) {
        el.parentNode.removeChild(el);
      }
    };

    removeElement(document.getElementById(id));
    console.log({ id });
  }
}

// Insgesamt deutet Code 2 auf einen Paradigmenwechsel von einer einfachen, ererbten Struktur (Code 1)
// hin zu einem komponentenbasierten Ansatz, der die Erstellung dynamischer und interaktiver
// Benutzeroberflächen mit eingebetteten Event-Listenern und stärkerer Integration in das Einkaufswagen-System ermöglicht.