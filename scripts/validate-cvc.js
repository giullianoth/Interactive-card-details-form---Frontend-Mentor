import { errorMessage, removeMessage } from "./message.js";
import { cardAlert, filterPureNumber, validateCVCValue, validateKey } from "./validate.js";
import { cardBack, cardCvc, cardLabelCvc, cardTemplateCvc, totalCvcLength } from "./variables.js";

const templateCVC = (cvc) => {
    let cvcArray = cvc.split("");
    let templateCvc = "---".split("");

    cvcArray.forEach((digit, index) => {
        templateCvc[index] = digit;
    });

    return templateCvc.join("");
}

const validateCVC = () => {
    cardCvc.addEventListener("keyup", (event) => {
        event.preventDefault();

        let formChar = event.key;
        let formKeyCode = event.code;
        let cardCvcValue = cardCvc.value;
        let cardCvcLength = cardCvc.value.length;

        cardCvc.classList.remove("error");
        removeMessage(cardLabelCvc);
        cardCvc.classList.add("valid");

        cardTemplateCvc.innerText = templateCVC(filterPureNumber(cardCvcValue));

        if (!validateCVCValue(cardCvcValue)) {
            cardAlert(cardBack);
            cardCvc.classList.remove("valid");
            cardCvc.classList.add("error");
            cardLabelCvc.append(errorMessage("Invalid format, numbers only"));
        }

        if (cardCvcLength === 0) {
            removeMessage(cardLabelCvc);

            if (validateKey(formChar, formKeyCode)) {
                cardAlert(cardBack);
            }

            cardCvc.classList.remove("valid");
            cardCvc.classList.add("error");
            cardLabelCvc.append(errorMessage("Can't be blank"));
        }

        if (cardCvcLength > totalCvcLength) {
            cardAlert(cardBack);
            cardCvc.classList.remove("valid");
            cardCvc.classList.add("error");
            cardLabelCvc.append(errorMessage(`Can't be more than ${totalCvcLength} digits`));
        }
    })

    cardCvc.addEventListener("focusout", (event) => {
        event.preventDefault();

        let cardCvcValue = cardCvc.value;
        let cardCvcLength = cardCvc.value.length;

        cardCvc.classList.remove("error");
        removeMessage(cardLabelCvc);

        if (!validateCVCValue(cardCvcValue)) {
            cardAlert(cardBack);
            cardCvc.classList.remove("valid");
            cardCvc.classList.add("error");
            cardLabelCvc.append(errorMessage("Invalid format, numbers only"));
        }

        if (cardCvcLength > totalCvcLength) {
            removeMessage(cardLabelCvc);
            cardAlert(cardBack);
            cardCvc.classList.remove("valid");
            cardCvc.classList.add("error");
            cardLabelCvc.append(errorMessage(`Can't be more than ${totalCvcLength} digits`));
        }

        if (cardCvcLength < totalCvcLength) {
            removeMessage(cardLabelCvc);
            cardAlert(cardBack);
            cardCvc.classList.remove("valid");
            cardCvc.classList.add("error");
            cardLabelCvc.append(errorMessage(`Can't be less than ${totalCvcLength} digits`));
        }

        if (cardCvcLength === 0) {
            removeMessage(cardLabelCvc);
            cardCvc.classList.remove("valid");
            cardCvc.classList.add("error");
            cardLabelCvc.append(errorMessage("Can't be blank"));
        }
    })
}

export default validateCVC;