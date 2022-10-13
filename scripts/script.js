const cardName = document.querySelector(".j_card_name");
const cardTemplateName = document.querySelector(".j_card_template_name");

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
        cardName.classList.add("error");
        cardName.parentElement.append(errorMessage("Can't be blank"));
    }

    if (formKeyCode.substring(0, 3) === "Key" || formKeyCode === "Semicolon" || formKeyCode === "Space") {

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
        
        if (formKeyCode === "Backspace") {
            if (cardName.value.length !== 0) {
                cardTemplateName.innerHTML = cardName.value;
            } else {
                cardTemplateName.innerHTML = "---";
            }
        }
    }

    // console.log(cardName.value[cardName.value.length - 1]);
})