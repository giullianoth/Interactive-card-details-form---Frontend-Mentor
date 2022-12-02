import { errorMessage, removeMessage } from "./message.js";
import { cardAlert, filterPureNumber, validateKey, validateNumberValue } from "./validate.js";
import { cardFront, cardLabelNumber, cardNumber, cardTemplateNumber, totalNumberLength } from "./variables.js";

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

const validateNumber = () => {

    cardNumber.addEventListener("keyup", (event) => {
        event.preventDefault();

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
            cardLabelNumber.append(errorMessage(`Can't be more than ${totalNumberLength} digits`));
        }
    })

    cardNumber.addEventListener("focusout", (event) => {
        event.preventDefault();

        let cardNumberValue = cardNumber.value;
        let cardNumberLength = cardNumber.value.length;

        cardNumber.classList.remove("error");
        removeMessage(cardLabelNumber);

        if (!validateNumberValue(filterPureNumber(cardNumberValue))) {
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
            cardLabelNumber.append(errorMessage(`Can't be more than ${totalNumberLength} digits`));
        }

        if (filterPureNumber(cardNumberValue).length < totalNumberLength) {
            removeMessage(cardLabelNumber);
            cardAlert(cardFront);
            cardNumber.classList.remove("valid");
            cardNumber.classList.add("error");
            cardLabelNumber.append(errorMessage(`Can't be less than ${totalNumberLength} digits`));
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