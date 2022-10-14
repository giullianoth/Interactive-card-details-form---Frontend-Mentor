const cardName = document.querySelector(".j_card_name");
const cardLabelName = document.querySelector(".j_card_label_name");
const cardTemplateName = document.querySelector(".j_card_template_name");
const cardFront = document.querySelector(".j_card_front");

const cardNameKeysNotAccepted = ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "_", "{", "|", "}"];

const errorMessage = (text) => {
    let spanMessage = document.createElement("span");
    spanMessage.className = "message";
    spanMessage.innerText = text;
    return spanMessage;
}

const cardAlert = (card) => {
    card.classList.add("card_alert");
    setTimeout(() => {
        card.classList.remove("card_alert");
    }, 300);
}

const ckeckNameValue = (data) => {
    if (data === "") {
        return false;
    }
    for (let i = 0; i <= 9; i++) {
        if (data.includes(i)) {
            return false;
        }
    }
    return true;
}

cardName.addEventListener("keyup", (event) => {
    event.preventDefault();

    let formChar = event.key;
    let formKeyCode = event.code;
    let cardNameValue = cardName.value;
    let cardNameLength = cardName.value.length;

    cardName.classList.remove("error");

    if (cardLabelName.lastElementChild.classList.contains("message")) {
        cardLabelName.lastElementChild.remove();
    }

    if (formKeyCode.includes("Key") || formKeyCode === "Space" || formKeyCode === "Semicolon") {

        if (!ckeckNameValue(cardNameValue)) {
            cardAlert(cardFront);
            cardName.classList.add("error");

            if (cardNameLength >= 1) {
                cardLabelName.append(errorMessage("Invalid format, letters only"));
            }
        }

        cardTemplateName.innerText = cardNameValue;

    } else if (formKeyCode === "Backspace" || formKeyCode === "Delete") {

        if (!ckeckNameValue(cardNameValue)) {
            cardAlert(cardFront);
            cardName.classList.add("error");

            if (cardNameLength >= 1) {
                cardLabelName.append(errorMessage("Invalid format, letters only"));
            }
        }

        cardTemplateName.innerText = cardNameValue;

        if (cardNameLength < 1) {
            cardLabelName.append(errorMessage("Can't be blank"));
            cardTemplateName.innerText = "---";
            cardName.classList.add("error");
        }
    } else {
        if (cardNameKeysNotAccepted.includes(formChar) || formKeyCode.includes("Digit") || formKeyCode.includes("Numpad")) {
            cardTemplateName.innerText = cardNameValue;
            cardAlert(cardFront);
            cardLabelName.append(errorMessage("Invalid format, letters only"));
            cardName.classList.add("error");
        }
    }
})

cardName.addEventListener("focusout", (event) => {
    event.preventDefault();

    let cardNameValue = cardName.value;
    let cardNameLength = cardName.value.length;

    if (cardLabelName.lastElementChild.classList.contains("message")) {
        cardLabelName.lastElementChild.remove();
    }

    if (!ckeckNameValue(cardNameValue)) {
        cardAlert(cardFront);
        cardName.classList.add("error");
        
        if (cardNameLength < 1) {
            cardLabelName.append(errorMessage("Can't be blank"));
        } else {
            cardLabelName.append(errorMessage("Invalid format, letters only"));
        }
    } else {
        cardName.classList.add("valid");
    }
})