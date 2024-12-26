let number = document.getElementById("number")
const decreaseButton = document.getElementById("decreaseButton")
const resetButton = document.getElementById("resetButton")
const increaseButton = document.getElementById("increaseButton")

function blackColor() {
  if (Number(number.innerHTML) === 0) {
    number.style.color = "black"
  }
}

function decrementHandler() {
  number.innerHTML = Number(number.innerHTML) - 1;

  if (Number(number.innerHTML) < 0) {
    number.style.color = "red"
  }

  blackColor()
}

function incrementHandler() {
  number.innerHTML = Number(number.innerHTML) + 1;

  if (Number(number.innerHTML) > 0) {
    number.style.color = "green"
  }

  blackColor()
}

function resetHandler() {
  number.innerHTML = 0

  blackColor()
}
