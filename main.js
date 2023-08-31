let celciusInput = document.querySelector('#celcius > input');
let fahrenheitInput = document.querySelector('#fahrenheit > input');
let kelvinInput = document.querySelector('#kelvin > input'); // Corrected typo here

let btn = document.querySelector('.button  button'); // Corrected selector for the button

function roundNumber(number){
    return Math.round(number*100)/100;
}

/* celsius to fahrenheit and kelvin */
celciusInput.addEventListener('input', function(){
    let cTemp = parseFloat(celciusInput.value);
    let fTemp = (cTemp * (9/5)) + 32;
    let kTemp = cTemp + 273.15;
    
    fahrenheitInput.value = roundNumber(fTemp);
    kelvinInput.value = roundNumber(kTemp);
});

btn.addEventListener('click', function() {
    celciusInput.value = ''; // Clear Celsius input
    fahrenheitInput.value = ''; // Clear Fahrenheit input
    kelvinInput.value = ''; // Clear Kelvin input
});

