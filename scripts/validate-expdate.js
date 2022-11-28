import { cardAlert, validateKey } from "./alerts.js";
import { errorMessage, removeMessage } from "./message.js";
import { cardExpdateMonth, cardExpdateYear, cardFront, cardLabelExpdate, cardTemplateExpdateMonth, cardTemplateExpdateYear, onlyNumbers } from "./variables.js";

const templateExpdate = (date) => {
    let dateArray = date.split("");
    let templateDate = "--".split("");

    dateArray.forEach((digit, index) => {
        templateDate[index] = digit;
    });

    return templateDate.join("");
}

const validateExpdateValue = (data) => {
    let dataValidate = data.normalize("NFD").replaceAll(" ", "");

    if (!dataValidate.match(onlyNumbers)) {
        return false;
    }

    return true;
}

const validateDate = () => {

    let expDateValue = new Date(`20${cardExpdateYear.value}-${cardExpdateMonth.value}`);
    let currentDateValue = new Date();

    cardExpdateMonth.classList.remove("error");
    cardExpdateYear.classList.remove("error");
    cardExpdateMonth.classList.add("valid");
    cardExpdateYear.classList.add("valid");
    removeMessage(cardLabelExpdate);

    if (expDateValue.getTime() < currentDateValue.getTime()) {
        cardAlert(cardFront);
        cardExpdateMonth.classList.remove("valid");
        cardExpdateYear.classList.remove("valid");
        cardExpdateMonth.classList.add("error");
        cardExpdateYear.classList.add("error");
        cardLabelExpdate.append(errorMessage("Can't be before the current date"));
    }

    if (expDateValue == "Invalid Date") {
        cardAlert(cardFront);
        cardExpdateMonth.classList.remove("valid");
        cardExpdateYear.classList.remove("valid");
        cardExpdateMonth.classList.add("error");
        cardExpdateYear.classList.add("error");
        cardLabelExpdate.append(errorMessage("Invalid date"));
    }
}

