// Card Data
export const cardData = {
    name: "",
    number: "",
    expirationDate: "",
    cvc: ""
}

// Card template
export const cardFront = document.querySelector(".j_card_front")
export const cardBack = document.querySelector(".j_card_back")

// Card Form
export const cardForm = document.querySelector(".j_card_form")

// Cardholder name
export const cardNameLabel = document.querySelector(".j_card_form_name")
export const cardNameTemplate = document.querySelector(".j_card_template_name")
export const cardName = cardNameLabel.querySelector("#name")
export const cardNameMaxLength = 25

// Card number
export const cardNumberLabel = document.querySelector(".j_card_form_number")
export const cartNumberTemplate = document.querySelector("j_card_template_number")
export const cardNumber = cardNumberLabel.querySelector("#number")
export const cardNumberMaxLength = 16

// Card expiration date
export const cardExpdateLabel = document.querySelector(".j_card_form_expdate")
export const cartExpdateMonthTemplate = document.querySelector("j_card_template_expdate_month")
export const cartExpdateYearTemplate = document.querySelector("j_card_template_expdate_year")
export const cardExpdateMonth = cardNumberLabel.querySelector("#exp-date-month")
export const cardExpdateYear = cardNumberLabel.querySelector("#exp-date-year")
export const cardExpdateMaxLength = 2

// Card CVC
export const cardCvcLabel = document.querySelector(".j_card_form_cvc")
export const cartCvcTemplate = document.querySelector("j_card_template_cvc")
export const cardCvc = cardNumberLabel.querySelector("#cvc")
export const cardCvcMaxLength = 3

// Card message Alert
export const messageAlert = label =>  label.querySelector(".message")

// Characters
export const accentuation = /[\u0300-\u036f]/g
export const specialChars = /[^a-zA-Z 0-9]+/g
export const numbers = /[0-9]/
export const onlyNumbers = /^[0-9]+$/