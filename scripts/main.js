import { cars_R_us } from "./cars-R-us.js"

// Finds the element within the document with id of "container" and sets that element's innerHTML equal to the return value of the cars_R_us function
const renderAllHTML = () => {
    document.querySelector("#container").innerHTML = cars_R_us()
}

// Call the function above to render all of the main HTML at least once
renderAllHTML()


// Add an event listener of type "stateChanged" that triggers when a user changes the state
// When the user changes the state, it should regenerate all of the main HTML
document.addEventListener(
    "stateChanged", 
    (event) => {
        renderAllHTML()
    }
)


// ------------------------------------------------------------------------

/* ERD Thought Process

Tables:
    - PaintColors
    - Wheels
    - InteriorFabrics
    - TechnologyPackages
    - Customer
    - CustomOrder

A customer can create multiple custom cars
A custom car can be associated with only one customer

A custom order can have only one paint color
A paint color can be associated with many custom orders

A custom order can have only one wheel style
A wheel style can be associated with many custom orders

A custom order can have only one interior fabric
An interior fabric can be associated with many custom orders

A custom order can have only one technology package
A technology package can be associated with many custom orders

*/


/* Thinking it through:

    1) Setting up the files:
        -- Build out your basic files with scripts directory, styles directory, and index.html file
        -- Within the scripts directory, add these files:
            - main file
            - database file
            - project file
            - file for each custom option
            - orders file
        -- Within the styles directory, add these files:
            - main file
            - details file (import in main)
        -- Within the index.html file
            - Add the html boilerplate code by typing html then selecting the html 5 option
            - Add a main element with an id that you will be working mostly within
            - Add a script element with type="module" and src="./scripts/main.js"

    2) Setting the data foundation:
        -- Within the database file:
            - Add the database object with properties for each of the custom options, orderBuilder, and customOrders
            - For each property referencing a custom option, create an array of all customization options as its value. Each option will be an individual object within the array
            - The orderBuilder property should have an empty object as its value
            - The customOrders property should have an empty array as its value
            - Define and export a getter function for each property so that the data can be accessed by the other files

    3) Setting up the html structure:
        -- Within the project file, create the html of the main element with the following:
            - h1 element with title of page
            - Article tags for all custom options, button, and complete order
                1) Within the article tag for all custom options:
                    -- Add a section tag for each option (each database property)
                    -- Within each section tag:
                        - Add an h2 tag with the heading
                        - Leave a space for the import of individual options' html
                2) Within the article tag for the button:
                    -- Add a button tag
                3) Within the article tag for the complete order:
                    -- Add an h2 tag with the heading
                    -- Leave a space for the import of the custom order html
        -- Within the main file, set it up to pull all html from the project file and add it to the main element through document.querySelector() and .innerHTML()
            - Call the function to render the main HTML at least once

    4) Writing html:
        -- Within each option file, create the html of a select tag with an id and option tags for each choice within that customization option in order to display the options to the user
        -- Within the project file, import all functions that produce the unordered list html and interpolate them into the main html
    
    5) User choosing options (adding event listeners):
        -- Within each option file, add an event listener of type "change" to figure out which option was selected and store it in the database by passing it as an argument into a setter function
    
    6) Saving the user's choice (adding setter functions):
        -- Within the database file, add a setter function for each option (each database property) that adds the value to the empty order builder object (a property within the database object)
            - Double-check that you import setter functions before calling them within a different file, just like with getter functions

    7) Placing an order (adding the trickle down effect of clicking the purchase button):
        -- Within the project file, add an event listener of type "click" to call a new order function when the button is clicked (import this function into the project file)
        -- Within the database file:
            - Define the new order function that will be called by the event listener above
                -- It should take the current selections store in the orderBuilder property of the database object and it as a permanent order to the customOrders property with a unique id and timestamp of now
                -- It should reset the orderBuilder property so that it is ready for the next user's selections
                -- It should send a notification that the permanent state (customOrders property) has changed via a dispatch that calls the custom event "stateChanged"
        -- Within the main file, create an event listener of type "stateChanged" that listens for the call for the custom event "stateChanged" that happens above
            - It should regenerate the HTML for the main element now that a new custom order has been added
    
    8) Presenting the order to the user:
        -- Within the orders file:
            - Define a build order function that has one parameter, an order, and **finds** the object that matches the user's selection for each customization (color, interior, tech, wheels) and returns a list item html for the total price of the order given those specific customizations were selected
            - Define an orders function that creates an unordered list html for all orders
                -- For each order, it should call the function above with the current order as the argument to generate the list item html of that order
        -- Within the project file, import the orders function and interpolate it into the main html
*/