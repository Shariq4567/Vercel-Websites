let headings = document.getElementsByClassName('left-info-heading');
let headContainer = document.getElementsByClassName("head-container");
let colorInput = document.getElementById("color-input")?.value
let headingText = document.getElementsByClassName("left-info-text")
document.getElementById("color-set-button")?.addEventListener("click", () => {
    colorInput = document.getElementById("color-input")?.value
    for(let i = 0; i < headings.length; i++) {
        headings[i].style.color = colorInput
    }
    for(let i = 0; i < headingText.length; i++) {
        headingText[i].style.color = colorInput
    }
    headContainer[0].style.backgroundColor = colorInput
})