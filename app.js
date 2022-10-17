//delete input value
function DeleteMe() {
   document.getElementById("MyResult").value = "";
}
//input value show func
function calculator(NewValue) {
   document.getElementById("MyResult").value += NewValue;
}
//calculate value and show output  
function Answer() {
   const myResult = document.getElementById("MyResult").value;
   var evalValue = eval(myResult);
   document.getElementById("MyResult").value = evalValue;
}
