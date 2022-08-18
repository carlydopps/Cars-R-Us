import { getModels, setModel } from "./database.js"

const models = getModels()

export const modelHTML = () => {
    return `<select id="model">
        <option value="0">Select a model type</option>
        ${models.map(model => `<option value="${model.id}"/>${model.model}</option>`).join("")}
    </select>`
}

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "model") {
            setModel((parseInt(event.target.value)))
        }
    }
)