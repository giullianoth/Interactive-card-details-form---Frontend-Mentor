import { accentuation, numbers, onlyNumbers, specialChars } from "./variables.js";

// Name
const validateNameValue = (data) => {

    let dataValidate = data.normalize("NFD").replace(accentuation, "");

    if (dataValidate.match(specialChars) || dataValidate.match(numbers)) {
        return false;
    }

    return true;
}

// Number
const filterPureNumber = (data) => {
    return data.normalize("NFD").replaceAll(" ", "");
}

const validateNumberValue = (data) => {
    let dataValidate = filterPureNumber(data);

    if (!dataValidate.match(onlyNumbers)) {
        return false;
    }
    return true;
}

// Expiration date
const validateExpdateValue = (data) => {
    let dataValidate = filterPureNumber(data);

    if (!dataValidate.match(onlyNumbers)) {
        return false;
    }

    return true;
}

const validateDate = (month, year) => {
    let expDateValue = new Date(`20${year}-${month}`);

    if (expDateValue == "Invalid Date") {
        return false;
    }

    return true;
}

const isAfterCurrentDate = (month, year) => {

    let expDateValue = new Date(`20${year}-${month}`);
    let currentDateValue = new Date();

    if (expDateValue.getTime() < currentDateValue.getTime()) {
        return false;
    }

    return true;
}

// CVC
const validateCVCValue = (data) => {
    let dataValidate = filterPureNumber(data);

    if (!dataValidate.match(onlyNumbers)) {
        return false;
    }

    return true;
}

// Typing validate
const validateKey = (key, code) => {

    if (key.match(specialChars)
        || code.indexOf("Backspace") > -1 || code.indexOf("Delete") > -1 || code.indexOf("Space") > -1
        || code.indexOf("Key") > -1 || code.indexOf("Numpad") > -1 || code.indexOf("Digit") > -1) {
        return true;
    }

    return false;
}

// Alerts
const cardAlert = (card) => {
    card.classList.add("card_alert");
    setTimeout(() => {
        card.classList.remove("card_alert");
    }, 300);
}

export {
    validateNameValue,
    validateNumberValue, filterPureNumber,
    validateExpdateValue, validateDate, isAfterCurrentDate,
    validateCVCValue,
    validateKey, cardAlert
};