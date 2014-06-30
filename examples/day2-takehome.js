//<li>Prompt for a number value (provide a default of 10)</li>
//<li>Prompt for another number value (provide a default of 10)</li>
//<li>Convert the promped values into integers.</li>
//<li>Make sure that the input from steps 1 and 2 are numbers.</li>
//<li>If they are numbers, add the numbers together and log the value to the console.</li>
//<li>If either of the prompted values are not numbers, alert someting to the user that they
//must input nubmers only.</li>

var num1 = parseInt(prompt("Input a number", 10));
var num2 = parseInt(prompt("Input another number", 10));

if (isNaN(num1) || isNaN(num2)) {
    alert("Only enter numbers!");
} else {
    console.log(num1 + num2);
}
