let counter = document.querySelector('.counter')

let increment = document.querySelector("#increment-btn").addEventListener('click', () => {
    let num = ++counter.innerHTML
    counter.innerHTML = num
})

const reset = document.querySelector("#reset-btn").addEventListener("click", () => {
    counter.innerHTML = 0
})
