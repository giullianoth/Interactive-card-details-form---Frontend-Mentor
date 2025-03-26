import { cardAlertAnimate, errorMessage, removeErrorMessage } from "./card-alert.js"
import { accentuation, cardFront, cardName, cardNameLabel, cardNameMaxLength, cardNameTemplate, specialChars } from "./variables.js"

export default function ValidateName() {
    cardName.addEventListener("input", event => {
        if (cardName.classList.contains("error")) {
            removeErrorMessage("name", cardNameLabel)
        }

        let cardNameValue = event.target.value
        let cardNameLength = cardNameValue.length

        if (!cardNameLength) {
            cardAlertAnimate(cardFront)
            errorMessage("Can't be blank", "name", cardNameLabel)
        }

        if (cardNameLength <= cardNameMaxLength) {
            cardNameTemplate.innerText = cardNameLength
                ? cardNameValue
                    .normalize("NFD")
                    .replace(accentuation, "")
                    .replace(specialChars, "")
                    .toUpperCase()
                : "---"
        }
    })

    cardName.addEventListener("focusout", event => {
        let cardNameLength = event.target.value.length

        if (!cardNameLength) {
            cardAlertAnimate(cardFront)
            errorMessage("Can't be blank", "name", cardNameLabel)
        }
    })
}