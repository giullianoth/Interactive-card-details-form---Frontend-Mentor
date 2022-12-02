const reload = () => { location.reload() }

const successArea = () => {
    let successArea = document.createElement("div");
    let successAreaImage = document.createElement("div");
    let successAreaTitle = document.createElement("header");
    let successAreaButton = document.createElement("div");

    successArea.className = "card_form_success";
    successAreaImage.className = "card_form_success_icon";
    successAreaTitle.className = "card_form_success_title";
    successAreaButton.className = "card_form_success_btn";

    successAreaImage.innerHTML = "<img src=\"images/icon-complete.svg\" alt=\"Success\">";
    successAreaTitle.innerHTML = "<h2>Thank you!</h2><p>We've added your card details</p>";
    successAreaButton.innerHTML = "<button class=\"j_continue\">Continue</button>";

    successArea.innerHTML = successAreaImage.outerHTML + successAreaTitle.outerHTML + successAreaButton.outerHTML;

    return successArea;
}

const success = () => {

    const cardFormArea = document.querySelector(".card_form");

    cardFormArea.querySelector(".card_form_content").remove();
    cardFormArea.append(successArea());
    cardFormArea.querySelector(".j_continue").addEventListener("click", reload);

}

export default success;