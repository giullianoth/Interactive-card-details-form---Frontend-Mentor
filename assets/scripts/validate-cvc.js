import { cardAlertAnimate, errorMessage, removeErrorMessage } from "./card-alert.js"
import { cardBack, cardCvc, cardCvcLabel, cardCvcMaxLength, cardCvcTemplate, isValidNumber, pureNumber } from "./variables.js"

const cvcTemplate = num => {
    let cvcArray = num.split("")
    let template = "---".split("")

    cvcArray.forEach((digit, index) => template[index] = digit)

    return template.join("")
}

export default function ValidateCvc() {
    cardCvc.addEventListener("input", event => {
        if (cardCvc.classList.contains("error")) {
            removeErrorMessage("cvc", cardCvcLabel)
        }

        let cardCvcValue = pureNumber(event.target.value)
        let cardCvcLength = cardCvcValue.length

        if (cardCvcLength === 0) {
            cardAlertAnimate(cardBack)
            errorMessage("Can't be blank", "cvc", cardCvcLabel)
        }

        if (cardCvcLength > 0 && !isValidNumber(cardCvcValue)) {
            cardAlertAnimate(cardBack)
            errorMessage("Wrong format, numbers only", "cvc", cardCvcLabel)
        }

        if (cardCvcLength > cardCvcMaxLength) {
            cardCvc.value = cardCvcValue.substring(0, cardCvcValue.length - 1)
            return
        }

        cardCvcTemplate.innerText = cvcTemplate(cardCvcValue)
    })

    cardCvc.addEventListener("focusout", event => {
        let cardCvcValue = pureNumber(event.target.value)
        let cardCvcLength = cardCvcValue.length

        if (!cardCvcLength) {
            cardAlertAnimate(cardBack)
            errorMessage("Can't be blank", "cvc", cardCvcLabel)
        }

        if (!isValidNumber(cardCvcValue)) {
            cardAlertAnimate(cardBack)
            errorMessage("Wrong format, numbers only", "cvc", cardCvcLabel)
        }

        if (cardCvcLength < cardCvcMaxLength) {
            cardAlertAnimate(cardBack)
            errorMessage(`Can't be less than ${cardCvcMaxLength} digits`, "cvc", cardCvcLabel)
        }

        if (cardCvcLength > cardCvcMaxLength) {
            cardAlertAnimate(cardBack)
            errorMessage(`Can't be more than ${cardCvcMaxLength} digits`, "cvc", cardCvcLabel)
        }
    })
}