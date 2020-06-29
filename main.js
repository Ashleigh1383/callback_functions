// Create a calculator function which accepts two numbers and an operator function(c callback)

// Create buttons on the page for Add, Multiply, and Divide,
// and write a click event listener for each button, which calls the calculator
// with the correct x and y values and the correct callback function.
// You will need two textboxes: one for x, and one for y.


const addButton = document.querySelector(".add")
const multiplyButton = document.querySelector(".multiply")
const divideButton = document.querySelector(".divide")
const xInput = document.querySelector("#x")
const yInput = document.querySelector("#y")
const outputElement = document.querySelector("#output")



// const add = (x, y) => x + y
function add (x, y) {
    return x + y
}
function multiply (x, y) {
    return x * y
}
function divide (x, y){
    return x / y
}

function calculator (x, y, callback){
    return callback(x, y)
}
const addOutput = calculator(5, 5, add)
const multiplyOutput = calculator(1, 2, multiply)
const divideOutput = calculator(10, 2, divide)


addButton.addEventListener("click", function() {
    const x = Number(xInput.value)
    const y = Number(yInput.value)
    const result = calculator(x, y, add)
    outputElement.innerHTML = result
})
multiplyButton.addEventListener("click", function() {
    const x = Number(xInput.value)
    const y = Number(yInput.value)
    const result = calculator(x, y, multiply)
    outputElement.innerHTML = result
})
divideButton.addEventListener("click", function() {
    const x = Number(xInput.value)
    const y = Number(yInput.value)
    const result = calculator(x, y, divide)
    outputElement.innerHTML = result
})


