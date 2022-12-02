// Card template
const cardFront = document.querySelector(".j_card_front");
const cardBack = document.querySelector(".j_card_back");

// Card Form
const cardForm = document.querySelector(".j_card_form");

// Cardholder name
const cardName = document.querySelector(".j_card_name");
const cardLabelName = document.querySelector(".j_card_label_name");
const cardTemplateName = document.querySelector(".j_card_template_name");

// Cardholder number
const cardNumber = document.querySelector(".j_card_number");
const cardLabelNumber = document.querySelector(".j_card_label_number");
const cardTemplateNumber = document.querySelector(".j_card_template_number");
const totalNumberLength = 16;

// Cardholder expiration date
const cardExpdateMonth = document.querySelector(".j_card_exp_date_month");
const cardExpdateYear = document.querySelector(".j_card_exp_date_year");
const cardLabelExpdate = document.querySelector(".j_card_label_exp_date");
const cardTemplateExpdateMonth = document.querySelector(".j_card_template_exp_date_month");
const cardTemplateExpdateYear = document.querySelector(".j_card_template_exp_date_year");
const totalExpdateLength = 2;

// Cardholder expiration CVC
const cardCvc = document.querySelector(".j_card_cvc");
const cardLabelCvc = document.querySelector(".j_card_label_cvc");
const cardTemplateCvc = document.querySelector(".j_card_template_cvc");
const totalCvcLength = 3;

// Chars in regex
const accentuation = /[\u0300-\u036f]/g;
const specialChars = /[^a-zA-Z 0-9]+/g;
const numbers = /[0-9]/;
const onlyNumbers = /^[0-9]+$/;

export {
    cardFront, cardBack, cardForm,
    cardName, cardLabelName, cardTemplateName,
    cardNumber, cardLabelNumber, cardTemplateNumber, totalNumberLength,
    cardExpdateMonth, cardExpdateYear, cardLabelExpdate, cardTemplateExpdateMonth, cardTemplateExpdateYear, totalExpdateLength,
    cardCvc, cardLabelCvc, cardTemplateCvc, totalCvcLength,
    accentuation, specialChars, numbers, onlyNumbers
};