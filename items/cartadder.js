var applePieElem = document.getElementById('add-applepie');
if(applePieElem) {
  applePieElem.addEventListener('click', function() {
    if (localStorage.getItem('apple_pie') == null) {
      localStorage.setItem('apple_pie', 1);
    } else {
      localStorage.setItem('apple_pie', +localStorage.getItem('apple_pie') + 1);
    }
    var msg = document.createElement('div');
    msg.textContent = 'Item added to cart!';
    msg.style.position = 'fixed';
    msg.style.bottom = '10px';
    msg.style.right = '10px';
    msg.style.padding = '10px';
    msg.style.color = 'white';
    msg.style.background = '#4CAF50';
    msg.style.borderRadius = '5px';
    document.body.appendChild(msg);
    setTimeout(function() {
      msg.parentNode.removeChild(msg);
    }, 1250);
  });
}

var bacBurgerElem = document.getElementById('add-bacburger');
if(bacBurgerElem) {
  bacBurgerElem.addEventListener('click', function() {
    if (localStorage.getItem('bacon_burger') == null) {
      localStorage.setItem('bacon_burger', 1);
    } else {
      localStorage.setItem('bacon_burger', +localStorage.getItem('bacon_burger') + 1);
    }
    var msg = document.createElement('div');
    msg.textContent = 'Item added to cart!';
    msg.style.position = 'fixed';
    msg.style.bottom = '10px';
    msg.style.right = '10px';
    msg.style.padding = '10px';
    msg.style.color = 'white';
    msg.style.background = '#4CAF50';
    msg.style.borderRadius = '5px';
    document.body.appendChild(msg);
    setTimeout(function() {
      msg.parentNode.removeChild(msg);
    }, 1250);
  });
}

var bbqBurgerElem = document.getElementById('add-bbqburger');
if(bbqBurgerElem){
  bbqBurgerElem.addEventListener('click', function() {
    if (localStorage.getItem('bbq_burger') == null) {
      localStorage.setItem('bbq_burger', 1);
    } else {
      localStorage.setItem('bbq_burger', +localStorage.getItem('bbq_burger') + 1);
    }
    var msg = document.createElement('div');
    msg.textContent = 'Item added to cart!';
    msg.style.position = 'fixed';
    msg.style.bottom = '10px';
    msg.style.right = '10px';
    msg.style.padding = '10px';
    msg.style.color = 'white';
    msg.style.background = '#4CAF50';
    msg.style.borderRadius = '5px';
    document.body.appendChild(msg);
    setTimeout(function() {
      msg.parentNode.removeChild(msg);
    }, 1250);
  });
}

var brownieElem = document.getElementById('add-brownie');
if(brownieElem) {
  brownieElem.addEventListener('click', function() {
    if (localStorage.getItem('brownie') == null) {
      localStorage.setItem('brownie', 1);
    } else {
      localStorage.setItem('brownie', +localStorage.getItem('brownie') + 1);
    }
    var msg = document.createElement('div');
    msg.textContent = 'Item added to cart!';
    msg.style.position = 'fixed';
    msg.style.bottom = '10px';
    msg.style.right = '10px';
    msg.style.padding = '10px';
    msg.style.color = 'white';
    msg.style.background = '#4CAF50';
    msg.style.borderRadius = '5px';
    document.body.appendChild(msg);
    setTimeout(function() {
      msg.parentNode.removeChild(msg);
    }, 1250);
  });
}

var bufWingsElem = document.getElementById('add-buffalowings');
if(bufWingsElem) {
  bufWingsElem.addEventListener('click', function() {
    if (localStorage.getItem('buffalo_wings') == null) {
      localStorage.setItem('buffalo_wings', 1);
    } else {
      localStorage.setItem('buffalo_wings', +localStorage.getItem('buffalo_wings') + 1);
    }
    var msg = document.createElement('div');
    msg.textContent = 'Item added to cart!';
    msg.style.position = 'fixed';
    msg.style.bottom = '10px';
    msg.style.right = '10px';
    msg.style.padding = '10px';
    msg.style.color = 'white';
    msg.style.background = '#4CAF50';
    msg.style.borderRadius = '5px';
    document.body.appendChild(msg);
    setTimeout(function() {
      msg.parentNode.removeChild(msg);
    }, 1250);
  });
}

