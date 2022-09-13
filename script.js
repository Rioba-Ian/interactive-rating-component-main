const ratingsToggle = document.getElementById("ratings")
const thankyouToggle = document.getElementById("thankyou")
const submitBtn = document.getElementById("submit")

console.log("I exist.");

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    ratingsToggle.style.display = "none"
    thankyouToggle.style.display = "flex"
    console.log("I have been clicked. ");
})