const validateExpdate = () => {

    // Month
    cardExpdateMonth.addEventListener("keyup", (event) => {
        event.preventDefault();

        let totalExpdateMonthLength = 2;
        let formChar = event.key;
        let formKeyCode = event.code;
        let cardExpdateMonthValue = cardExpdateMonth.value;
        let cardExpdateMonthLength = cardExpdateMonth.value.length;

        cardExpdateMonth.classList.remove("error");
        removeMessage(cardLabelExpdate);
        cardExpdateMonth.classList.add("valid");

        cardTemplateExpdateMonth.innerText = templateExpdate(cardExpdateMonthValue);

        if (!validateExpdateValue(cardExpdateMonthValue)) {
            cardAlert(cardFront);
            cardExpdateMonth.classList.remove("valid");
            cardExpdateMonth.classList.add("error");
            cardLabelExpdate.append(errorMessage("Invalid format, numbers only"));
        }

        if (cardExpdateMonthLength === 0) {
            removeMessage(cardLabelExpdate);

            if (validateKey(formChar, formKeyCode)) {
                cardAlert(cardFront);
            }

            cardExpdateMonth.classList.remove("valid");
            cardExpdateMonth.classList.add("error");
            cardLabelExpdate.append(errorMessage("Can't be blank"));
        }

        if (cardExpdateMonthLength > totalExpdateMonthLength) {
            cardAlert(cardFront);
            cardExpdateMonth.classList.remove("valid");
            cardExpdateMonth.classList.add("error");
            cardLabelExpdate.append(errorMessage("Can't be more than 2 digits in 'month'"));
        }
    })

    cardExpdateMonth.addEventListener("focusout", (event) => {
        event.preventDefault();

        let totalExpdateMonthLength = 2;
        let cardExpdateMonthValue = cardExpdateMonth.value;
        let cardExpdateMonthLength = cardExpdateMonth.value.length;

        cardExpdateMonth.classList.remove("error");
        removeMessage(cardLabelExpdate);

        if (!validateExpdateValue(cardExpdateMonthValue)) {
            cardAlert(cardFront);
            cardExpdateMonth.classList.remove("valid");
            cardExpdateMonth.classList.add("error");
            cardLabelExpdate.append(errorMessage("Invalid format, numbers only"));
        }

        if (cardExpdateMonthLength > totalExpdateMonthLength) {
            removeMessage(cardLabelExpdate);
            cardAlert(cardFront);
            cardExpdateMonth.classList.remove("valid");
            cardExpdateMonth.classList.add("error");
            cardLabelExpdate.append(errorMessage("Can't be more than 2 digits"));
        }

        if (cardExpdateMonthLength < totalExpdateMonthLength) {
            removeMessage(cardLabelExpdate);
            cardAlert(cardFront);
            cardExpdateMonth.classList.remove("valid");
            cardExpdateMonth.classList.add("error");
            cardLabelExpdate.append(errorMessage("Can't be less than 2 digits"));
        }

        if (cardExpdateMonthLength === 0) {
            removeMessage(cardLabelExpdate);
            cardExpdateMonth.classList.remove("valid");
            cardExpdateMonth.classList.add("error");
            cardLabelExpdate.append(errorMessage("Can't be blank"));
        }

        if (cardExpdateMonth.value.length && cardExpdateYear.value.length) {
            validateDate();
        }
    })

    // Year
    cardExpdateYear.addEventListener("keyup", (event) => {
        event.preventDefault();

        let totalExpdateYearLength = 2;
        let formChar = event.key;
        let formKeyCode = event.code;
        let cardExpdateYearValue = cardExpdateYear.value;
        let cardExpdateYearLength = cardExpdateYear.value.length;

        cardExpdateYear.classList.remove("error");
        removeMessage(cardLabelExpdate);
        cardExpdateYear.classList.add("valid");

        cardTemplateExpdateYear.innerText = templateExpdate(cardExpdateYearValue);

        if (!validateExpdateValue(cardExpdateYearValue)) {
            cardAlert(cardFront);
            cardExpdateYear.classList.remove("valid");
            cardExpdateYear.classList.add("error");
            cardLabelExpdate.append(errorMessage("Invalid format, numbers only"));
        }

        if (cardExpdateYearLength === 0) {
            removeMessage(cardLabelExpdate);

            if (validateKey(formChar, formKeyCode)) {
                cardAlert(cardFront);
            }

            cardExpdateYear.classList.remove("valid");
            cardExpdateYear.classList.add("error");
            cardLabelExpdate.append(errorMessage("Can't be blank"));
        }

        if (cardExpdateYearLength > totalExpdateYearLength) {
            cardAlert(cardFront);
            cardExpdateYear.classList.remove("valid");
            cardExpdateYear.classList.add("error");
            cardLabelExpdate.append(errorMessage("Can't be more than 2 digits in 'Year'"));
        }
    })

    cardExpdateYear.addEventListener("focusout", (event) => {
        event.preventDefault();

        let totalExpdateYearLength = 2;
        let cardExpdateYearValue = cardExpdateYear.value;
        let cardExpdateYearLength = cardExpdateYear.value.length;

        cardExpdateYear.classList.remove("error");
        removeMessage(cardLabelExpdate);

        if (!validateExpdateValue(cardExpdateYearValue)) {
            cardAlert(cardFront);
            cardExpdateYear.classList.remove("valid");
            cardExpdateYear.classList.add("error");
            cardLabelExpdate.append(errorMessage("Invalid format, numbers only"));
        }

        if (cardExpdateYearLength > totalExpdateYearLength) {
            removeMessage(cardLabelExpdate);
            cardAlert(cardFront);
            cardExpdateYear.classList.remove("valid");
            cardExpdateYear.classList.add("error");
            cardLabelExpdate.append(errorMessage("Can't be more than 2 digits"));
        }

        if (cardExpdateYearLength < totalExpdateYearLength) {
            removeMessage(cardLabelExpdate);
            cardAlert(cardFront);
            cardExpdateYear.classList.remove("valid");
            cardExpdateYear.classList.add("error");
            cardLabelExpdate.append(errorMessage("Can't be less than 2 digits"));
        }

        if (cardExpdateYearLength === 0) {
            removeMessage(cardLabelExpdate);
            cardExpdateYear.classList.remove("valid");
            cardExpdateYear.classList.add("error");
            cardLabelExpdate.append(errorMessage("Can't be blank"));
        }

        if (cardExpdateMonth.value.length && cardExpdateYear.value.length) {
            validateDate();
        }
    })
}

export default validateExpdate;