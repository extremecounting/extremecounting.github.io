//Desserts
var applePieElem = document.getElementById('add-applepie');
if(applePieElem) {
  applePieElem.addEventListener('click', function() {
    if (localStorage.getItem('apple_pie') == null) {
      localStorage.setItem('apple_pie`', 1);
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

var lavaCakeElem = document.getElementById('add-lavacake');
if(lavaCakeElem) {
  lavaCakeElem.addEventListener('click', function() {
    if (localStorage.getItem('lava_cake') == null) {
      localStorage.setItem('lava_cake', 1);
    } else {
      localStorage.setItem('lava_cake', +localStorage.getItem('lava_cake') + 1);
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


//Burgers
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

var msBurgerElem = document.getElementById('add-msburger');
if(msBurgerElem){
  msBurgerElem.addEventListener('click', function() {
    if (localStorage.getItem('ms_burger') == null) {
      localStorage.setItem('ms_burger', 1);
    } else {
      localStorage.setItem('ms_burger', +localStorage.getItem('ms_burger') + 1);
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


//Combos
var dbComboElem = document.getElementById('add-dbcombo');
if(dbComboElem) {
  dbComboElem.addEventListener('click', function() {
    if (localStorage.getItem('db_combo') == null) {
      localStorage.setItem('db_combo', 1);
    } else {
      localStorage.setItem('db_combo', +localStorage.getItem('db_combo') + 1);
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

var twComboElem = document.getElementById('add-twcombo');
if(twComboElem) {
  twComboElem.addEventListener('click', function() {
    if (localStorage.getItem('tw_combo') == null) {
      localStorage.setItem('tw_combo', 1);
    } else {
      localStorage.setItem('tw_combo', +localStorage.getItem('tw_combo') + 1);
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

var cscomboElem = document.getElementById('add-cscombo');
if(cscomboElem) {
  cscomboElem.addEventListener('click', function() {
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



//Wings
var gournetWingsElem = document.getElementById('add-gournetWings');
if(gournetWingsElem) {
  gournetWingsElem.addEventListener('click', function() {
    if (localStorage.getItem('gournet_wings') == null) {
      localStorage.setItem('gournet_wings', 1);
    } else {
      localStorage.setItem('gournet_wings', +localStorage.getItem('gournet_wings') + 1);
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

var bbqWingsElem = document.getElementById('add-bbqwings');
if(bbqWingsElem) {
  bbqWingsElem.addEventListener('click', function() {
    if (localStorage.getItem('bbq_wings') == null) {
      localStorage.setItem('bbq_wings', 1);
    } else {
      localStorage.setItem('bbq_wings', +localStorage.getItem('bbq_wings') + 1);
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

var sampleWingsElem = document.getElementById('add-samplewings');
if(sampleWingsElem) {
  sampleWingsElem.addEventListener('click', function() {
    if (localStorage.getItem('sample_wings') == null) {
      localStorage.setItem('sample_wings', 1);
    } else {
      localStorage.setItem('sample_wings', +localStorage.getItem('sample_wings') + 1);
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


//Meats
var salmonElem = document.getElementById('add-salmon');
if(salmonElem) {
  salmonElem.addEventListener('click', function() {
    if (localStorage.getItem('salmon') == null) {
      localStorage.setItem('salmon', 1);
    } else {
      localStorage.setItem('salmon', +localStorage.getItem('salmon') + 1);
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


//Sides and Appetizersz
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

var chilleFriesElem = document.getElementById('add-chillefries');
if(chilleFriesElem) {
  chilleFriesElem.addEventListener('click', function() {
    if (localStorage.getItem('chille_fries') == null) {
      localStorage.setItem('chille_fries', 1);
    } else {
      localStorage.setItem('chille_fries', +localStorage.getItem('chille_fries') + 1);
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


//Kids
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

var chickenNuggetsElem = document.getElementById('add-chickennuggets');
if(chickenNuggetsElem) {
  chickenNuggetsElem.addEventListener('click', function() {
    if (localStorage.getItem('chicken_nuggets') == null) {
      localStorage.setItem('chicken_nuggets', 1);
    } else {
      localStorage.setItem('chicken_nuggets', +localStorage.getItem('chicken_nuggets') + 1);
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

var macCheeseElem = document.getElementById('add-maccheese');
if(macCheeseElem) {
  macCheeseElem.addEventListener('click', function() {
    if (localStorage.getItem('mac_cheese') == null) {
      localStorage.setItem('mac_cheese', 1);
    } else {
      localStorage.setItem('mac_cheese', +localStorage.getItem('mac_cheese') + 1);
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


//Salads
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

var balsamicSaladElem = document.getElementById('add-balsalad');
if(balsamicSaladElem) {
  balsamicSaladElem.addEventListener('click', function() {
    if (localStorage.getItem('balsamic_salad') == null) {
      localStorage.setItem('balsamic_salad', 1);
    } else {
      localStorage.setItem('balsamic_salad', +localStorage.getItem('balsamic_salad') + 1);
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


//Sandwiches
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

var bltElem = document.getElementById('add-blt');
if(bltElem) {
  bltElem.addEventListener('click', function() {
    if (localStorage.getItem('blt') == null) {
      localStorage.setItem('blt', 1);
    } else {
      localStorage.setItem('blt', +localStorage.getItem('blt') + 1);
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

var rubenSandElem = document.getElementById('add-rubensand');
if(rubenSandElem) {
  rubenSandElem.addEventListener('click', function() {
    if (localStorage.getItem('ruben_sandwich') == null) {
      localStorage.setItem('ruben_sandwich', 1);
    } else {
      localStorage.setItem('ruben_sandwich', +localStorage.getItem('ruben_sandwich') + 1);
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

var pulledporkSandElem = document.getElementById('add-ppsand');
if(pulledporkSandElem) {
  pulledporkSandElem.addEventListener('click', function() {
    if (localStorage.getItem('pp_sandwich') == null) {
      localStorage.setItem('pp_sandwich', 1);
    } else {
      localStorage.setItem('pp_sandwich', +localStorage.getItem('pp_sandwich') + 1);
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

//Drinks
var rootBeerElem = document.getElementById('add-rbeer');
if(rootBeerElem) {
  rootBeerElem.addEventListener('click', function() {
    if (localStorage.getItem('root_beer') == null) {
      localStorage.setItem('root_beer', 1);
    } else {
      localStorage.setItem('root_beer', +localStorage.getItem('root_beer') + 1);
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

var strawberryLemonadeElem = document.getElementById('add-slemonade');
if(strawberryLemonadeElem) {
  strawberryLemonadeElem.addEventListener('click', function() {
    if (localStorage.getItem('strawberry_lemonade') == null) {
      localStorage.setItem('strawberry_lemonade', 1);
    } else {
      localStorage.setItem('strawberry_lemonade', +localStorage.getItem('strawberry_lemonade') + 1);
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