function cal() {
    var a = parseInt(document.querySelector("#value1").value);
    var b = parseInt(document.querySelector("#value2").value);
    var optor =  document.querySelector ("#operator").value;
    var calculate;

    if (optor == "add"){
        calculate = a + b;
    }   else if (optor =="min"){
        calculate = a - b;
    }   else if (optor =="div"){
        calculate = a / b;
    }   else if (optor == "mul"){
        calculate = a * b;
    }

    document.querySelector("#result").innerHTML = calculate;
}

