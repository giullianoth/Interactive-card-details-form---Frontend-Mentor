const errorMessage = (text) => {
    let spanMessage = document.createElement("span");
    spanMessage.className = "message";
    spanMessage.innerText = text;
    return spanMessage;
}

const removeMessage = (label) => {
    if (label.lastElementChild.classList.contains("message")) {
        label.lastElementChild.remove();
    }
}

export { errorMessage, removeMessage };