const itemAmount = +localStorage.getItem('burgers');
const stuffclass = document.querySelector('.stuffclass');
function startup() {
    //burger example, needs to be dynamic for wtv is in the cart (also obviously needs to be changed)
    if (localStorage.getItem('burgers') == null) {
        stuffclass.innerHTML += `
        <div class="item">
            <h1>You have ${0} items</h1>
        </div>
    `;
    } else {
        stuffclass.innerHTML += `
        <div class="item">
            <h1>You have ${itemAmount} items</h1>
        </div>
    `;
    }
    if (itemAmount > 5) {
        //simulating another item
        document.querySelector('.item').innerHTML += `
        <h2>You have a lot of items!</h2>
        `
    }
    
  }
  startup();