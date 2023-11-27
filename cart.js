
document.getElementById('add-burger').addEventListener('click', function() {
  if (localStorage.getItem('burgers') == null) {
    localStorage.setItem('burgers', 1);
  } else {
    localStorage.setItem('burgers', +localStorage.getItem('burgers') + 1);
  }
  console.log(localStorage.getItem('burgers'));
});

document.getElementById('remove-burger').addEventListener('click', function() {
  localStorage.setItem('burgers', 0);
});