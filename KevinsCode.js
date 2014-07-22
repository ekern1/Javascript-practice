var userInput = window.prompt("Enter a number")

if(isNaN(userInput))
{
		alert("NaN, try again");
}
else
{
	userInput = parseInt(userInput)
	var notEven = userInput%2
	var numToPrint = 2 - notEven

	while(numToPrint <= userInput)
	{
		document.write(numToPrint, " ")
		numToPrint += 2
	}
}
