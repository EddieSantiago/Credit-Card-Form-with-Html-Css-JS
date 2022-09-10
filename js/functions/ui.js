//Import variables
import { form, divAnswer } from "../variables.js";

export function showErrors(input, message) {

    //Put red border
    input.classList.add("border__red-error");

    if(input.nextElementSibling === null || !input.nextElementSibling.classList.contains("container__right-form__input-container__error")){
        //Show Error
        input.parentNode.nextElementSibling.style.display = "inline";
        input.parentNode.nextElementSibling.textContent = message;
    }else{
        //Show Error
        input.nextElementSibling.style.display = "inline";
        input.nextElementSibling.textContent = message;
    }
}

export function hideErrors(input) {
    //Put red border
    input.classList.remove("border__red-error");

    if(input.nextElementSibling === null || !input.nextElementSibling.classList.contains("container__right-form__input-container__error")){
        //Show Error
        input.parentNode.nextElementSibling.style.display = "none";
        input.parentNode.nextElementSibling.textContent = "Error";
    }else{
        //Show Error
        input.nextElementSibling.style.display = "none";
        input.nextElementSibling.textContent = "Error";
    }
}

export function showAnswer() {
    //Hide form
    form.classList.remove("active");

    //Show answer
    divAnswer.classList.add("active");
}