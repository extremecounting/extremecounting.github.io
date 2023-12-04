const itemAmount = +localStorage.getItem('gd_burgers');
const stuffclass = document.querySelector('.cart-list');


function startup() {
    var x = 0;
    var total = 0;
    console.log('Starting...');
    for (let i = 0; i < localStorage.length; i++) {
        console.log('iterating through ' + i);
        let key = localStorage.key(i);
        itemDatabase.forEach((item) =>
            {
                
                if (item.id == key){
                    total += item.price * localStorage.getItem(key);
                x++;
                stuffclass.innerHTML += `
                <div class="cart-item">
                    <img class="cart-item-image" src="${item.imgPath}" alt="OOPS">
                    <div class="cart-item-text">
                        <div class="cart-item-heading">
                            <div class="cart-item-title">
                                <h3>${item.name}<br>$${(item.price*+localStorage.getItem(key)).toFixed(2)} </h3>
                            </div>
                        </div>
                        <div class="options">
                            <button class="add-order" id="add_${item.id}">Add item</button>
                            <button class="remove-order" id="remove_${item.id}">Remove item</button>
                        </div>
                        <div class="amount">
                            <h3>(${localStorage.getItem(key)})</h3>
                        </div>

                        <p class="cart-item-description">
                            ${item.description}
                        </p>
                    </div>
                </div>`;
            }}
        );

    }
    if (x == 0) {
        stuffclass.innerHTML += `
        <div class="empty-cart">
            <h1>Your cart is empty!<br>Add items and they will appear here.</h1>
        </div>`;
    } else {
        stuffclass.innerHTML += `
        <div class="complete-order">
        <button id="pay">Continue and Pay</button>
        <h2>Total: $${total.toFixed(2)}</h2>
      </div>`;
    }
    localStorage.setItem("total_", total.toFixed(2));
  }
  startup();
let buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    let itemName = button.id;
    button.addEventListener('click', function() {
        if (itemName == 'pay') {
            console.log("THIS IS A TEST");
            window.location.href = "checkout.html";
            return;
        }
        if (localStorage.length === 0){
            console.log("Local storage is empty");
        }
        
        if (itemName.startsWith("add_")) {
            console.log("adding stuff");
            itemDatabase.forEach((item) => {
                if (itemName.endsWith(item.id)) {
                    localStorage.setItem(item.id, +localStorage.getItem(item.id) + 1);
                }
            })
          } else if (itemName.startsWith("remove_")) {
            itemDatabase.forEach((item) => {
                if (itemName.endsWith(item.id)) {
                    console.log("removing stuff");
                   if (localStorage.getItem(item.id) <= 1) {
                        localStorage.removeItem(item.id);
                   } else  if (localStorage.getItem(item.id) > 1) {
                        localStorage.setItem(item.id, +localStorage.getItem(item.id) - 1);
                   }
                }
            })
          } 
        location.reload();
          
    });
  
  
  //let itemAmount = localStorage.getItem(itemName);
});
 
  /*`
                <div class="${item.id}">
                    <h1>You have ${+localStorage.getItem(key)} items of ${item.name}</h1>
                    <p>${item.description}</p>
                </div>
                `;*/