//Comment = changes made

import { Pizza } from "./pizza";
import { Pasta } from "./pasta";
import { Salad } from "./salad";
import { Drink } from "./drink";
// Erweiterung des Cart-Klassendesigns
export class Cart {
  data: (Pizza | Pasta | Salad | Drink)[];
  constructor() {
    // Initialisiert das Datenarray als leer, konsistent mit dem alten Design, aber mit erweiterter Typunterstützung.
    this.data = [];
  }
  // Hinzugefügte Methode zum Hinzufügen von Produkten zum Warenkorb, unterstützt jetzt vielfältigere Produkttypen.
  addToCart(arg: Pizza | Pasta | Salad | Drink) {
    this.data.push(arg);
    // Automatisches Rendering des Warenkorbs nach dem Hinzufügen eines Produkts.
    this.renderCart();
  }
  // Getter-Methode zur Rückgabe der aktuellen Warenkorbsdaten, bleibt im Wesentlichen unverändert, unterstützt aber die neuen Produkttypen.

  getCartData(): (Pizza | Pasta | Salad | Drink)[] {
    return this.data;
  }
  // Überarbeitete Methode zum Entfernen von Produkten aus dem Warenkorb, nutzt filter anstelle von splice

  deleteFromCart(id: string) {
    this.data = this.data.filter((pizza) => pizza.id !== id);
    // Debugging

    console.log("Hello fromCart", id, this.data);
    // Aktualisiert den Warenkorb visuell, nachdem ein Produkt entfernt wurde.

    this.renderCart();
  }
  // Erweiterte Methode zur visuellen Darstellung des Warenkorbs, unterstützt nun unterschiedliche Produkttypen mit spezifischen Details.

  renderCart() {
    const container = document.querySelector(".cartData")!;
    // Stellt sicher, dass der Container eine spezifische Klasse für Styling-Zwecke hat.

    container.classList.add("cart_wrapper");

    container.innerHTML = "";

    const cartTitle = document.createElement("h3");
    cartTitle.textContent = "Cart";
    container.append(cartTitle);
    // Iteriert über die Warenkorbsdaten und erstellt für jedes Produkt einen visuellen Repräsentanten.
    this.getCartData().forEach((str: Pizza | Pasta | Salad | Drink) => {
      // Verarbeitungslogik für Pizza, Pasta und Salat.

      if (
        str.order === "PIZZA" ||
        str.order === "PASTA" ||
        str.order === "SALAD"
      ) {
        // Erstellung von HTML-Elementen, um die Produktdetails anzuzeigen.
        // Änderungen in den Tags und Klassen
        const cartElement = document.createElement("div");
        cartElement.classList.add("cart_element");

        const h2Element = document.createElement("h4");
        h2Element.textContent = "Base: " + (str.base || "Nothing Selected");
        const h6Element = document.createElement("h4");
        h6Element.textContent = "Sauce: " + (str.sauce || "Nothing Selected");

        const addOnsElement = document.createElement("h4");
        addOnsElement.textContent = "Add Ons: " + JSON.stringify(str.add_ons);

        const priceElement = document.createElement("h4");
        priceElement.textContent = "Price: " + String(str.price);

        cartElement?.appendChild(h2Element);
        cartElement?.appendChild(h6Element);
        cartElement?.appendChild(priceElement);
        cartElement?.appendChild(addOnsElement);
        container.appendChild(cartElement);
      }
      // Verarbeitungslogik speziell für Getränke.

      if (str.order === "DRINKS" && Number(str.price) > 0) {
        const cartElement = document.createElement("div");
        cartElement.classList.add("cart_element");

        const h2Element = document.createElement("h2");
        h2Element.textContent =
          "Selected Drinks: " + JSON.stringify(str.drinks);

        const h6Element = document.createElement("h6");
        h6Element.textContent = "Price: " + str.price.toString();

        cartElement?.appendChild(h2Element);
        cartElement?.appendChild(h6Element);

        container.appendChild(cartElement);
      }
    });
  }
}
