function convert(){
    const from = document.getElementById("from_temp").value;
    const to = document.getElementById("to_temp").value;
    const temp = parseFloat(document.getElementById("convertTemp").value);

    if(from == to){
        alert("Both From & To Temperature Cant Be Same! Try Again");
        from = "";
        to = "";
        temp = "";
    }

    var output;

    if(from == "Celsius"){
        if(to == "Kelvin"){
        output = (temp + 273.15);
        }
        else if(to == "Farenheit"){
        output = (temp * (9/5)+32);
        }
    }

    else if(from == "Kelvin"){
        if(to == "Celsius"){
        output = (temp - 273.15); 
        }
        else if(to == "Farenheit"){
        output = (temp - 273.15) *(9/5) + 32;
        }
    }

    else if(from == "Farenheit"){
        if(to == "Celsius"){
        output = (temp - 32)* (5/9); 
        }
        else if(to == "Kelvin"){
        output = (temp - 32)* (5/9) + 273.15;
        }
    }

    document.getElementById("result").innerHTML = "Result : "+output.toFixed(2);
    
    
}