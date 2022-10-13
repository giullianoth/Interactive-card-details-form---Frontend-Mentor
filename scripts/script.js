const cardName = document.querySelector(".j_card_name");
const cardTemplateName = document.querySelector(".j_card_template_name");
const cardFront = document.querySelector(".j_card_front");

const errorMessage = (text) => {
    let spanMessage = document.createElement("span");
    spanMessage.className = "message";
    spanMessage.innerText = text;
    return spanMessage;
}

cardName.addEventListener("keyup", (event) => {
    event.preventDefault();

    let formChar = event.key;
    let formKeyCode = event.code;

    if (cardName.value.length === 0 && !cardName.parentElement.lastElementChild.classList.contains("message")) {
        cardFront.classList.add("card_alert");
        cardName.classList.add("error");
        cardName.parentElement.append(errorMessage("Can't be blank"));
    }

    if (formKeyCode.substring(0, 3) === "Key" || formKeyCode === "Semicolon" || formKeyCode === "Space") {

        cardFront.classList.remove("card_alert");
        cardName.classList.remove("error");

        if (cardName.parentElement.lastElementChild.classList.contains("message")) {
            cardName.parentElement.lastElementChild.remove();
        }

        if (cardName.value.length === 0) {
            cardTemplateName.innerHTML = "---";
        } else if (cardName.value.length === 1) {
            cardTemplateName.innerHTML = "";
            cardTemplateName.textContent += formChar;
        } else if (cardName.value.length > 1) {
            cardTemplateName.textContent += formChar;
        }

    } else {

        if (formKeyCode === "Backspace" || formKeyCode === "Delete") {
            if (cardName.value.length !== 0) {
                cardTemplateName.innerHTML = cardName.value;
            } else {
                cardTemplateName.innerHTML = "---";
            }
        } else {

            cardFront.classList.add("card_alert");
            if (!cardName.parentElement.lastElementChild.classList.contains("message")) {
                cardName.classList.add("error");
                cardName.parentElement.append(errorMessage("Invalid format, letters only"));
            }
            
            if (cardName.value.length === 0) {
                cardFront.classList.remove("card_alert");
                cardTemplateName.innerHTML = "---";
            } else if (cardName.value.length === 1) {
                cardTemplateName.innerHTML = "";
                cardTemplateName.textContent += formChar;
            } else if (cardName.value.length > 1) {
                cardTemplateName.textContent += formChar;
            }
        }
    }

    console.log(formKeyCode);
})