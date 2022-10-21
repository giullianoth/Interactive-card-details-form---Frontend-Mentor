import { cardAlert, validateKey } from "./alerts.js";
import { errorMessage, removeMessage } from "./message.js";
import { cardFront, cardLabelNumber, cardNumber, cardTemplateNumber, numbers } from "./variables.js";

const validateNumber = () => {
    cardNumber.addEventListener("keyup", (event) => {
        event.preventDefault();
        
        let formChar = event.key;
        let formKeyCode = event.code;
        let cardNumberValue = cardNumber.value;
        let cardNumberLength = cardNumber.value.length;

        cardNumber.classList.remove("error");
        removeMessage(cardLabelNumber);

        if (validateKey(formChar, formKeyCode) && (cardNumberLength === 4 || cardNumberLength === 9 || cardNumberLength === 14)) {
            cardNumber.value += " ";
            cardNumberValue += " ";
        }
    
        cardTemplateNumber.innerText = cardNumberValue;
    })
}

export default validateNumber;