var porkComboElem = document.getElementById('add-porkcombo');
if(porkComboElem) {
  porkComboElem.addEventListener('click', function() {
    if (localStorage.getItem('pork_combo') == null) {
      localStorage.setItem('pork_combo', 1);
    } else {
      localStorage.setItem('pork_combo', +localStorage.getItem('pork_combo') + 1);
    }
    var msg = document.createElement('div');
    msg.textContent = 'Item added to cart!';
    msg.style.position = 'fixed';
    msg.style.bottom = '10px';
    msg.style.right = '10px'; 
    msg.style.padding = '10px';
    msg.style.color = 'white';
    msg.style.background = '#4CAF50';
    msg.style.borderRadius = '5px';
    document.body.appendChild(msg);
    setTimeout(function() {
      msg.parentNode.removeChild(msg);
    }, 1250);
  });
}

var burgComboElem = document.getElementById('add-burgcombo');
if(burgComboElem) {
  burgComboElem.addEventListener('click', function() {
    if (localStorage.getItem('burger_combo') == null) {
      localStorage.setItem('burger_combo', 1);
    } else {
      localStorage.setItem('burger_combo', +localStorage.getItem('burger_combo') + 1);
    }
    var msg = document.createElement('div');
    msg.textContent = 'Item added to cart!';
    msg.style.position = 'fixed';
    msg.style.bottom = '10px';
    msg.style.right = '10px';
    msg.style.padding = '10px';
    msg.style.color = 'white';
    msg.style.background = '#4CAF50';
    msg.style.borderRadius = '5px';
    document.body.appendChild(msg);
    setTimeout(function() {
      msg.parentNode.removeChild(msg);
    }, 1250);
  });
}

var wingComboElem = document.getElementById('add-wingcombo');
if(wingComboElem) {
  wingComboElem.addEventListener('click', function() {
    if (localStorage.getItem('wing_combo') == null) {
      localStorage.setItem('wing_combo', 1);
    } else {
      localStorage.setItem('wing_combo', +localStorage.getItem('wing_combo') + 1);
    }
    var msg = document.createElement('div');
    msg.textContent = 'Item added to cart!';
    msg.style.position = 'fixed';
    msg.style.bottom = '10px';
    msg.style.right = '10px';
    msg.style.padding = '10px';
    msg.style.color = 'white';
    msg.style.background = '#4CAF50';
    msg.style.borderRadius = '5px';
    document.body.appendChild(msg);
    setTimeout(function() {
      msg.parentNode.removeChild(msg);
    }, 1250);
  });
}

var slidersElem = document.getElementById('add-sliders');
if(slidersElem) {
  slidersElem.addEventListener('click', function() {
    if (localStorage.getItem('sliders') == null) {
      localStorage.setItem('sliders', 1);
    } else {
      localStorage.setItem('sliders', +localStorage.getItem('sliders') + 1);
    }
    var msg = document.createElement('div');
    msg.textContent = 'Item added to cart!';
    msg.style.position = 'fixed';
    msg.style.bottom = '10px';
    msg.style.right = '10px';
    msg.style.padding = '10px';
    msg.style.color = 'white';
    msg.style.background = '#4CAF50';
    msg.style.borderRadius = '5px';
    document.body.appendChild(msg);
    setTimeout(function() {
      msg.parentNode.removeChild(msg);
    }, 1250);
  });
}

var chickenStripElem = document.getElementById('add-chickenstrips');
if(chickenStripElem) {
  chickenStripElem.addEventListener('click', function() {
    if (localStorage.getItem('chicken_strips') == null) {
      localStorage.setItem('chicken_strips', 1);
    } else {
      localStorage.setItem('chicken_strips', +localStorage.getItem('chicken_strips') + 1);
    }
    var msg = document.createElement('div');
    msg.textContent = 'Item added to cart!';
    msg.style.position = 'fixed';
    msg.style.bottom = '10px';
    msg.style.right = '10px';
    msg.style.padding = '10px';
    msg.style.color = 'white';
    msg.style.background = '#4CAF50';
    msg.style.borderRadius = '5px';
    document.body.appendChild(msg);
    setTimeout(function() {
      msg.parentNode.removeChild(msg);
    }, 1250);
  });
}

var friesElem = document.getElementById('add-fries');
if(friesElem) {
  friesElem.addEventListener('click', function() {
    if (localStorage.getItem('fries') == null) {
      localStorage.setItem('fries', 1);
    } else {
      localStorage.setItem('fries', +localStorage.getItem('fries') + 1);
    }
    var msg = document.createElement('div');
    msg.textContent = 'Item added to cart!';
    msg.style.position = 'fixed';
    msg.style.bottom = '10px';
    msg.style.right = '10px';
    msg.style.padding = '10px';
    msg.style.color = 'white';
    msg.style.background = '#4CAF50';
    msg.style.borderRadius = '5px';
    document.body.appendChild(msg);
    setTimeout(function() {
      msg.parentNode.removeChild(msg);
    }, 1250);
  });
}

