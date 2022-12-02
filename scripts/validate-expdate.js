import { errorMessage, removeMessage } from "./message.js";
import { cardAlert, isAfterCurrentDate, validateDate, validateExpdateValue, validateKey } from "./validate.js";
import { cardExpdateMonth, cardExpdateYear, cardFront, cardLabelExpdate, cardTemplateExpdateMonth, cardTemplateExpdateYear, totalExpdateLength } from "./variables.js";

const templateExpdate = (date) => {
    let dateArray = date.split("");
    let templateDate = "--".split("");

    dateArray.forEach((digit, index) => {
        templateDate[index] = digit;
    });

    return templateDate.join("");
}

const validateExpdate = () => {

    // Month
    cardExpdateMonth.addEventListener("keyup", (event) => {
        event.preventDefault();

        let formChar = event.key;
        let formKeyCode = event.code;
        let cardExpdateMonthValue = cardExpdateMonth.value;
        let cardExpdateMonthLength = cardExpdateMonth.value.length;

        cardExpdateMonth.classList.remove("error");
        cardExpdateYear.classList.remove("error");
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

        if (cardExpdateMonthLength > totalExpdateLength) {
            cardAlert(cardFront);
            cardExpdateMonth.classList.remove("valid");
            cardExpdateMonth.classList.add("error");
            cardLabelExpdate.append(errorMessage(`Can't be more than ${totalExpdateLength} digits in 'month'`));
        }
    })

    cardExpdateMonth.addEventListener("focusout", (event) => {
        event.preventDefault();

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

        if (cardExpdateMonthLength > totalExpdateLength) {
            removeMessage(cardLabelExpdate);
            cardAlert(cardFront);
            cardExpdateMonth.classList.remove("valid");
            cardExpdateMonth.classList.add("error");
            cardLabelExpdate.append(errorMessage(`Can't be more than ${totalExpdateLength} digits in 'month'`));
        }

        if (cardExpdateMonthLength < totalExpdateLength) {
            removeMessage(cardLabelExpdate);
            cardAlert(cardFront);
            cardExpdateMonth.classList.remove("valid");
            cardExpdateMonth.classList.add("error");
            cardLabelExpdate.append(errorMessage(`Can't be less than ${totalExpdateLength} digits in 'month'`));
        }

        if (cardExpdateMonthLength === 0) {
            removeMessage(cardLabelExpdate);
            cardExpdateMonth.classList.remove("valid");
            cardExpdateMonth.classList.add("error");
            cardLabelExpdate.append(errorMessage("Can't be blank"));
        }

        if (cardExpdateMonth.value.length && cardExpdateYear.value.length) {
            
            if (!validateDate(cardExpdateMonthValue, cardExpdateYear.value)) {
                cardAlert(cardFront);
                cardExpdateMonth.classList.remove("valid");
                cardExpdateYear.classList.remove("valid");
                cardExpdateMonth.classList.add("error");
                cardExpdateYear.classList.add("error");
                cardLabelExpdate.append(errorMessage("Invalid date"));
            }

            if (!isAfterCurrentDate(cardExpdateMonthValue, cardExpdateYear.value)) {
                cardAlert(cardFront);
                cardExpdateMonth.classList.remove("valid");
                cardExpdateYear.classList.remove("valid");
                cardExpdateMonth.classList.add("error");
                cardExpdateYear.classList.add("error");
                cardLabelExpdate.append(errorMessage("Can't be past date"));
            }
        }
    })

    // Year
    cardExpdateYear.addEventListener("keyup", (event) => {
        event.preventDefault();

        let formChar = event.key;
        let formKeyCode = event.code;
        let cardExpdateYearValue = cardExpdateYear.value;
        let cardExpdateYearLength = cardExpdateYear.value.length;

        cardExpdateMonth.classList.remove("error");
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

        if (cardExpdateYearLength > totalExpdateLength) {
            cardAlert(cardFront);
            cardExpdateYear.classList.remove("valid");
            cardExpdateYear.classList.add("error");
            cardLabelExpdate.append(errorMessage(`Can't be more than ${totalExpdateLength} digits in 'year'`));
        }
    })

    cardExpdateYear.addEventListener("focusout", (event) => {
        event.preventDefault();

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

        if (cardExpdateYearLength > totalExpdateLength) {
            removeMessage(cardLabelExpdate);
            cardAlert(cardFront);
            cardExpdateYear.classList.remove("valid");
            cardExpdateYear.classList.add("error");
            cardLabelExpdate.append(errorMessage(`Can't be more than ${totalExpdateLength} digits in 'year'`));
        }

        if (cardExpdateYearLength < totalExpdateLength) {
            removeMessage(cardLabelExpdate);
            cardAlert(cardFront);
            cardExpdateYear.classList.remove("valid");
            cardExpdateYear.classList.add("error");
            cardLabelExpdate.append(errorMessage(`Can't be more than ${totalExpdateLength} digits in 'year'`));
        }

        if (cardExpdateYearLength === 0) {
            removeMessage(cardLabelExpdate);
            cardExpdateYear.classList.remove("valid");
            cardExpdateYear.classList.add("error");
            cardLabelExpdate.append(errorMessage("Can't be blank"));
        }

        if (cardExpdateMonth.value.length && cardExpdateYear.value.length) {

            if (!validateDate(cardExpdateMonth.value, cardExpdateYearValue)) {
                cardAlert(cardFront);
                cardExpdateMonth.classList.remove("valid");
                cardExpdateYear.classList.remove("valid");
                cardExpdateMonth.classList.add("error");
                cardExpdateYear.classList.add("error");
                cardLabelExpdate.append(errorMessage("Invalid date"));
            }

            if (!isAfterCurrentDate(cardExpdateMonth.value, cardExpdateYearValue)) {
                cardAlert(cardFront);
                cardExpdateMonth.classList.remove("valid");
                cardExpdateYear.classList.remove("valid");
                cardExpdateMonth.classList.add("error");
                cardExpdateYear.classList.add("error");
                cardLabelExpdate.append(errorMessage("Can't be past date"));
            }
        }
    })
}

export default validateExpdate;