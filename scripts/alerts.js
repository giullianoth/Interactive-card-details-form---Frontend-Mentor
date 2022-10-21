import { specialChars } from "./variables.js";

const cardAlert = (card) => {
    card.classList.add("card_alert");
    setTimeout(() => {
        card.classList.remove("card_alert");
    }, 300);
}

const validateKey = (key, code) => {

    if (key.match(specialChars)
        || code.indexOf("Backspace") > -1 || code.indexOf("Delete") > -1 || code.indexOf("Space") > -1
        || code.indexOf("Key") > -1 || code.indexOf("Numpad") > -1 || code.indexOf("Digit") > -1) {
        return true;
    }

    return false;
}

export { cardAlert, validateKey }