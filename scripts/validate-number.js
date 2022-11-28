import { cardAlert, validateKey } from "./alerts.js";
import { errorMessage, removeMessage } from "./message.js";
import { cardFront, cardLabelNumber, cardNumber, cardTemplateNumber, onlyNumbers } from "./variables.js";

const templateNumber = (number) => {

    let numberArray = filterPureNumber(number).split("");
    let templateNumber = "---- ---- ---- ----".split("");

    numberArray.forEach((digit, index) => {
        if (index <= 3) {
            templateNumber[index] = digit;
        } else if (index > 3 && index <= 7) {
            templateNumber[index + 1] = digit;
        } else if (index > 7 && index <= 11) {
            templateNumber[index + 2] = digit;
        } else if (index > 11 && index <= 16) {
            templateNumber[index + 3] = digit;
        }
    });

    return templateNumber.join("");
}

const filterNumber = (data, key) => {
    let filter = data.split("");

    if (filter.length === 4 || filter.length === 9 || filter.length === 14) {
        if (key !== "Delete" && key !== "Backspace") {
            filter.push(" ");
        } else {
            filter.pop();
        }
    }

    return filter.join("");
}

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

const validateNumber = () => {
    cardNumber.addEventListener("keyup", (event) => {
        event.preventDefault();

        let totalNumberLength = 16;
        let formChar = event.key;
        let formKeyCode = event.code;
        let cardNumberValue = cardNumber.value;
        let cardNumberLength = cardNumber.value.length;

        cardNumber.classList.remove("error");
        removeMessage(cardLabelNumber);
        cardNumber.classList.add("valid");
        
        cardNumber.value = filterNumber(cardNumberValue, formChar);
        cardTemplateNumber.innerText = templateNumber(filterNumber(cardNumberValue, formChar));

        if (!validateNumberValue(filterPureNumber(cardNumberValue))) {
            cardAlert(cardFront);
            cardNumber.classList.remove("valid");
            cardNumber.classList.add("error");
            cardLabelNumber.append(errorMessage("Invalid format, numbers only"));
        }

        if (cardNumberLength === 0) {
            removeMessage(cardLabelNumber);
    
            if (validateKey(formChar, formKeyCode)) {
                cardAlert(cardFront);
            }
    
            cardNumber.classList.remove("valid");
            cardNumber.classList.add("error");
            cardLabelNumber.append(errorMessage("Can't be blank"));
        }

        if (filterPureNumber(cardNumberValue).length > totalNumberLength) {
            cardAlert(cardFront);
            cardNumber.classList.remove("valid");
            cardNumber.classList.add("error");
            cardLabelNumber.append(errorMessage("Can't be more than 16 digits"));
        }
    })

    cardNumber.addEventListener("focusout", (event) => {
        event.preventDefault();

        let totalNumberLength = 16;
        let cardNumberValue = cardNumber.value;
        let cardNumberLength = cardNumber.value.length;

        cardNumber.classList.remove("error");
        removeMessage(cardLabelNumber);

        if (!validateNumberValue(filterPureNumber(cardNumberValue))) {
            console.log(filterPureNumber(cardNumberValue));
            cardAlert(cardFront);
            cardNumber.classList.remove("valid");
            cardNumber.classList.add("error");
            cardLabelNumber.append(errorMessage("Invalid format, numbers only"));
        }

        if (filterPureNumber(cardNumberValue).length > totalNumberLength) {
            removeMessage(cardLabelNumber);
            cardAlert(cardFront);
            cardNumber.classList.remove("valid");
            cardNumber.classList.add("error");
            cardLabelNumber.append(errorMessage("Can't be more than 16 digits"));
        }

        if (filterPureNumber(cardNumberValue).length < totalNumberLength) {
            removeMessage(cardLabelNumber);
            cardAlert(cardFront);
            cardNumber.classList.remove("valid");
            cardNumber.classList.add("error");
            cardLabelNumber.append(errorMessage("Can't be less than 16 digits"));
        }

        if (cardNumberLength === 0) {
            removeMessage(cardLabelNumber);
            cardNumber.classList.remove("valid");
            cardNumber.classList.add("error");
            cardLabelNumber.append(errorMessage("Can't be blank"));
        }
    })
}

export default validateNumber;