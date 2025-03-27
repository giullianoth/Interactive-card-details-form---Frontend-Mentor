import { cardForm, reloadButton } from "./variables.js"

export default function Success() {
    let { parentElement } = cardForm

    parentElement.innerHTML = `
        <div class="card-confirm">
            <img src="/assets/images/icon-complete.svg" alt="Confirmed">
            <p class="card-confirm__title">Thank you!</p>
            <p class="card-confirm__subtitle">We've added your card details<br>(view in browser console)</p>
            <button class="j_reload">Continue</button>
        </div>
    `

    reloadButton().addEventListener("click", () => location.reload())
}