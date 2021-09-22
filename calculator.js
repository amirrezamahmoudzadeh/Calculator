// Calculator

const display = document.getElementById("display");
const buttons = document.getElementById("buttons");
const clearButton = document.getElementById("clear");
const backButton = document.getElementById("backspace");
const minusButton = document.getElementById("minus");
const plusButton = document.getElementById("plus");
const divideButton = document.getElementById("divide");
const multiplyButton = document.getElementById("multiply");
const equalButton = document.getElementById("equal");
const squareButton = document.getElementById("square");
const rootButton = document.getElementById("root");

let lastOperation = "";
let memory = 0;

// inputing the numbers correctly

buttons.addEventListener("click", (event) => {
  if (display.innerHTML.length > 15) {
    return;
  } else {
    data = event.target.dataset.input;
    if (data) {
      if (data === ".") {
        if (!display.innerHTML.includes(".")) {
          display.innerHTML += data;
        }
      } else {
        if (display.innerHTML.includes(".")) {
          display.innerHTML += data;
        } else {
          display.innerHTML += data;
          display.innerHTML = Number(display.innerHTML);
        }
      }
    }
  }
});

// add event listener for operators

// divide

divideButton.addEventListener("click", () => {
  lastOperation = "divide";
  memory = display.innerHTML;
  display.innerHTML = 0;
});

//multiply

multiplyButton.addEventListener("click", () => {
  lastOperation = "multiply";
  memory = display.innerHTML;
  display.innerHTML = 0;
});

//minus

minusButton.addEventListener("click", () => {
  lastOperation = "minus";
  memory = display.innerHTML;
  display.innerHTML = 0;
});

//plus

plusButton.addEventListener("click", () => {
  lastOperation = "plus";
  memory = display.innerHTML;
  display.innerHTML = 0;
});

//clear button

clearButton.addEventListener("click", () => {
  lastOperation = "";
  memory = 0;
  display.innerHTML = 0;
});

//backspace button

backButton.addEventListener("click", () => {
  if (display.innerHTML.length === 1) {
    display.innerHTML = 0;
  } else {
    display.innerHTML = display.innerHTML.substring(
      0,
      display.innerHTML.length - 1
    );
  }
});

//squre button

squareButton.addEventListener('click' , ()=> {
    lastOperation = 'square'
    memory = display.innerHTML
    display.innerHTML = 0
})



//equal button

equalButton.addEventListener("click", () => {
  let currentValue = Number(display.innerHTML);
  if (lastOperation === "plus") {
    display.innerHTML = Number(memory) + currentValue;
    lastOperation = "";
  }
  if (lastOperation === "minus") {
    display.innerHTML = Number(memory) - currentValue;
    lastOperation = "";
  }
  if (lastOperation === "divide") {
    display.innerHTML = Number(memory) / currentValue;
    lastOperation = "";
  }
  if (lastOperation === "multiply") {
    display.innerHTML = Number(memory) * currentValue;
    lastOperation = "";
  }
  if (lastOperation === "square") {
      display.innerHTML = Number(memory) ** currentValue
  }
});

// root button

rootButton.addEventListener('click' , ()=> {
    display.innerHTML = Math.sqrt(Number(display.innerHTML)) 
    lastOperation = ''
})

document.body.addEventListener('keypress', (event) => {
    console.log(event.code);
})