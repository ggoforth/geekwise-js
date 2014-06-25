//requirements are to collect the users first and last name,
//log their first name, alert their last name, and alert
//the result of a confirm.

//Going to start by collecting their name information
var firstName = prompt("What's your first name");
var lastName = prompt("What's your last name");

//now to log and alert the name pieces
console.log(firstName);
alert(lastName);

//finally, carry out the alerting of a confirm, note the
//nested function calls
alert(confirm("Are we done here?"));