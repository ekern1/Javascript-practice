var num = window.prompt("Enter a number: ", "Enter a positive number")

num = parseInt(num); // converts a string to an integer value

	if (isNaN(num)) // tests whether entry is a valid number
	{
	  alert("The input is not a number");
	}
	else if (num <= 0)   // tests for a non positive number
	{
		alert("The input is not positive");
	}
	else if (num == 0)
	{
		alert("The number is zero");
	}
	else
	{
		alert("Response = ");
		for (int i = 0; i <= num; i++) // iterates up until int i breaks even with the positive number entered
		{
			alert(i + " "); // print out odd number when condition in if statement is true
		}
	}
