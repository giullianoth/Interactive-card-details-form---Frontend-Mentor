import { cardAlertAnimate, errorMessage, removeErrorMessage } from "./card-alert.js"
import { cardFront, cardNumber, cardNumberLabel, cardNumberMaxLength, cardNumberTemplate, isValidNumber,  pureNumber } from "./variables.js"

const numberTemplate = num => {
    let numArray = pureNumber(num).split("")
    let template = "---- ---- ---- ----".split("")

    numArray.forEach((digit, index) => {
        if (index <= 3) {
            template[index] = digit
        }else if (index > 3 && index <= 7) {
            template[index + 1] = digit;
        } else if (index > 7 && index <= 11) {
            template[index + 2] = digit;
        } else if (index > 11 && index < 16) {
            template[index + 3] = digit;
        }
    })

    return template.join("")
}

const filteredNumber = (num) => {
    let numArray = pureNumber(num).split("")
    let template = [
        "", "", "", "", " ", "", "", "", "", " ", "", "", "", "", " ", "", "", "", "", 
    ]

    numArray.forEach((digit, index) => {
        if (index <= 3) {
            template[index] = digit
        }else if (index > 3 && index <= 7) {
            template[index + 1] = digit;
        } else if (index > 7 && index <= 11) {
            template[index + 2] = digit;
        } else if (index > 11 && index < 16) {
            template[index + 3] = digit;
        }
    })

    return template.join("").trim()
}

export default function ValidateNumber() {
    cardNumber.addEventListener("input", event => {
        if (cardNumber.classList.contains("error")) {
            removeErrorMessage("number", cardNumberLabel)
        }

        let cardNumberValue = event.target.value
        let cardNumberLength = pureNumber(cardNumberValue).length

        if (!cardNumberLength) {
            cardAlertAnimate(cardFront)
            errorMessage("Can't be blank", "number", cardNumberLabel)
        }

        if (!isValidNumber(cardNumberValue)) {
            cardAlertAnimate(cardFront)
            errorMessage("Wrong format, numbers only", "number", cardNumberLabel)
        }

        if (cardNumberLength > cardNumberMaxLength) {
            cardNumber.value = cardNumberValue.substring(0, cardNumberValue.length - 1)
            return
        }
        
        cardNumber.value = filteredNumber(cardNumberValue)
        cardNumberTemplate.innerText = numberTemplate(cardNumberValue)
    })

    cardNumber.addEventListener("focusout", event => {
        let cardNumberValue = event.target.value
        let cardNumberLength = pureNumber(cardNumberValue).length

        if (!cardNumberLength) {
            cardAlertAnimate(cardFront)
            errorMessage("Can't be blank", "number", cardNumberLabel)
        }

        if (!isValidNumber(cardNumberValue)) {
            cardAlertAnimate(cardFront)
            errorMessage("Wrong format, numbers only", "number", cardNumberLabel)
        }

        if (cardNumberLength < cardNumberMaxLength) {
            cardAlertAnimate(cardFront)
            errorMessage("Can't be less than 16 digits", "number", cardNumberLabel)
        }

        if (cardNumberLength > cardNumberMaxLength) {
            cardAlertAnimate(cardFront)
            errorMessage("Can't be more than 16 digits", "number", cardNumberLabel)
        }
    })
}