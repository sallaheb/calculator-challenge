const displayTop = document.querySelector('.screendisplay__top');
const buttonsNumber = document.querySelectorAll(".num");
const equalOperator = document.getElementById("equalsign");
const deleteButton = document.getElementById("delete");
const clearButton = document.getElementById("clear");
const bottomScreen = document.querySelector('.screendisplay__bottom');

let num1;
let num2;
let operatorSym;

// use parent class if bubbling method is used // otherwise use child if foreach is used // create a cnst to store something using bubbling sometimes

// const calculator = {
//   operator:"",
//   firstNumber:0,
//   SecondNumber:"",


// };


// const calcArray = [...""]; 

// const firstNumbertop = () => {

//   const num1 = calcArray.map(num=>num).pop();

//   console.log(num1);

// }



const operatorSymbols = document.querySelectorAll('.operators');

for (symbol of operatorSymbols) {
  symbol.addEventListener('click', (event) => {
    displayTop.innerHTML += event.target.innerHTML;

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

const calculate = (num1, num2, operator) => {
  if (operator === "+") {
    return parseInt(num1) + parseInt(num2);
  } else if (operator === "-") {
    console.log(true )
    return parseInt(num1) - parseInt(num2);
  } else if (operator === "x") {
    return parseInt(num1) * parseInt(num2);
  } else if (operator === "÷") {
    return parseInt(num1) / parseInt(num2);
  } else if (operator === "÷") {
    return parseInt(num1) / parseInt(num2);
  } else if (operator === "%") {
    return parseInt(num1) / parseInt(num2) * 100;
  }

}





equalOperator.addEventListener('click', (event)=> {
  bottomScreen.innerHTML = calculate(num1, num2, operatorSym)
})




