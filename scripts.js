console.log("yo")

const calculator = document.querySelector(".calculator");
const keys = document.querySelectorAll(".calculator__keys button");
const display = document.querySelector(".calculator__display");
const  previousKeyType = calculator.dataset.previousKeyType

calculator.addEventListener("click", e => {
  if (e.target.matches("button")) {
    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const displayedNum = display.textContent;
    if (!action) {
      if (displayedNum === "0" || previousKeyType === "operator") {
        display.textContent = keyContent
      } else {
        display.textContent = displayedNum + keyContent
      }
    }
    if (
      action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide"
    ) {
      key.classList.add('is-depressed')

      calculator.dataset.previousKeyType = 'operator'
      const firstValue  = calculator.dataset.firstValue
      const operator = calculator.dataset.operator
      const secondValue = displayedNum

      if (firstValue && operator) {
        display.textContent = calculate(firstValue, operator, secondValue)
      }
      calculator.dataset.previousKeyType = "operator"
    }
    if (action === "decimal") {
      display.textContent = displayedNum + '.'
      calculator.dataset.previousKey = "decimal"
    }
    if (action === "clear") {
      console.log("clear key!")
    }
    if (action === "calculate") {
      const firstValue = calculator.dataset.firstValue 
      const operator = calculator.dataset.operator
      const secondValue = displayedNum

      display.textContent = calculate(firstValue, operator, secondValue)
    }
  }
})
// }

const calculate = (n1, operator, n2) => {
  let result = ''
  
  if (operator === 'add') {
    result = parseFloat(n1) + parseFloat(n2)
  } else if (operator === 'subtract') {
    result = parseFloat(n1) - parseFloat(n2)
  } else if (operator === 'multiply') {
    result = parseFloat(n1) * parseFloat(n2)
  } else if (operator === 'divide') {
    result = parseFloat(n1) / parseFloat(n2)
  }
  
  return result
}


