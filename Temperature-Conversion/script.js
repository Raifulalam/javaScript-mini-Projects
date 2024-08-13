const inputBox = document.getElementById('inputBox');
const toFehrenheir = document.getElementById('toFehrenheir');
const toCelcius = document.getElementById('toCelcius');
const result = document.getElementById('result');
function convert() {
    let input = Number(inputBox.value);
    if (toFehrenheir.checked) {
        result.textContent = ((input * 9 / 5) + 32).toFixed() + "°F";

    }
    else if (toCelcius.checked) {
        result.textContent = ((input - 32) * 5 / 9).toFixed(1) + "°C";
    }
    else {
        result.textContent = 'Please select a unit';
    }

}