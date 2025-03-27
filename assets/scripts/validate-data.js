import { cardAlertAnimate, errorMessage } from "./card-alert.js"
import Success from "./success.js"
import { isNotPastDate, isValidDate } from "./validate-expdate.js"
import { cardBack, cardCvc, cardCvcLabel, cardCvcMaxLength, cardData, cardExpdateLabel, cardExpdateMaxLength, cardExpdateMonth, cardExpdateMonthTemplate, cardExpdateYear, cardForm, cardFront, cardName, cardNameLabel, cardNumber, cardNumberLabel, cardNumberMaxLength, isValidNumber, pureNumber } from "./variables.js"

export default function ValidateData() {
    cardForm.addEventListener("submit", event => {
        event.preventDefault()

        let valid = true

        let cardNameLength = cardName.value.length

        let cardNumberValue = cardNumber.value
        let cardNumberLength = pureNumber(cardNumberValue).length

        let cardCvcValue = pureNumber(cardCvc.value)
        let cardCvcLength = cardCvcValue.length

        let cardExpdateMonthValue = pureNumber(cardExpdateMonth.value)
        let cardExpdateMonthLength = cardExpdateMonthValue.length

        let cardExpdateYearValue = pureNumber(cardExpdateYear.value)
        let cardExpdateYearLength = cardExpdateYearValue.length

        if (!cardNameLength) {
            cardAlertAnimate(cardFront)
            errorMessage("Can't be blank", "name", cardNameLabel)
            valid = false
        }

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

        if (cardCvcLength === 0) {
            cardAlertAnimate(cardBack)
            errorMessage("Can't be blank", "cvc", cardCvcLabel)
            valid = false
        }

        if (cardCvcLength > 0 && !isValidNumber(cardCvcValue)) {
            cardAlertAnimate(cardBack)
            errorMessage("Wrong format, numbers only", "cvc", cardCvcLabel)
            valid = false
        }

        if (cardCvcLength > 0 && cardCvcLength < cardCvcMaxLength) {
            cardAlertAnimate(cardBack)
            errorMessage(`Can't be less than ${cardCvcMaxLength} digits`, "cvc", cardCvcLabel)
            valid = false
        }

        if (cardCvcLength > cardCvcMaxLength) {
            cardAlertAnimate(cardBack)
            errorMessage(`Can't be more than ${cardCvcMaxLength} digits`, "cvc", cardCvcLabel)
            valid = false
        }

        if (cardExpdateMonthLength === 0) {
            cardAlertAnimate(cardFront)
            errorMessage("Can't be blank", "exp-date-month", cardExpdateLabel)
            valid = false
        }

        if (cardExpdateMonthLength > 0 && !isValidNumber(cardExpdateMonthValue)) {
            cardAlertAnimate(cardFront)
            errorMessage("Wrong format, numbers only", "exp-date-month", cardExpdateLabel)
            valid = false
        }

        if (cardExpdateMonthLength > 0 && cardExpdateMonthLength < cardExpdateMaxLength) {
            cardExpdateMonth.value = `0${cardExpdateMonthValue}`
            cardExpdateMonthTemplate.innerText = `0${cardExpdateMonthValue}`
        }

        if (cardExpdateMonthLength > cardExpdateMaxLength) {
            cardAlertAnimate(cardFront)
            errorMessage(`Month can't be more than ${cardExpdateMaxLength} digits`, "exp-date-month", cardExpdateLabel)
            valid = false
        }

        if (cardExpdateMonth.value.length === cardExpdateMaxLength
            && cardExpdateYear.value.length === cardExpdateMaxLength) {
            if (!isValidDate(cardExpdateMonth.value, cardExpdateYear.value)) {
                cardAlertAnimate(cardFront)
                errorMessage("Invalid date", "exp-date-month", cardExpdateLabel)
                valid = false
            }

            if (isValidDate(cardExpdateMonth.value, cardExpdateYear.value)
                && !isNotPastDate(cardExpdateMonth.value, cardExpdateYear.value)) {
                cardAlertAnimate(cardFront)
                errorMessage("Can't be past date", "exp-date-month", cardExpdateLabel)
                valid = false
            }
        }

        if (cardExpdateYearLength === 0) {
            cardAlertAnimate(cardFront)
            errorMessage("Can't be blank", "exp-date-year", cardExpdateLabel)
            valid = false
        }

        if (cardExpdateYearLength > 0 && !isValidNumber(cardExpdateYearValue)) {
            cardAlertAnimate(cardFront)
            errorMessage("Wrong format, numbers only", "exp-date-year", cardExpdateLabel)
            valid = false
        }

        if (cardExpdateYearLength > 0 && cardExpdateYearLength < cardExpdateMaxLength) {
            cardAlertAnimate(cardFront)
            errorMessage(`Year can't be less than ${cardExpdateMaxLength} digits`, "exp-date-year", cardExpdateLabel)
            valid = false
        }

        if (cardExpdateYearLength > cardExpdateMaxLength) {
            cardAlertAnimate(cardFront)
            errorMessage(`Year can't be more than ${cardExpdateMaxLength} digits`, "exp-date-year", cardExpdateLabel)
            valid = false
        }

        if (cardExpdateMonth.value.length === cardExpdateMaxLength
            && cardExpdateYear.value.length === cardExpdateMaxLength) {
            if (!isValidDate(cardExpdateMonth.value, cardExpdateYear.value)) {
                cardAlertAnimate(cardFront)
                errorMessage("Invalid date", "exp-date-year", cardExpdateLabel)
                valid = false
            }

            if (isValidDate(cardExpdateMonth.value, cardExpdateYear.value)
                && !isNotPastDate(cardExpdateMonth.value, cardExpdateYear.value)) {
                cardAlertAnimate(cardFront)
                errorMessage("Can't be past date", "exp-date-year", cardExpdateLabel)
                valid = false
            }
        }

        if (valid) {
            console.log(cardData)
            Success()
        }
    })
}