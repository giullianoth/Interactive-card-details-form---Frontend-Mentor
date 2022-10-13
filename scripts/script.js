const cardName = document.querySelector(".j_card_name");
const cardTemplateName = document.querySelector(".j_card_template_name");

const message = () => {
    
}

cardName.addEventListener("keyup", (event) => {
    event.preventDefault();

    if (cardName.value.length === 0) {
        cardName.classList.add("error");
    }

    if (event.code.substring(0, 3) === "Key" || event.code === "Semicolon" || event.code === "Space") {

        cardName.classList.remove("error");

        if (cardName.value.length === 0) {
            cardTemplateName.innerHTML = "---";
        } else if (cardName.value.length === 1) {
            cardTemplateName.innerHTML = "";
            cardTemplateName.textContent += event.key;
        } else if (cardName.value.length > 1) {
            cardTemplateName.textContent += event.key;
        }

    } else {
        
        if (event.code === "Backspace") {
            if (cardName.value.length !== 0) {
                cardTemplateName.innerHTML = cardName.value;
            } else {
                cardTemplateName.innerHTML = "---";
            }
        }
    }

    // console.log(cardName.value[cardName.value.length - 1]);
})