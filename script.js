const ratings = document.querySelectorAll(".select")
const submitBtn = document.getElementById("submit")
const score = document.querySelector(".aside-rating-btns")
const scoreCard = document.getElementById("ratings")

const thankyou = document.getElementById("thankyou")

let answerValue = ''

const result = document.querySelector(".result")

console.log("I exist.");

ratings.forEach((rating, index) => {
    rating.addEventListener("click", (e) => {
        e.preventDefault()
        console.log("clicked.");
        const current = e.target.value
        console.log(current);

        if (current === 0) {
            console.error("Nothing has been clicked");
        }
        else {
            answerValue = current
            console.log(answerValue);
        }
    })
})

function storeAnswer(answerValue) {
    result.innerHTML = answerValue
}

submitBtn.addEventListener('click', () => {
    scoreCard.style.display = 'none'
    thankyou.style.display = 'flex'
    storeAnswer(answerValue)
    // console.log("it works");
})

