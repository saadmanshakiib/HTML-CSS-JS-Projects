function ScriptToCheck(){
    const values = {
        USD : 0.0091,
        CAD : 0.0124,
        MYR : 0.043,
        SAR : 0.034,
        AUD : 0.014,
        CNY : 0.066
    }
    const enteredAmount = parseFloat(document.getElementById("taka").value);
    const currencyToConvert = document.getElementById("Tk").value;

    const rate = values[currencyToConvert];
    const ConvertedValue = enteredAmount * rate;
    document.getElementById("result").innerText = ConvertedValue.toFixed(2);
    document.getElementById("chosen").innerText = currencyToConvert;

    
}