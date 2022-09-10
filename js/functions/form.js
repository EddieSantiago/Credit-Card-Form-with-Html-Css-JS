//Import Variables
import { creditCardExpression, creditNameCard, creditNumberCard, creditExpeditionMonthCard, creditExpeditionYearCard, creditCvcCard } from "../variables.js";

//Import Functions
import { showErrors, hideErrors, showAnswer } from "./ui.js";

const creditCardObj = {
    cardholderName: "",
    cardNumber: null,
    monthInput: null,
    yearInput: null,
    cvcInput: null,
}

export function validateInput(e) {
    const typeInput = e.target.getAttribute("data-type");

    //Validate according to Input Type

    //Text Type
    if (typeInput === "text") {
        //Clean the property
        updateObject(e.target.id, "")

        //Validate his length
        if (e.target.value.length === 0) {
            //Put Border Error and Show Error
            showErrors(e.target, "Can't be blank");
        }else{
            //Remove Border Error and Hide Error
            hideErrors(e.target)

            //If don't have errors update the object
            updateObject(e.target.id, e.target.value)
        }
    }
    
    //Numbers
    else if (typeInput === "number") {

        //Clean the property
        updateObject(e.target.id, null)

        //Replace dashes
        let creditNumberWithoutDashes = e.target.value.replaceAll("-", "");

        //Validate his length
        if (e.target.value.length === 0) {
            //Put Border Error and Show Error
            showErrors(e.target, "Can´t be blank");
        }
        //Validate if the input number card has 3 dashes or more (Only for this)
        else if (e.target.id === "card-number" && (e.target.value.split("-").length) > 4) {
            //Put Border Error and Show Error
            showErrors(e.target, "Remove Additional Dashes");
        }
        //Validate his length
        else if (e.target.value.length < 19) {
            //Put Border Error and Show Error
            showErrors(e.target, "Fill the Text with the correct length");
        }
        //Validate if the value is a integer

        else if(!creditCardExpression.test(creditNumberWithoutDashes)) {
            //Put Border Error and Show Error
            showErrors(e.target, "Wrong Format, numbers only");
        }

        else{
            //Remove Border Error and Hide Error
            hideErrors(e.target)

            //If don't have errors update the object
            updateObject(e.target.id, e.target.value)
        }
    }
    
    //Date
    else if (typeInput === "date") {
        //Clean the property
        updateObject(e.target.id, null)

        //Validate his length
        if (e.target.value.length === 0) {
            //Put Border Error and Show Error
            showErrors(e.target, "Can´t be blank");
        }
        //Validate his range
        else if (e.target.id === "month-input" && parseInt(e.target.value) > 12 || parseInt(e.target.value) < 0) {
            //Put Border Error and Show Error
            showErrors(e.target, "Write a Correct Number");
        }
        //Validate his length
        else if (e.target.value.length < 2) {
            //Put Border Error and Show Error
            showErrors(e.target, "Fill the Text with the correct length");
        }
        //Validate if the value is a integer
        else if (!creditCardExpression.test(e.target.value)) {
            //Put Border Error and Show Error
            showErrors(e.target, "Wrong Format, numbers only");
        }
        else{
            //Remove Border Error and Hide Error
            hideErrors(e.target)

            //If don't have errors update the object
            updateObject(e.target.id, e.target.value)
        }
    }
    //Cvc
    else if (typeInput === "cvc") {
        //Clean the property
        updateObject(e.target.id, null)
        
        //Validate his length
        if (e.target.value.length === 0) {
            //Put Border Error and Show Error
            showErrors(e.target, "Can´t be blank");
        }
        //Validate his length
        else if (e.target.value.length < 3) {
            //Put Border Error and Show Error
            showErrors(e.target, "Fill the Text with the correct length");
        }
        //Validate if the value is a integer
        else if (!creditCardExpression.test(e.target.value)) {
            //Put Border Error and Show Error
            showErrors(e.target, "Wrong Format, numbers only");
        }
        else{
            //Remove Border Error and Hide Error
            hideErrors(e.target)

            //If don't have errors update the object
            updateObject(e.target.id, e.target.value)
        }
    }
    
}

export function writeText(e){
    //Validate Blank Spaces in a Number Input
    if (e.target.getAttribute("data-type") === "number") {
        e.target.value = e.target.value.trim();
    }

    //If write a input, the text translate to card
    
    //Validate the input id

    //Name
    if (e.target.id === "cardholder-name") {
        creditNameCard.innerHTML = e.target.value;

    //Number
    }else if (e.target.id === "card-number") {
        
        //Validate specific length to put a dash to separe the text

        if (e.target.value.length === 4 || e.target.value.length === 9 || e.target.value.length === 14) {
            //His content plus a blank space
            e.target.value = e.target.value + "-";
        }

        //After this, replace all dashes by blank spaces and show it in the card

        let textWithoutDashes = e.target.value.replaceAll("-", " ");

        creditNumberCard.innerHTML = textWithoutDashes;

    }
    //Month
    else if (e.target.id === "month-input") {
        creditExpeditionMonthCard.innerHTML = e.target.value;
    }
    //Year
    else if (e.target.id === "year-input") {
        creditExpeditionYearCard.innerHTML = e.target.value;
    }
    //Cvc
    else if (e.target.id === "cvc-input") {
        creditCvcCard.innerHTML = e.target.value.trim();
    }
}

//Function to update Object

function updateObject(id, value) {
    let idArray = id.split("-");

    const propertyArray = [...idArray]

    //Update to Uppercase second element
    propertyArray[1] = propertyArray[1].charAt(0).toUpperCase() + propertyArray[1].substring(1);

    const propertyObjectSelected = propertyArray[0] + propertyArray[1];
    
    //Update property object
    creditCardObj[propertyObjectSelected] = value;
}

//Function to Validate all form

export function validateForm(e) {
    e.preventDefault();

    //Validate the object content
    if (creditCardObj.cardholderName !== "" && creditCardObj.cardNumber !== null && creditCardObj.monthInput !== null && creditCardObj.yearInput !== null && creditCardObj.cvcInput !== null) {
        showAnswer();
    }
}