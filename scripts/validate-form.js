import { errorMessage, removeMessage } from "./message.js";
import success from "./success.js";
import { cardAlert, filterPureNumber, isAfterCurrentDate, validateCVCValue, validateDate, validateExpdateValue, validateNameValue, validateNumberValue } from "./validate.js";
import { cardBack, cardCvc, cardExpdateMonth, cardExpdateYear, cardForm, cardFront, cardLabelCvc, cardLabelExpdate, cardLabelName, cardLabelNumber, cardName, cardNumber, cardTemplateName, totalCvcLength, totalExpdateLength, totalNumberLength } from "./variables.js";

const validateForm = () => {

    cardForm.addEventListener("submit", (event) => {
        event.preventDefault();

        let valid = true;

        //Card name
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

        // Card number
        let cardNumberValue = cardNumber.value;

        if (filterPureNumber(cardNumberValue).length > totalNumberLength) {
            removeMessage(cardLabelNumber);
            cardAlert(cardFront);
            cardNumber.classList.remove("valid");
            cardNumber.classList.add("error");
            cardLabelNumber.append(errorMessage("Can't be more than 16 digits"));
            valid = false;
        }

        if (filterPureNumber(cardNumberValue).length < totalNumberLength) {
            removeMessage(cardLabelNumber);
            cardAlert(cardFront);
            cardNumber.classList.remove("valid");
            cardNumber.classList.add("error");
            cardLabelNumber.append(errorMessage("Can't be less than 16 digits"));
            valid = false;
        }

        if (!validateNumberValue(cardNumberValue)) {
            removeMessage(cardLabelNumber);
            cardAlert(cardFront);
            cardNumber.classList.remove("valid");
            cardNumber.classList.add("error");
            cardLabelNumber.append(errorMessage("Invalid format, numbers only"));
            valid = false;
        }

        if (cardNumberValue.length === 0) {
            removeMessage(cardLabelNumber);
            cardAlert(cardFront);
            cardNumber.classList.remove("valid");
            cardNumber.classList.add("error");
            cardLabelNumber.append(errorMessage("Can't be blank"));
            valid = false;
        }

        // Card expiration date
        let cardExpdateMonthValue = cardExpdateMonth.value;
        let cardExpdateYearValue = cardExpdateYear.value;

        if (cardExpdateMonthValue.length > totalExpdateLength || cardExpdateYearValue.length > totalExpdateLength) {
            removeMessage(cardLabelExpdate);
            cardAlert(cardFront);
            cardExpdateMonth.classList.remove("valid");
            cardExpdateYear.classList.remove("valid");
            cardExpdateMonth.classList.add("error");
            cardExpdateYear.classList.add("error");
            cardLabelExpdate.append(errorMessage("Can't be more than 2 digits"));
            valid = false;
        }

        if (cardExpdateMonthValue.length < totalExpdateLength || cardExpdateYearValue.length < totalExpdateLength) {
            removeMessage(cardLabelExpdate);
            cardAlert(cardFront);
            cardExpdateMonth.classList.remove("valid");
            cardExpdateYear.classList.remove("valid");
            cardExpdateMonth.classList.add("error");
            cardExpdateYear.classList.add("error");
            cardLabelExpdate.append(errorMessage("Can't be less than 2 digits"));
            valid = false;
        }

        if (!validateExpdateValue(cardExpdateMonthValue) || !validateExpdateValue(cardExpdateYearValue)) {
            removeMessage(cardLabelExpdate);
            cardAlert(cardFront);
            cardExpdateMonth.classList.remove("valid");
            cardExpdateYear.classList.remove("valid");
            cardExpdateMonth.classList.add("error");
            cardExpdateYear.classList.add("error");
            cardLabelExpdate.append(errorMessage("Invalid format, numbers only"));
            valid = false;
        }

        if (cardExpdateMonthValue.length && cardExpdateYearValue.length) {

            removeMessage(cardLabelExpdate);

            if (!validateDate(cardExpdateMonth.value, cardExpdateYearValue)
                && (validateExpdateValue(cardExpdateMonthValue) && validateExpdateValue(cardExpdateYearValue))
                && (cardExpdateMonthValue.length === totalExpdateLength && cardExpdateYearValue.length === totalExpdateLength)) {

                cardAlert(cardFront);
                cardExpdateMonth.classList.remove("valid");
                cardExpdateYear.classList.remove("valid");
                cardExpdateMonth.classList.add("error");
                cardExpdateYear.classList.add("error");
                cardLabelExpdate.append(errorMessage("Invalid date"));
                valid = false;
            }

            if (!isAfterCurrentDate(cardExpdateMonthValue, cardExpdateYearValue)
                && (validateExpdateValue(cardExpdateMonthValue) && validateExpdateValue(cardExpdateYearValue))
                && (cardExpdateMonthValue.length === totalExpdateLength && cardExpdateYearValue.length === totalExpdateLength)) {
                cardAlert(cardFront);
                cardExpdateMonth.classList.remove("valid");
                cardExpdateYear.classList.remove("valid");
                cardExpdateMonth.classList.add("error");
                cardExpdateYear.classList.add("error");
                cardLabelExpdate.append(errorMessage("Can't be past date"));
                valid = false;
            }
        }

        if (cardExpdateMonthValue.length === 0 || cardExpdateYearValue.length === 0) {
            removeMessage(cardLabelExpdate);
            cardAlert(cardFront);
            cardExpdateMonth.classList.remove("valid");
            cardExpdateYear.classList.remove("valid");
            cardExpdateMonth.classList.add("error");
            cardExpdateYear.classList.add("error");
            cardLabelExpdate.append(errorMessage("Can't be blank"));
            valid = false;
        }

        // Card CVC
        let cardCvcValue = cardCvc.value;

        if (filterPureNumber(cardCvcValue).length > totalCvcLength) {
            removeMessage(cardLabelCvc);
            cardAlert(cardBack);
            cardCvc.classList.remove("valid");
            cardCvc.classList.add("error");
            cardLabelCvc.append(errorMessage("Can't be more than 3 digits"));
            valid = false;
        }

        if (filterPureNumber(cardCvcValue).length < totalCvcLength) {
            removeMessage(cardLabelCvc);
            cardAlert(cardBack);
            cardCvc.classList.remove("valid");
            cardCvc.classList.add("error");
            cardLabelCvc.append(errorMessage("Can't be less than 3 digits"));
            valid = false;
        }

        if (!validateCVCValue(cardCvcValue)) {
            removeMessage(cardLabelCvc);
            cardAlert(cardBack);
            cardCvc.classList.remove("valid");
            cardCvc.classList.add("error");
            cardLabelCvc.append(errorMessage("Invalid format, numbers only"));
            valid = false;
        }

        if (cardCvcValue.length === 0) {
            removeMessage(cardLabelCvc);
            cardAlert(cardBack);
            cardCvc.classList.remove("valid");
            cardCvc.classList.add("error");
            cardLabelCvc.append(errorMessage("Can't be blank"));
            valid = false;
        }

        if (valid) {
            console.log({
                card_name: cardTemplateName.innerText,
                card_number: filterPureNumber(cardNumberValue),
                card_exp_date: `${cardExpdateMonthValue}/${cardExpdateYearValue}`,
                card_cvc: cardCvcValue
            });

            success();
        }
    })
}

export default validateForm;