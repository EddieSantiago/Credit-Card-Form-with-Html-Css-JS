//Import Variables
import { cardholderNameInput, cardNumberInput, cardMonthInput, cardYearInput, cardCvcInput, form, submitAnswerBtn } from "./variables.js";

//Import Functions
import { validateInput, writeText, validateForm } from "./functions/form.js";

cargarAddEventListeners();

function cargarAddEventListeners() {

    //Parameter Type
    cardholderNameInput.addEventListener("blur", validateInput)
    cardNumberInput.addEventListener("blur", validateInput)
    cardMonthInput.addEventListener("blur", validateInput)
    cardYearInput.addEventListener("blur", validateInput)
    cardCvcInput.addEventListener("blur", validateInput)

    cardholderNameInput.addEventListener("keyup", writeText);
    cardNumberInput.addEventListener("keyup", writeText);
    cardMonthInput.addEventListener("keyup", writeText);
    cardYearInput.addEventListener("keyup", writeText);
    cardCvcInput.addEventListener("keyup", writeText);

    //Event Submit
    form.addEventListener("submit", validateForm)

    //Button Answer
    submitAnswerBtn.addEventListener("click", function(){
        document.location.href = "index.html";
    })
}