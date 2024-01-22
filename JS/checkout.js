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
            if(textBox.value.trim() === "") {
                anyEmpty = true;
            } else {
            }
        });
        //checks if any textboxes are empty
        if (anyEmpty) {
            var msg = document.createElement('div');
            msg.textContent = 'Please fill in all the fields!';
            msg.style.position = 'fixed';
            msg.style.bottom = '10px';
            msg.style.right = '10px';
            msg.style.padding = '20px';  // increased padding to make the box bigger
            msg.style.fontSize = '20px';  // increased font size
            msg.style.color = 'white';
            msg.style.background = 'red';
            msg.style.borderRadius = '5px';
            document.body.appendChild(msg);
            setTimeout(function() {
               msg.parentNode.removeChild(msg);
            }, 1250);
        //if they aren't all empty
        } else {
            var msg = document.createElement('div');
            msg.textContent = 'Order Confirmed!';
            msg.style.position = 'fixed';
            msg.style.bottom = '10px';
            msg.style.right = '10px';
            msg.style.padding = '20px';  // increased padding to make the box bigger
            msg.style.fontSize = '20px';  // increased font size
            msg.style.color = 'white';
            msg.style.background = 'green';
            msg.style.borderRadius = '5px';
            document.body.appendChild(msg);
            setTimeout(function() {
               msg.parentNode.removeChild(msg);
               window.location.href = "main.html";

            }, 1250);
        }
    });
}