var gdBurgerElem = document.getElementById('add-gdburger');
if(gdBurgerElem) {
  gdBurgerElem.addEventListener('click', function() {
    if (localStorage.getItem('gd_burger') == null) {
      localStorage.setItem('gd_burger', 1);
    } else {
      localStorage.setItem('gd_burger', +localStorage.getItem('gd_burger') + 1);
    }
    var msg = document.createElement('div');
    msg.textContent = 'Item added to cart!';
    msg.style.position = 'fixed';
    msg.style.bottom = '10px';
    msg.style.right = '10px';
    msg.style.padding = '10px';
    msg.style.color = 'white';
    msg.style.background = '#4CAF50';
    msg.style.borderRadius = '5px';
    document.body.appendChild(msg);
    setTimeout(function() {
      msg.parentNode.removeChild(msg);
    }, 1250);
  });
}

var macCheeseElem = document.getElementById('add-macandcheese');
if(macCheeseElem) {
  macCheeseElem.addEventListener('click', function() {
    if (localStorage.getItem('mac_and_cheese') == null) {
      localStorage.setItem('mac_and_cheese', 1);
    } else {
      localStorage.setItem('mac_and_cheese', +localStorage.getItem('mac_and_cheese') + 1);
    }
    var msg = document.createElement('div');
    msg.textContent = 'Item added to cart!';
    msg.style.position = 'fixed';
    msg.style.bottom = '10px';
    msg.style.right = '10px';
    msg.style.padding = '10px';
    msg.style.color = 'white';
    msg.style.background = '#4CAF50';
    msg.style.borderRadius = '5px';
    document.body.appendChild(msg);
    setTimeout(function() {
      msg.parentNode.removeChild(msg);
    }, 1250);
  });
}

var mozStickElem = document.getElementById('add-mozzarellasticks');
if(mozStickElem) {
  mozStickElem.addEventListener('click', function() {
    if (localStorage.getItem('mozzarella_sticks') == null) {
      localStorage.setItem('mozzarella_sticks', 1);
    } else {
      localStorage.setItem('mozzarella_sticks', +localStorage.getItem('mozzarella_sticks') + 1);
    }
    var msg = document.createElement('div');
    msg.textContent = 'Item added to cart!';
    msg.style.position = 'fixed';
    msg.style.bottom = '10px';
    msg.style.right = '10px';
    msg.style.padding = '10px';
    msg.style.color = 'white';
    msg.style.background = '#4CAF50';
    msg.style.borderRadius = '5px';
    document.body.appendChild(msg);
    setTimeout(function() {
      msg.parentNode.removeChild(msg);
    }, 1250);
  });
}

var onionRingsElem = document.getElementById('add-onionrings');
if(onionRingsElem) {
  onionRingsElem.addEventListener('click', function() {
    if (localStorage.getItem('onion_rings') == null) {
      localStorage.setItem('onion_rings', 1);
    } else {
      localStorage.setItem('onion_rings', +localStorage.getItem('onion_rings') + 1);
    }
    var msg = document.createElement('div');
    msg.textContent = 'Item added to cart!';
    msg.style.position = 'fixed';
    msg.style.bottom = '10px';
    msg.style.right = '10px';
    msg.style.padding = '10px';
    msg.style.color = 'white';
    msg.style.background = '#4CAF50';
    msg.style.borderRadius = '5px';
    document.body.appendChild(msg);
    setTimeout(function() {
      msg.parentNode.removeChild(msg);
    }, 1250);
  });
}

var plainWingsElem = document.getElementById('add-plainwings');
if(plainWingsElem) {
  plainWingsElem.addEventListener('click', function() {
    if (localStorage.getItem('plain_wings') == null) {
      localStorage.setItem('plain_wings', 1);
    } else {
      localStorage.setItem('plain_wings', +localStorage.getItem('plain_wings') + 1);
    }
    var msg = document.createElement('div');
    msg.textContent = 'Item added to cart!';
    msg.style.position = 'fixed';
    msg.style.bottom = '10px';
    msg.style.right = '10px';
    msg.style.padding = '10px';
    msg.style.color = 'white';
    msg.style.background = '#4CAF50';
    msg.style.borderRadius = '5px';
    document.body.appendChild(msg);
    setTimeout(function() {
      msg.parentNode.removeChild(msg);
    }, 1250);
  });
}

