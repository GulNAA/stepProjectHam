let num1=parseInt(prompt("Enter first number: "));
let num2=parseInt(prompt("Enter second number: "));
let operation=prompt("Enter operation: ");
while(!(operation==="*" || operation==="+" || operation==="-" || operation==="/")){
  operation=prompt("enter the correct operation");}
  function calculate() {

    if (operation == "*" ){
        alert(num1 * num2)
    }
    else if(operation == "+"){
      alert(num1 + num2)

    }
    else if(operation == "/"){
      alert(num1 / num2)

    }
    else {
      alert(num1 - num2 )
    }
  }

calculate();