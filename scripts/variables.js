const cardFront = document.querySelector(".j_card_front");

const cardName = document.querySelector(".j_card_name");
const cardLabelName = document.querySelector(".j_card_label_name");
const cardTemplateName = document.querySelector(".j_card_template_name");

const cardNumber = document.querySelector(".j_card_number");
const cardLabelNumber = document.querySelector(".j_card_label_number");
const cardTemplateNumber = document.querySelector(".j_card_template_number");

const cardExpdateMonth = document.querySelector(".j_card_exp_date_month");
const cardExpdateYear = document.querySelector(".j_card_exp_date_year");
const cardLabelExpdate = document.querySelector(".j_card_label_exp_date");
const cardTemplateExpdateMonth = document.querySelector(".j_card_template_exp_date_month");
const cardTemplateExpdateYear = document.querySelector(".j_card_template_exp_date_year");

const accentuation = /[\u0300-\u036f]/g;
const specialChars = /[^a-zA-Z 0-9]+/g;
const numbers = /[0-9]/;
const onlyNumbers = /^[0-9]+$/;

export {
    cardFront,
    cardName, cardLabelName, cardTemplateName,
    cardNumber, cardLabelNumber, cardTemplateNumber,
    cardExpdateMonth, cardExpdateYear, cardLabelExpdate, cardTemplateExpdateMonth, cardTemplateExpdateYear,
    accentuation, specialChars, numbers, onlyNumbers
};