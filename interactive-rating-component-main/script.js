const mainContainer = document.querySelector(".container");
const thanksContainer = document.querySelector(".thank-you");
const submitButton = document.getElementById("submit");
const rating = document.getElementById("rating");
const rates = document.querySelector(".button")

submitButton.addEventListener("click", () =>{
    thanksContainer.classList.remove("hidden");
    mainContainer.style.display = "none";
})

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})