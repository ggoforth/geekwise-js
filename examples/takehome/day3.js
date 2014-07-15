//Prompt the user for a starting number
//Prompt the user for an ending number
//These numbers will become the start and end points for our loop.  If either number is not a
//number, alert to the user that only numbers can be entered.  (no further action should take
//place, if / else will be handy here)
//Parse the start and stop points into numbers and store them in variables you can use later
//Create a loop (for or while, you choose) that will loop starting at the starting number,
//and end on the ending number.
//For each loop, log to the console if the number is even or odd (remember our % operator :)

//collect the start and end numbers for our loop
var start = parseInt(prompt("Enter a starting number", 1));
var end = parseInt(prompt("Enter an ending number", 100));

//if the start and stop aren't numbers, tell the user we only want numbers.
if (isNaN(start) || isNaN(end)) {
    alert("only enter numbers");
} else {
    //if the start is greater than the end, our loop will never run
    if (start > end) {
        alert("Start must be a smaller number than end");
    } else {
        //we've satisfied all the conditions for our program, so we can
        //continue with the logging of even or odd
        for (var i = start; i <= end; i++) {
            console.log(i, i % 2 === 0 ? "even" : "odd");
        }
    }
}

function adder() {
    var result = 0;

    for (var i = 0; i < arguments.length; i++) {
        if (!isNaN(arguments[i])) {
            result += arguments[i];
        }
    }

    return result;
}
