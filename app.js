const displayTop = document.querySelector('.screendisplay__top');
const buttonsNumber = document.querySelectorAll(".num");
const equalOperator = document.getElementById("equalsign");
const deleteButton = document.getElementById("delete");
const clearButton = document.getElementById("clear");
const bottomScreen = document.querySelector('.screendisplay__bottom');

let num1 = 0;
let num2 = 0;
let operatorSym;

const operatorSymbols = document.querySelectorAll('.operators');

for (symbol of operatorSymbols) {
  symbol.addEventListener('click', (event) => {
    displayTop.innerHTML += event.target.innerHTML;
    displayTop.innerHTML="";
    operatorSym = event.target.innerHTML;

    console.log(operatorSym);
  } )
}


for (button of buttonsNumber) {
  button.addEventListener('click', (event) => {
    
    event.preventDefault();

    displayTop.innerHTML += event.target.innerHTML;
   
    if (num1 && operatorSym) {

      num2 = displayTop.innerHTML;

      console.log(num2);
      
    } else {
      num1 = displayTop.innerHTML
      console.log(num1);

    }
   
 
})

}


const clear = (num1, num2, operator) => {
  if (num1 || num2 || operator) {
    return "";
  }
}



const calculate = (num1, num2, operator) => {
  if (operator === "+") {
    return parseInt(num1) + parseInt(num2);
  } else if (operator === "-") {
    return parseInt(num1) - parseInt(num2);
  } else if (operator === "x") {
    return parseInt(num1) * parseInt(num2);
  } else if (operator === "÷") {
    return parseInt(num1) / parseInt(num2);
  } else if (operator === "÷") {
    return parseInt(num1) / parseInt(num2);
  } else if (operator === "%") {
    return parseInt(num1) / 100 || parseInt(num2) / 100;
  } else {
    return;
  }

}



equalOperator.addEventListener('click', (event)=> {
  bottomScreen.innerHTML = calculate(num1, num2, operatorSym);
  displayTop.innerHTML = clear(num1, num2, operatorSym);
  
  
})

  
clearButton.addEventListener('click', (event)=> {
  bottomScreen.innerHTML = clear (num1, num2, operatorSym);
  displayTop.innerHTML = clear (num1, num2, operatorSym);
})
