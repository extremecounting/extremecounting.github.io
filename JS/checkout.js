const totalClass = document.querySelector('.total');
const checkoutButton = document.getElementById('confirm-button');

function startup() {

    totalClass.innerHTML = `
    Total: $${localStorage.getItem("total_")}
    `
}
startup();
if (checkoutButton) {
    checkoutButton.addEventListener('click', function() {
        var anyEmpty = false;
        //select all text boxes
        let textBoxes = document.querySelectorAll('input[type="text"]');
        textBoxes.forEach(textBox => {
            if(textBox.value.trim() === "" && textBox.id != "coupon") {
                anyEmpty = true;
            }
        });
        var msg = document.createElement('div');
        msg.style.position = 'fixed';
        msg.style.bottom = '10px';
        msg.style.right = '10px';
        msg.style.padding = '20px';  // increased padding to make the box bigger
        msg.style.fontSize = '20px';  // increased font size
        msg.style.color = 'white';
        msg.style.borderRadius = '5px';
        //checks if any textboxes are empty
        if (anyEmpty) {
            msg.textContent = 'Please fill in all the fields!';
            msg.style.background = 'red';
            document.body.appendChild(msg);
            setTimeout(function() {
               msg.parentNode.removeChild(msg);
            }, 1250);
        //if they aren't all empty
        } else {
            var card = document.getElementsByName('credit-card')[0].value;
            var cardBool = true;
            card.split('').forEach((char) => {
                if (isNaN(char)) {
                    cardBool = false;
                }
            })
            if ((card.length < 13 || card.length > 19) || !cardBool) {
                msg.textContent = 'Invalid Credit Card!';
                msg.style.background = 'red';
                document.body.appendChild(msg);
                setTimeout(function() {
                   msg.parentNode.removeChild(msg);
                }, 1250);    
                return;
            } 
            var cvc = document.getElementsByName('cvc')[0].value;
            var cvcBool = true;
            cvc.split('').forEach((char) => {
                if (isNaN(char)) {
                    cvcBool = false;
                }
            })
            if ((cvc.length != 3 && cvc.length != 4) || !cvcBool) {
                msg.textContent = 'Invalid CVC!'
                msg.style.background = 'red';
                document.body.appendChild(msg);
                setTimeout(function() {
                   msg.parentNode.removeChild(msg);
                }, 1250);
                return;
            }
            msg.textContent = 'Order Confirmed!';
            msg.style.background = 'green';
            document.body.appendChild(msg);
            setTimeout(function() {
                msg.parentNode.removeChild(msg);
                window.location.href = "main.html";
            }, 1250); 
        }
    });
}
