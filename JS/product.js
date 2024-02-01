window.onload = function() {
    var h2Tags = document.querySelectorAll('h2.item-heading');
    var p1tags = document.querySelectorAll('p1.item-description'); // Select all h2 tags with class 'item-heading'
    var amountTag = document.querySelectorAll('p.item-amount');
    var currentId = h2Tags[0].getAttribute('id'); // Get the current id
    var item = itemDatabase.find(item => item.id === currentId); // Find the item in itemDatabase
    if(item) {
        var newText = `${item.name} - $${item.price}`; // Create the new text
        h2Tags[0].innerHTML = newText; // Set the new text
    }
    p1tags[0].innerHTML = item.description;
    amountTag[0].innerHTML = ` (${localStorage.getItem(item.id)}) `;
    
};