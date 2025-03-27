import { cardAlertAnimate, errorMessage, removeErrorMessage } from "./card-alert.js"
import { cardExpdateLabel, cardExpdateMaxLength, cardExpdateMonth, cardExpdateMonthTemplate, cardExpdateYear, cardExpdateYearTemplate, cardFront, isValidNumber, pureNumber } from "./variables.js"

const isValidDate = (month, year) => {
    let date = new Date(`20${year}-${month}`)
    return date != "Invalid Date"
}

const isNotPastDate = (month, year) => {
    let date = new Date(`20${year}-${month}`)
    let currentDate = new Date()

    return date.getTime() > currentDate.getTime()
}

const dateTemplate = num => {
    let dateArray = num.split("")
    let template = "--".split("")

    dateArray.forEach((digit, index) => template[index] = digit)

    return template.join("")
}

export default function ValidateExpDate() {

    // Month
    cardExpdateMonth.addEventListener("input", event => {
        if (cardExpdateMonth.classList.contains("error") && cardExpdateYear.classList.contains("error")) {
            removeErrorMessage("exp-date-month", cardExpdateLabel)
            removeErrorMessage("exp-date-year", cardExpdateLabel)
        }

        let cardExpdateMonthValue = pureNumber(event.target.value)
        let cardExpdateMonthLength = cardExpdateMonthValue.length

        if (cardExpdateMonthLength === 0) {
            cardAlertAnimate(cardFront)
            errorMessage("", "exp-date-month", cardExpdateLabel)
            errorMessage("Can't be blank", "exp-date-year", cardExpdateLabel)
        }

        if (cardExpdateMonthLength > 0 && !isValidNumber(cardExpdateMonthValue)) {
            cardAlertAnimate(cardFront)
            errorMessage("", "exp-date-month", cardExpdateLabel)
            errorMessage("Wrong format, numbers only", "exp-date-year", cardExpdateLabel)
        }

        if (cardExpdateMonthLength > cardExpdateMaxLength) {
            cardExpdateMonth.value = cardExpdateMonthValue.substring(0, cardExpdateMonthValue.length - 1)
            return
        }

        cardExpdateMonthTemplate.innerText = dateTemplate(cardExpdateMonthValue)
    })

    cardExpdateMonth.addEventListener("focusout", event => {
        let cardExpdateMonthValue = pureNumber(event.target.value)
        let cardExpdateMonthLength = cardExpdateMonthValue.length

        if (cardExpdateMonthLength === 0) {
            cardAlertAnimate(cardFront)
            errorMessage("", "exp-date-month", cardExpdateLabel)
            errorMessage("Can't be blank", "exp-date-year", cardExpdateLabel)
        }

        if (cardExpdateMonthLength > 0 && !isValidNumber(cardExpdateMonthValue)) {
            cardAlertAnimate(cardFront)
            errorMessage("", "exp-date-month", cardExpdateLabel)
            errorMessage("Wrong format, numbers only", "exp-date-year", cardExpdateLabel)
        }

        if (cardExpdateMonthLength > 0 && cardExpdateMonthLength < cardExpdateMaxLength) {
            cardExpdateMonth.value = `0${cardExpdateMonthValue}`
            cardExpdateMonthTemplate.innerText = `0${cardExpdateMonthValue}`
        }

        if (cardExpdateMonthLength > cardExpdateMaxLength) {
            cardAlertAnimate(cardFront)
            errorMessage("", "exp-date-month", cardExpdateLabel)
            errorMessage(`Month can't be more than ${cardExpdateMaxLength} digits`, "exp-date-year", cardExpdateLabel)
        }

        if (cardExpdateMonth.value.length === cardExpdateMaxLength
            && cardExpdateYear.value.length === cardExpdateMaxLength) {
            if (!isValidDate(cardExpdateMonth.value, cardExpdateYear.value)) {
                cardAlertAnimate(cardFront)
                errorMessage("", "exp-date-month", cardExpdateLabel)
                errorMessage("Invalid date", "exp-date-year", cardExpdateLabel)
            }

            if (isValidDate(cardExpdateMonth.value, cardExpdateYear.value)
                && !isNotPastDate(cardExpdateMonth.value, cardExpdateYear.value)) {
                cardAlertAnimate(cardFront)
                errorMessage("", "exp-date-month", cardExpdateLabel)
                errorMessage("Can't be past date", "exp-date-year", cardExpdateLabel)
            }
            
        }
    })

    // Year
    cardExpdateYear.addEventListener("input", event => {
        if (cardExpdateMonth.classList.contains("error") && cardExpdateYear.classList.contains("error")) {
            removeErrorMessage("exp-date-month", cardExpdateLabel)
            removeErrorMessage("exp-date-year", cardExpdateLabel)
        }

        let cardExpdateYearValue = pureNumber(event.target.value)
        let cardExpdateYearLength = cardExpdateYearValue.length

        if (cardExpdateYearLength === 0) {
            cardAlertAnimate(cardFront)
            errorMessage("", "exp-date-month", cardExpdateLabel)
            errorMessage("Can't be blank", "exp-date-year", cardExpdateLabel)
        }

        if (cardExpdateYearLength > 0 && !isValidNumber(cardExpdateYearValue)) {
            cardAlertAnimate(cardFront)
            errorMessage("", "exp-date-month", cardExpdateLabel)
            errorMessage("Wrong format, numbers only", "exp-date-year", cardExpdateLabel)
        }

        if (cardExpdateYearLength > cardExpdateMaxLength) {
            cardExpdateYear.value = cardExpdateYearValue.substring(0, cardExpdateYearValue.length - 1)
            return
        }

        cardExpdateYearTemplate.innerText = dateTemplate(cardExpdateYearValue)
    })

    cardExpdateYear.addEventListener("focusout", event => {
        let cardExpdateYearValue = pureNumber(event.target.value)
        let cardExpdateYearLength = cardExpdateYearValue.length

        if (cardExpdateYearLength === 0) {
            cardAlertAnimate(cardFront)
            errorMessage("", "exp-date-month", cardExpdateLabel)
            errorMessage("Can't be blank", "exp-date-year", cardExpdateLabel)
        }

        if (cardExpdateYearLength > 0 && !isValidNumber(cardExpdateYearValue)) {
            cardAlertAnimate(cardFront)
            errorMessage("", "exp-date-month", cardExpdateLabel)
            errorMessage("Wrong format, numbers only", "exp-date-year", cardExpdateLabel)
        }

        if (cardExpdateYearLength > 0 && cardExpdateYearLength < cardExpdateMaxLength) {
            cardAlertAnimate(cardFront)
            errorMessage("", "exp-date-month", cardExpdateLabel)
            errorMessage(`Year can't be less than ${cardExpdateMaxLength} digits`, "exp-date-year", cardExpdateLabel)
        }

        if (cardExpdateYearLength > cardExpdateMaxLength) {
            cardAlertAnimate(cardFront)
            errorMessage("", "exp-date-month", cardExpdateLabel)
            errorMessage(`Year can't be more than ${cardExpdateMaxLength} digits`, "exp-date-year", cardExpdateLabel)
        }

        if (cardExpdateMonth.value.length === cardExpdateMaxLength
            && cardExpdateYear.value.length === cardExpdateMaxLength) {
            if (!isValidDate(cardExpdateMonth.value, cardExpdateYear.value)) {
                cardAlertAnimate(cardFront)
                errorMessage("", "exp-date-month", cardExpdateLabel)
                errorMessage("Invalid date", "exp-date-year", cardExpdateLabel)
            }

            if (isValidDate(cardExpdateMonth.value, cardExpdateYear.value)
                && !isNotPastDate(cardExpdateMonth.value, cardExpdateYear.value)) {
                cardAlertAnimate(cardFront)
                errorMessage("", "exp-date-month", cardExpdateLabel)
                errorMessage("Can't be past date", "exp-date-year", cardExpdateLabel)
            }
            
        }
    })
}