document.getElementById("fibonacciForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const terms = parseInt(document.getElementById("n").value);
    
    let number0 = 0;
    let number1 = 1;
    let nextNumber = "";
    
    for ( let i = 1; i < terms; i++){
        nextNumber = number0 + number1;
        number0 = number1;
        number1 = nextNumber;
        document.getElementById("result").innerHTML = `The ${terms} term of the Fibonacci sequence is: ${nextNumber}`;
    }
})
