import { getWheels, setWheel } from "./database.js"

const wheels = getWheels()

// Define and export a function that creates the html to display the drop-down list of technology options
    // Declare a variable whose value is equal to the html select tag with id
    // On a new line, add an option tag with value of 0 to display what should show in the drop down before the user selects an option
export const carWheel = () => {
    let html = `<select id="wheel">
        <option value="0">Select a wheel option</option>`
    const optionsArray = wheels.map(
        (wheel) => {
            return `<option value="${wheel.id}"/>${wheel.wheel}</option>`
        }
    )
    html += optionsArray.join("")
    html += "</select>"
    return html
}

// Add an event listener of type "change" to listen for when a user  selects an option / changes the value
    // Check to see if the target id matches the topic you want
        // Access the id attribute of the target because the options are a drop-down list and are within a select element (radio buttons / input elements use the name attribute)
        // If it matches, pass the value of the target (the value of the option element after applying the parseInt() method to convert it from string to integer) into the setter function to store it in the database
document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "wheel") {
            setWheel((parseInt(event.target.value)))
        }
    }
)

