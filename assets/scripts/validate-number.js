import { cardAlertAnimate, errorMessage, removeErrorMessage } from "./card-alert.js"
import { cardData, cardFront, cardNumber, cardNumberLabel, cardNumberMaxLength, cardNumberTemplate, isValidNumber,  pureNumber } from "./variables.js"

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

        if (cardNumberLength === 0) {
            cardAlertAnimate(cardFront)
            errorMessage("Can't be blank", "number", cardNumberLabel)
        }

        if (cardNumberLength > 0 && !isValidNumber(cardNumberValue)) {
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
        let valid = true
        let cardNumberValue = event.target.value
        let cardNumberLength = pureNumber(cardNumberValue).length

        if (cardNumberLength === 0) {
            cardAlertAnimate(cardFront)
            errorMessage("Can't be blank", "number", cardNumberLabel)
            valid = false
        }

        if (cardNumberLength > 0 && !isValidNumber(cardNumberValue)) {
            cardAlertAnimate(cardFront)
            errorMessage("Wrong format, numbers only", "number", cardNumberLabel)
            valid = false
        }

        if (cardNumberLength > 0 && cardNumberLength < cardNumberMaxLength) {
            cardAlertAnimate(cardFront)
            errorMessage(`Can't be less than ${cardNumberMaxLength} digits`, "number", cardNumberLabel)
            valid = false
        }

        if (cardNumberLength > cardNumberMaxLength) {
            cardAlertAnimate(cardFront)
            errorMessage(`Can't be more than ${cardNumberMaxLength} digits`, "number", cardNumberLabel)
            valid = false
        }

        if (valid) {
            cardNumber.classList.add("valid")
            cardData.number = Number(pureNumber(cardNumberValue))
        }
    })
}