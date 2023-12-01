const itemAmount = +localStorage.getItem('gd_burgers');
const stuffclass = document.querySelector('.cart-list');


function startup() {
    console.log('Starting...');
    //burger example, needs to be dynamic for wtv is in the cart (also obviously needs to be changed)
    for (let i = 0; i < localStorage.length; i++) {
        console.log('iterating through ' + i);
        console.log(localStorage.key(i));
        let key = localStorage.key(i);
        itemDatabase.forEach((item) => 
            {if (item.id == key){
                console.log('found stuff');
                stuffclass.innerHTML += `
                <div class="cart-item">
                    <img class="cart-item-image" src="images/1.png" alt="OOPS">
                    <div class="cart-item-text">
                    <div class="cart-item-heading">
                        <div class="cart-item-title">
                            <h3>${item.name} (${localStorage.getItem(key)})</h3>  
                        </div>
                    </div>
                    <div class="options">
                        <button class="add-order" id="add_${item.id}">Add item</button>
                        <button class="remove-order" id="remove_${item.id}">Remove item</button>
                    </div>
                        
                    <p class="cart-item-description">
                        ${item.description}
                    </p>
                    </div>
                </div>`;
            }}
        );
    }
    if (itemAmount > 5) {
        //simulating another item
        document.querySelector('.item').innerHTML += `
        <h2>You have a lot of items!</h2>
        `
    }
    
  }
  startup();

  document.getElementById('add-burger').addEventListener('click', function() {

    if (localStorage.getItem('gd_burger') == null) {
      localStorage.setItem('gd_burger', 1);
    } else {
      localStorage.setItem('gd_burger', +localStorage.getItem('gd_burger') + 1);
    }
  });
  /*`
                <div class="${item.id}">
                    <h1>You have ${+localStorage.getItem(key)} items of ${item.name}</h1>
                    <p>${item.description}</p>
                </div>
                `;*/