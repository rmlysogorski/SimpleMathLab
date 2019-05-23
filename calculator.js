function calculate(){
    var num1El = document.getElementById("num1");
    var num1 = num1El.value;
    var num2El = document.getElementById("num2");
    var num2 = num2El.value;
    var mathRadios = document.getElementsByName("math");
    for(var i = 0; i < mathRadios.length; i++){
        if(mathRadios[i].checked){
            var math = mathRadios[i].value;
            break;
        }
    }
    var result;
    switch(math){
        case "Add": result = +num1 + +num2;
            break;
        case "Subtract": result = num1 - num2;
            break;
        case "Multiply": result = num1 * num2;
            break;
        case "Divide": result = num1 / num2;
            break;
    }
    var resultEl = document.getElementById("result");
    resultEl.innerText = result;
}