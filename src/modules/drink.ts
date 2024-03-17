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

// Erweitert die Cart-Klasse für Getränkebestellungen mit spezifischen Funktionalitäten.
export class Drink extends Cart {
  order: "DRINKS";
  id: string;
  drinks: Record<string, number>;
  price: number;
  constructor() {
    super(); // Aufruf des Cart-Konstruktors für Basisinitialisierung.
    this.order = "DRINKS";
    this.id = uuidv4(); // Generiert eine eindeutige ID für jede Instanz.
    this.drinks = {}; // Initialisiert ein Objekt für die Verwaltung der Getränkeanzahl.
    this.price = 0; // Setzt den Startpreis auf 0.
  }
  // Render-Funktion für die Benutzeroberfläche der Getränkeauswahl.

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

      drinkContainer.append(drink_item);
    });
    primaryContainer.append(drinkContainer);

    // Event Listener für das Hinzufügen und Verringern von Getränken.
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
  // Funktion zum Hinzufügen eines Getränks zur Bestellung.

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
  // Funktion zum Verringern eines Getränks in der Bestellung.

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
  // Aktualisiert die Anzeige der ausgewählten Getränke und des Gesamtpreises.

  renderInfo() {
    const renderInfo = document
      .getElementById(this.id)
      ?.querySelector(".orderInfo")!;
    renderInfo.innerHTML = "";

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
  // Bereitet die Daten für die Integration in das Warenkorbsystem vor.

  cartUI() {
    return {
      id: this.id,
      price: this.price,
      info: JSON.stringify(this.drinks),
    };
  }
}
