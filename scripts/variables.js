// Card template
const cardFront = document.querySelector(".j_card_front");
const cardBack = document.querySelector(".j_card_back");

// Cardholder name
const cardName = document.querySelector(".j_card_name");
const cardLabelName = document.querySelector(".j_card_label_name");
const cardTemplateName = document.querySelector(".j_card_template_name");

// Cardholder number
const cardNumber = document.querySelector(".j_card_number");
const cardLabelNumber = document.querySelector(".j_card_label_number");
const cardTemplateNumber = document.querySelector(".j_card_template_number");

// Cardholder expiration date
const cardExpdateMonth = document.querySelector(".j_card_exp_date_month");
const cardExpdateYear = document.querySelector(".j_card_exp_date_year");
const cardLabelExpdate = document.querySelector(".j_card_label_exp_date");
const cardTemplateExpdateMonth = document.querySelector(".j_card_template_exp_date_month");
const cardTemplateExpdateYear = document.querySelector(".j_card_template_exp_date_year");

// Cardholder expiration CVC
const cardCvc = document.querySelector(".j_card_cvc");
const cardLabelCvc = document.querySelector(".j_card_label_cvc");
const cardTemplateCvc = document.querySelector(".j_card_template_cvc");

const accentuation = /[\u0300-\u036f]/g;
const specialChars = /[^a-zA-Z 0-9]+/g;
const numbers = /[0-9]/;
const onlyNumbers = /^[0-9]+$/;

export {
    cardFront, cardBack,
    cardName, cardLabelName, cardTemplateName,
    cardNumber, cardLabelNumber, cardTemplateNumber,
    cardExpdateMonth, cardExpdateYear, cardLabelExpdate, cardTemplateExpdateMonth, cardTemplateExpdateYear,
    cardCvc, cardLabelCvc, cardTemplateCvc,
    accentuation, specialChars, numbers, onlyNumbers
};