const correctPIN = "0000";
let pinTries = 0;

document.getElementById("atmForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    while (pinTries < 3) {
        const enteredPin = document.getElementById('pin').value;
        
        if (enteredPin === correctPIN) {
            document.getElementById("result").textContent = "You have successfully logged in!";
            break;
        } else {
            pinTries++;
            if (pinTries === 3) {
                document.getElementById("result").textContent = "Incorrect PIN. You have exceeded your max attempts.";
                document.getElementById('pin').setAttribute('disabled', 'true');
                break; 
            } else {
                document.getElementById("result").textContent = `Wrong PIN. You have ${3 - pinTries} tries left.`;
                document.getElementById("pin").value = "";
                break;
            }
        }
    }
});