var samplingWingsElem = document.getElementById('add-samplingwings');
if(samplingWingsElem) {
  samplingWingsElem.addEventListener('click', function() {
    if (localStorage.getItem('sampling_wings') == null) {
      localStorage.setItem('sampling_wings', 1);
    } else {
      localStorage.setItem('sampling_wings', +localStorage.getItem('sampling_wings') + 1);
    }
    var msg = document.createElement('div');
    msg.textContent = 'Item added to cart!';
    msg.style.position = 'fixed';
    msg.style.bottom = '10px';
    msg.style.right = '10px';
    msg.style.padding = '10px';
    msg.style.color = 'white';
    msg.style.background = '#4CAF50';
    msg.style.borderRadius = '5px';
    document.body.appendChild(msg);
    setTimeout(function() {
      msg.parentNode.removeChild(msg);
    }, 1250);
  });
}

var caesarSaladElem = document.getElementById('add-caesalad');
if(caesarSaladElem) {
  caesarSaladElem.addEventListener('click', function() {
    if (localStorage.getItem('caesar_salad') == null) {
      localStorage.setItem('caesar_salad', 1);
    } else {
      localStorage.setItem('caesar_salad', +localStorage.getItem('caesar_salad') + 1);
    }
    var msg = document.createElement('div');
    msg.textContent = 'Item added to cart!';
    msg.style.position = 'fixed';
    msg.style.bottom = '10px';
    msg.style.right = '10px';
    msg.style.padding = '10px';
    msg.style.color = 'white';
    msg.style.background = '#4CAF50';
    msg.style.borderRadius = '5px';
    document.body.appendChild(msg);
    setTimeout(function() {
      msg.parentNode.removeChild(msg);
    }, 1250);
  });
}

var chickenSaladElem = document.getElementById('add-chicksalad');
if(chickenSaladElem) {
  chickenSaladElem.addEventListener('click', function() {
    if (localStorage.getItem('chicken_salad') == null) {
      localStorage.setItem('chicken_salad', 1);
    } else {
      localStorage.setItem('chicken_salad', +localStorage.getItem('chicken_salad') + 1);
    }
    var msg = document.createElement('div');
    msg.textContent = 'Item added to cart!';
    msg.style.position = 'fixed';
    msg.style.bottom = '10px';
    msg.style.right = '10px';
    msg.style.padding = '10px';
    msg.style.color = 'white';
    msg.style.background = '#4CAF50';
    msg.style.borderRadius = '5px';
    document.body.appendChild(msg);
    setTimeout(function() {
      msg.parentNode.removeChild(msg);
    }, 1250);
  });
}

var vegSaladElem = document.getElementById('add-vegsalad');
if(vegSaladElem) {
  vegSaladElem.addEventListener('click', function() {
    if (localStorage.getItem('vegetable_salad') == null) {
      localStorage.setItem('vegetable_salad', 1);
    } else {
      localStorage.setItem('vegetable_salad', +localStorage.getItem('vegetable_salad') + 1);
    }
    var msg = document.createElement('div');
    msg.textContent = 'Item added to cart!';
    msg.style.position = 'fixed';
    msg.style.bottom = '10px';
    msg.style.right = '10px';
    msg.style.padding = '10px';
    msg.style.color = 'white';
    msg.style.background = '#4CAF50';
    msg.style.borderRadius = '5px';
    document.body.appendChild(msg);
    setTimeout(function() {
      msg.parentNode.removeChild(msg);
    }, 1250);
  });
}

var clubSandElem = document.getElementById('add-clubsand');
if(clubSandElem) {
  clubSandElem.addEventListener('click', function() {
    if (localStorage.getItem('club_sandwich') == null) {
      localStorage.setItem('club_sandwich', 1);
    } else {
      localStorage.setItem('club_sandwich', +localStorage.getItem('club_sandwich') + 1);
    }
    var msg = document.createElement('div');
    msg.textContent = 'Item added to cart!';
    msg.style.position = 'fixed';
    msg.style.bottom = '10px';
    msg.style.right = '10px';
    msg.style.padding = '10px';
    msg.style.color = 'white';
    msg.style.background = '#4CAF50';
    msg.style.borderRadius = '5px';
    document.body.appendChild(msg);
    setTimeout(function() {
      msg.parentNode.removeChild(msg);
    }, 1250);
  });
}

