document.getElementById('add-applepie').addEventListener('click', function() {

    if (localStorage.getItem('apple_pie') == null) {
      localStorage.setItem('apple_pie', 1);
    } else {
      localStorage.setItem('apple_pie', +localStorage.getItem('apple_pie') + 1);
    }
});
document.getElementById('add-bacburger').addEventListener('click', function() {

    if (localStorage.getItem('bacon_burger') == null) {
      localStorage.setItem('bacon_burger', 1);
    } else {
      localStorage.setItem('bacon_burger', +localStorage.getItem('bacon_burger') + 1);
    }
});
document.getElementById('add-bbqburger').addEventListener('click', function() {

    if (localStorage.getItem('bbq_burger') == null) {
      localStorage.setItem('bbq_burger', 1);
    } else {
      localStorage.setItem('bbq_burger', +localStorage.getItem('bbq_burger') + 1);
    }
});
document.getElementById('add-brownie').addEventListener('click', function() {

    if (localStorage.getItem('brownie') == null) {
      localStorage.setItem('brownie', 1);
    } else {
      localStorage.setItem('brownie', +localStorage.getItem('brownie') + 1);
    }
});
document.getElementById('add-buffalowings').addEventListener('click', function() {

    if (localStorage.getItem('buffalo_wings') == null) {
      localStorage.setItem('buffalo_wings', 1);
    } else {
      localStorage.setItem('buffalo_wings', +localStorage.getItem('buffalo_wings') + 1);
    }
});
document.getElementById('add-sliders').addEventListener('click', function() {

    if (localStorage.getItem('sliders') == null) {
      localStorage.setItem('sliders', 1);
    } else {
      localStorage.setItem('sliders', +localStorage.getItem('sliders') + 1);
    }
});
document.getElementById('add-chickenstrips').addEventListener('click', function() {

    if (localStorage.getItem('chicken_strips') == null) {
      localStorage.setItem('chicken_strips', 1);
    } else {
      localStorage.setItem('chicken_strips', +localStorage.getItem('chicken_strips') + 1);
    }
});

document.getElementById('add-fries').addEventListener('click', function() {

    if (localStorage.getItem('fries') == null) {
      localStorage.setItem('fries', 1);
    } else {
      localStorage.setItem('fries', +localStorage.getItem('fries') + 1);
    }
});

document.getElementById('add-gdburger').addEventListener('click', function() {
    console.log('gdburger clicked');
    if (localStorage.getItem('gd_burger') == null) {
      localStorage.setItem('gd_burger', 1);
    } else {
      localStorage.setItem('gd_burger', +localStorage.getItem('gd_burger') + 1);
    }
});

document.getElementById('add-macandcheese').addEventListener('click', function() {

    if (localStorage.getItem('mac_and_cheese') == null) {
      localStorage.setItem('mac_and_cheese', 1);
    } else {
      localStorage.setItem('mac_and_cheese', +localStorage.getItem('mac_and_cheese') + 1);
    }
});

document.getElementById('add-mozzarellasticks').addEventListener('click', function() {

    if (localStorage.getItem('mozzarella_sticks') == null) {
      localStorage.setItem('mozzarella_sticks', 1);
    } else {
      localStorage.setItem('mozzarella_sticks', +localStorage.getItem('mozzarella_sticks') + 1);
    }
});
document.getElementById('add-onionrings').addEventListener('click', function() {

    if (localStorage.getItem('onion_rings') == null) {
      localStorage.setItem('onion_rings', 1);
    } else {
      localStorage.setItem('onion_rings', +localStorage.getItem('onion_rings') + 1);
    }
});
document.getElementById('add-plainwings').addEventListener('click', function() {

    if (localStorage.getItem('plain_wings') == null) {
      localStorage.setItem('plain_wings', 1);
    } else {
      localStorage.setItem('plain_wings', +localStorage.getItem('plain_wings') + 1);
    }
});
document.getElementById('add-samplingwings').addEventListener('click', function() {

    if (localStorage.getItem('sampling_wings') == null) {
      localStorage.setItem('sampling_wings', 1);
    } else {
      localStorage.setItem('sampling_wings', +localStorage.getItem('sampling_wings') + 1);
    }
});