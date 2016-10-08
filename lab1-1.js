var tempUnit = 'C';
var tempQuant = 98;
if (tempUnit === 'F') { 
	tempCels = (tempQuant - 32) * (5/9);
	console.log(tempQuant + " degrees Fahrenheit is " + tempCels + " degrees in Celsius.");
} else if (tempUnit === 'C') {
	tempFahr = tempQuant * (9/5) + 32;
	console.log(tempQuant + " degrees Celsius is " + tempFahr + " degrees in Fahrenheit.");
} else {
	console.log('Please enter C for Celsius or F for Fahrenheit!');
}
