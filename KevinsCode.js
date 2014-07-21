var userInput = window.prompt("Enter a number")
var notEven = userInput%2
var numToPrint = 2 - notEven

while(numToPrint <= userInput)
{
	document.write(numToPrint, " ")
	numToPrint += 2
}
