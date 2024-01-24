
window.onload = function() {
  // Select all anchor tags inside the element with class 'slider-nav'
  document.querySelectorAll('.slider-nav a').forEach(anchor =>
    // Set the click event for each anchor
    anchor.onclick = e => {
      e.preventDefault(); // Prevent the default anchor click behavior
      setTimeout(() => {
        // Find the target element based on the anchor's href attribute
        var target = document.querySelector(anchor.getAttribute('href'));
        // If the target exists, scroll to it
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); // Animate the scroll to the target element
          // Update the text of the element with class 'overlay-text' with the data-overlay attribute of the target
          document.querySelector('.overlay-text').innerText = target.getAttribute('data-overlay');
        }
      }, 100); // Set the delay of the timeout to 100 milliseconds
    }
  );

};

window.addEventListener('scroll', function() {
  var superBowlImages = document.querySelectorAll('.super-bowl img');
  var scrollPercentage = window.scrollY / (document.body.scrollHeight - window.innerHeight);
  superBowlImages.forEach(function(img) {
      img.style.transform = 'translateY(' + (-10 + scrollPercentage * 200) + 'px)';
  });
});