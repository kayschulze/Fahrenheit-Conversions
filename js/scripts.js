var tempFahrenheit = parseInt(prompt("Enter a temperature in Fahrenheit:"));


var fahrenheitToCelsius = function(inputFahrenheit) {
  return (inputFahrenheit - 32) * 5 / 9;
};

alert("The temperature is " + fahrenheitToCelsius(tempFahrenheit) + "degrees celsius");
