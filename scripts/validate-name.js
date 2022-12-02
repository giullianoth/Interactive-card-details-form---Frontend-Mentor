import { cardAlert, validateKey } from "./alerts.js";
import { errorMessage, removeMessage } from "./message.js";
import { validateNameValue } from "./validate.js";
import { accentuation, cardFront, cardLabelName, cardName, cardTemplateName } from "./variables.js";

const filterName = (data) => {
    let filter = data.normalize("NFD").replace(accentuation, "");
    return filter;
}

const validateName = () => {
    cardName.addEventListener("keyup", (event) => {
        event.preventDefault();
    
        let formChar = event.key;
        let formKeyCode = event.code;
        let cardNameValue = cardName.value;
        let cardNameLength = cardName.value.length;
    
        cardName.classList.remove("error");
        removeMessage(cardLabelName);
    
        cardTemplateName.innerText = filterName(cardNameValue);
    
        if (!validateNameValue(cardNameValue)) {
            cardAlert(cardFront);
            cardName.classList.remove("valid");
            cardName.classList.add("error");
            cardLabelName.append(errorMessage("Invalid format, letters only"));
        }
    
        if (cardNameLength === 0) {
    
            if (validateKey(formChar, formKeyCode)) {
                cardAlert(cardFront);
            }
    
            cardName.classList.remove("valid");
            cardName.classList.add("error");
            cardLabelName.append(errorMessage("Can't be blank"));
            cardTemplateName.innerText = "---";
        }
    })
    
    cardName.addEventListener("focusout", (event) => {
        event.preventDefault();
    
        let cardNameValue = cardName.value;
        let cardNameLength = cardName.value.length;
    
        removeMessage(cardLabelName);
        cardName.classList.add("valid");
        cardName.classList.remove("error");
    
        if (!validateNameValue(cardNameValue)) {
            cardAlert(cardFront);
            cardName.classList.remove("valid");
            cardName.classList.add("error");
            cardLabelName.append(errorMessage("Invalid format, letters only"));
        }
    
        if (cardNameLength === 0) {
            cardAlert(cardFront);
            cardName.classList.remove("valid");
            cardName.classList.add("error");
            cardLabelName.append(errorMessage("Can't be blank"));
        }
    })
}

export default validateName;