var cubanSandElem = document.getElementById('add-cubansand');
if(cubanSandElem) {
  cubanSandElem.addEventListener('click', function() {
    if (localStorage.getItem('cuban_sandwich') == null) {
      localStorage.setItem('cuban_sandwich', 1);
    } else {
      localStorage.setItem('cuban_sandwich', +localStorage.getItem('cuban_sandwich') + 1);
    }
    var msg = document.createElement('div');
    msg.textContent = 'Item added to cart!';
    msg.style.position = 'fixed';
    msg.style.bottom = '10px';
    msg.style.right = '10px';
    msg.style.padding = '10px';
    msg.style.color = 'white';
    msg.style.background = '#4CAF50';
    msg.style.borderRadius = '5px';
    document.body.appendChild(msg);
    setTimeout(function() {
      msg.parentNode.removeChild(msg);
    }, 1250);
  });
}

var cubanSandElem = document.getElementById('add-cubansand');
if(cubanSandElem) {
  cubanSandElem.addEventListener('click', function() {
    if (localStorage.getItem('cuban_sandwich') == null) {
      localStorage.setItem('cuban_sandwich', 1);
    } else {
      localStorage.setItem('cuban_sandwich', +localStorage.getItem('cuban_sandwich') + 1);
    }
    var msg = document.createElement('div');
    msg.textContent = 'Item added to cart!';
    msg.style.position = 'fixed';
    msg.style.bottom = '10px';
    msg.style.right = '10px';
    msg.style.padding = '10px';
    msg.style.color = 'white';
    msg.style.background = '#4CAF50';
    msg.style.borderRadius = '5px';
    document.body.appendChild(msg);
    setTimeout(function() {
      msg.parentNode.removeChild(msg);
    }, 1250);
  });
}

var waterElem = document.getElementById('add-water');
if(waterElem) {
  waterElem.addEventListener('click', function() {
    if (localStorage.getItem('water') == null) {
      localStorage.setItem('water', 1);
    } else {
      localStorage.setItem('water', +localStorage.getItem('water') + 1);
    }
    var msg = document.createElement('div');
    msg.textContent = 'Item added to cart!';
    msg.style.position = 'fixed';
    msg.style.bottom = '10px';
    msg.style.right = '10px';
    msg.style.padding = '10px';
    msg.style.color = 'white';
    msg.style.background = '#4CAF50';
    msg.style.borderRadius = '5px';
    document.body.appendChild(msg);
    setTimeout(function() {
      msg.parentNode.removeChild(msg);
    }, 1250);
  });
}

var cokeElem = document.getElementById('add-coke');
if(cokeElem) {
  cokeElem.addEventListener('click', function() {
    if (localStorage.getItem('coke') == null) {
      localStorage.setItem('coke', 1);
    } else {
      localStorage.setItem('coke', +localStorage.getItem('coke') + 1);
    }
    var msg = document.createElement('div');
    msg.textContent = 'Item added to cart!';
    msg.style.position = 'fixed';
    msg.style.bottom = '10px';
    msg.style.right = '10px';
    msg.style.padding = '10px';
    msg.style.color = 'white';
    msg.style.background = '#4CAF50';
    msg.style.borderRadius = '5px';
    document.body.appendChild(msg);
    setTimeout(function() {
      msg.parentNode.removeChild(msg);
    }, 1250);
  });
}

var spriteElem = document.getElementById('add-sprite');
if(spriteElem) {
  spriteElem.addEventListener('click', function() {
    if (localStorage.getItem('sprite') == null) {
      localStorage.setItem('sprite', 1);
    } else {
      localStorage.setItem('sprite', +localStorage.getItem('sprite') + 1);
    }
    var msg = document.createElement('div');
    msg.textContent = 'Item added to cart!';
    msg.style.position = 'fixed';
    msg.style.bottom = '10px';
    msg.style.right = '10px';
    msg.style.padding = '10px';
    msg.style.color = 'white';
    msg.style.background = '#4CAF50';
    msg.style.borderRadius = '5px';
    document.body.appendChild(msg);
    setTimeout(function() {
      msg.parentNode.removeChild(msg);
    }, 1250);
  });
}

var lemonadeElem = document.getElementById('add-lemonade');
if(lemonadeElem) {
  lemonadeElem.addEventListener('click', function() {
    if (localStorage.getItem('lemonade') == null) {
      localStorage.setItem('lemonade', 1);
    } else {
      localStorage.setItem('lemonade', +localStorage.getItem('lemonade') + 1);
    }
    var msg = document.createElement('div');
    msg.textContent = 'Item added to cart!';
    msg.style.position = 'fixed';
    msg.style.bottom = '10px';
    msg.style.right = '10px';
    msg.style.padding = '10px';
    msg.style.color = 'white';
    msg.style.background = '#4CAF50';
    msg.style.borderRadius = '5px';
    document.body.appendChild(msg);
    setTimeout(function() {
      msg.parentNode.removeChild(msg);
    }, 1250);
  });
}
