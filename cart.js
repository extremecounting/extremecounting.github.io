
document.getElementById('add-burger').addEventListener('click', function() {

  if (localStorage.getItem('gd_burger') == null) {
    localStorage.setItem('gd_burger', 1);
  } else {
    localStorage.setItem('gd_burger', +localStorage.getItem('gd_burger') + 1);
  }
});

document.getElementById('remove-burger').addEventListener('click', function() {
  localStorage.removeItem('gd_burger');
});

document.getElementById('add-fries').addEventListener('click', function() {
  if (localStorage.getItem('fries') == null) {
    localStorage.setItem('fries', 1);
  } else {
    localStorage.setItem('fries', +localStorage.getItem('fries') + 1);
  }
});

document.getElementById('remove-fries').addEventListener('click', function() {
  localStorage.removeItem('fries');
});

document.getElementById('clear-all').addEventListener('click', function() {
  localStorage.clear();
});