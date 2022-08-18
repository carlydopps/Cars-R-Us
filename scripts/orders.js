import { getColors, getInteriors, getTechnologies, getWheels, getOrders, getModels } from "./database.js";

// Define a function that has one parameter, an order
// For each customization option, find the object that matches the user's selection
// Calculate the total price of all selections
// Return a list item html for the total price of the order given those specific customizations

const buildOrderHTML = (order) => {
    const colors = getColors()
    const interiors = getInteriors()
    const technologies = getTechnologies()
    const wheels = getWheels()
    const models = getModels()

    const foundColor = colors.find(
        (color) => {
            // Return the color object that makes this statement true
            return color.id === order.colorId
        }
    )

    const foundInterior = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )

    const foundTech = technologies.find(
        (tech) => {
            return tech.id === order.techId
        }
    )

    const foundWheel = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelId
        }
    )

    const foundModel = models.find(
        (model) => {
            return model.id === order.modelId
        }
    )

    const totalCost = (foundColor.price + foundInterior.price + foundTech.price + foundWheel.price)*foundModel.priceMultiple

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
        return `<li>
            Order #${order.id} cost ${costString}
        </li>`
}

// Define and export a function that creates an unordered list html for each order placed
    // For each order, it should call the buildOrderHTML function with the current order as the argument to generate the list item html of that order
    // The .map() method returns an array, so join the array of list item html into one string
// Return the unordered list html with the list items inserted

export const Orders = () => {
    const orders = getOrders()
    let html = "<ul>"
    let listItems = orders.map(buildOrderHTML)
    html += listItems.join("")
    html += "</ul>"
    return html
}
