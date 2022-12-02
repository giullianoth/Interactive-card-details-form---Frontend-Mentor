import { cardAlert } from "./alerts.js";
import { errorMessage, removeMessage } from "./message.js";
import { accentuation, cardCvc, cardExpdateMonth, cardExpdateYear, cardForm, cardFront, cardLabelName, cardName, cardNumber, numbers, specialChars } from "./variables.js";

const validateNameValue = (data) => {

    let dataValidate = data.normalize("NFD").replace(accentuation, "");

    if (dataValidate.match(specialChars) || dataValidate.match(numbers)) {
        return false;
    }

    return true;
}

const validateForm = () => {
    
    cardForm.addEventListener("submit", (event) => {
        event.preventDefault();

        let valid = true;

        let cardNameValue = cardName.value;
        cardName.classList.remove("error");
        removeMessage(cardLabelName);

        if (cardNameValue.length === 0) {
            cardAlert(cardFront);
            cardName.classList.remove("valid");
            cardName.classList.add("error");
            cardLabelName.append(errorMessage("Can't be blank"));
            valid = false;
        }

        if (!validateNameValue(cardNameValue)) {
            cardAlert(cardFront);
            cardName.classList.remove("valid");
            cardName.classList.add("error");
            cardLabelName.append(errorMessage("Invalid format, letters only"));
            valid = false;
        }

        if (valid) {
            console.log("Tudo certo");
        } else {
            console.log("Não, porra!");
        }
    })
}

export default validateForm;