
document.getElementById('add-burger').addEventListener('click', function() {
  if (localStorage.getItem('gd_burger') == null) {
    localStorage.setItem('gd_burger', 1);
  } else {
    localStorage.setItem('gd_burger', +localStorage.getItem('gd_burger') + 1);
  }
  console.log(localStorage.getItem('burgers'));
});

document.getElementById('remove-burger').addEventListener('click', function() {
  localStorage.removeItem('gd_burger');
});