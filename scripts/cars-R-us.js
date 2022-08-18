import { carColor } from "./colors.js"
import { carInterior } from "./interiors.js"
import { carTechnology } from "./technologies.js"
import { carWheel } from "./wheels.js"
import { Orders } from "./orders.js"
import { addCustomOrder } from "./database.js"
import { modelHTML } from "./models.js"


// Define and export a function that creates the html for all main element features - custom options, button for creating order, and complete custom order
// Create an article tag for custom options, button, and complete order
// Within the article for custom options, create a section tag for each option

export const cars_R_us = () => {
    return `
        <h1>Cars-R-Us</h1>

        <article class="options">
            <section class="options__colors">
                <h2>Paint Colors</h2>
                ${carColor()}
            </section>
            <section class="options__interiors">
                <h2>Interior Fabrics</h2>
                ${carInterior()}
            </section>
            <section class="options__technologies">
                <h2>Technology Packages</h2>
                ${carTechnology()}
            </section>
            <section class="options__wheels">
                <h2>Wheels</h2>
                ${carWheel()}
            </section>
            <section class="options__models">
                <h2>Models</h2>
                ${modelHTML()}
            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Car</button>
        </article>

        <article>
            <h2>Custom Car Orders</h2>
            ${Orders()}
        </article>
    `
}

// Add an event listener of type "click" that triggers when the user clicks the Create Custom Car button defined in the html above
    // If the id of the event is equal to the id of the button, call the addCustomOrder function
document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            addCustomOrder()
        }
    }
)