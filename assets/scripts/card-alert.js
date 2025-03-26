export function errorMessage(message, inputName, label) {
    const messageArea = label.querySelector(".message")
    const labelInput = label.querySelector(`#${inputName}`)
    messageArea.innerText = message
    labelInput.classList.add("error")
}

export function removeErrorMessage(inputName, label) {
    const messageArea = label.querySelector(".message")
    const labelInput = label.querySelector(`#${inputName}`)
    messageArea.innerText = ""
    labelInput.classList.remove("error")
}

export function cardAlertAnimate(card) {
    card.classList.add("alert")
    
    setTimeout(() => {
        card.classList.remove("alert");
    }, 300)
}