const cardFront = document.querySelector(".j_card_front");

const cardName = document.querySelector(".j_card_name");
const cardLabelName = document.querySelector(".j_card_label_name");
const cardTemplateName = document.querySelector(".j_card_template_name");

const cardNumber = document.querySelector(".j_card_number");
const cardLabelNumber = document.querySelector(".j_card_label_number");
const cardTemplateNumber = document.querySelector(".j_card_template_number");

const accentuation = /[\u0300-\u036f]/g;
const specialChars = /[^a-zA-Z 0-9]+/g;
const numbers = /[0-9]/;
const onlyNumbers = /^[0-9]+$/;

export {
    cardFront,
    cardName, cardLabelName, cardTemplateName,
    cardNumber, cardLabelNumber, cardTemplateNumber,
    accentuation, specialChars, numbers, onlyNumbers
};