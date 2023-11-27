const itemAmount = +localStorage.getItem('gd_burgers');
const stuffclass = document.querySelector('.stuffclass');


function startup() {
    console.log('Starting...');
    //burger example, needs to be dynamic for wtv is in the cart (also obviously needs to be changed)
    for (let i = 0; i < localStorage.length; i++) {
        console.log('iterating through ' + i);
        let key = localStorage.key(i);
        
        itemDatabase.forEach((item) => 
        
            {if (item.id == key){
                console.log('found stuff');
                stuffclass.innerHTML += `
                <div class="${item.id}">
                    <h1>You have ${+localStorage.getItem(key)} items</h1>
                </div>
                `;
            }}
        );
    }
    if (localStorage.getItem('gd_burgers') == null) {
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