window.onload = function() {
    var h2Tags = document.querySelectorAll('h2.item-heading'); // Select all h2 tags with class 'item-heading'
    for(let i = 0; i < h2Tags.length; i++) {
        var currentId = h2Tags[i].getAttribute('id'); // Get the current id
        var item = itemDatabase.find(item => item.id === currentId); // Find the item in itemDatabase
        if(item) {
            var newText = `${item.name} - $${item.price}`; // Create the new text
            h2Tags[i].innerHTML = newText; // Set the new text
        }
    }
};