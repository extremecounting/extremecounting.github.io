document.getElementById('add-applepie').addEventListener('click', function() {
  if (localStorage.getItem('apple_pie') == null) {
      localStorage.setItem('apple_pie', 1);
  } else {
      localStorage.setItem('apple_pie', +localStorage.getItem('apple_pie') + 1);
  }
});
  