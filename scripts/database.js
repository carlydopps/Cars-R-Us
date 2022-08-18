const database = {
    colors: [
        {id: 1, color: "Silver", price: 250},
        {id: 2, color: "Midnight Blue", price: 275},
        {id: 3, color: "Firebrick Red", price: 295},
        {id: 4, color: "Spring Green", price: 230}
    ],
    interiors: [
        {id: 1, fabric: "Beige Fabric", price: 2200},
        {id: 2, fabric: "Charcoal Fabric", price: 1900},
        {id: 3, fabric: "White Leather", price: 3600},
        {id: 4, fabric: "Black Leather", price: 3200}
    ],
    technologies: [
        {id: 1, package: "Basic Package", price: 900},
        {id: 2, package: "Navigation Package", price: 1200},
        {id: 3, package: "Visibility Package", price: 2000},
        {id: 4, package: "Ultra Package", price: 3000}
    ],
    wheels: [
        {id: 1, wheel: "17-inch Pair Radial", price: 440},
        {id: 2, wheel: "17-inch Pair Radial Black", price: 500},
        {id: 3, wheel: "18-inch Pair Spoke Silver", price: 490},
        {id: 4, wheel: "18-inch Pair Spoke Black", price: 550}
    ],
    models: [
        {id: 1, model: "Car", priceMultiple: 1},
        {id: 2, model: "SUV", priceMultiple: 1.5},
        {id: 3, model: "Truck", priceMultiple: 2.25},
    ],
    orderBuilder: {},
    customOrders: []
}

export const getColors = () => {
    return database.colors.map(color => ({...color}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getTechnologies = () => {
    return database.technologies.map(technology => ({...technology}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const getModels = () => {
    return database.models.map(model => ({...model}))
}

export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
}

// Define setter functions for each option that takes the id of the user selection and adds it as the value to the new corresponding  property in the orderBuilder object
export const setColor = (id) => {
    database.orderBuilder.colorId = id
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTech = (id) => {
    database.orderBuilder.techId = id
}

export const setWheel = (id) => {
    database.orderBuilder.wheelId = id
}

export const setModel = (id) => {
    database.orderBuilder.modelId = id
}

// Define and export a function that takes the temporary choices stored in the orderBuilder object and stores them permanently in the database
    // Declare a variable to store a copy of the current order selections (orderBuilder property in database object)
    // Check to see if this is the first order in the customOrders array
        // If it is
            // Set the id of the new order equal to 1
        // Else
            // Declare a variable whose value is equal to the last index in the current customOrders property
            // Set the id of the new order (copy of current selections created above) equal to the id of the last object in the customOrders array incremented by 1
    // Set the timestamp of the new order equal to the current date and time
    // Add the new order to the customOrders array
    // Reset the orderBuilder object so that it is ready for the next user's selections
    // Send a notification that the permanent state has changed via a dispatch that calls the custom event "stateChanged"
export const addCustomOrder = () => {
    const newOrder = {...database.orderBuilder}
    if (database.customOrders.length === 0) {
        newOrder.id = 1
    } else {
        const lastIndex = database.customOrders.length-1
        newOrder.id = database.customOrders[lastIndex].id+1
    }
    newOrder.timestamp = Date.now()
    database.customOrders.push(newOrder)
    database.orderBuilder = {}
    document.dispatchEvent(new CustomEvent("stateChanged"))
}