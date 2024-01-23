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
  var specialEvents = document.getElementById('specialEvents');
  var scrollPercentage = window.pageYOffset / (document.body.scrollHeight - window.innerHeight);
  var translation = -100 + scrollPercentage * 175;
  //console.log(translation);
  if (translation >= 0 ) {
    specialEvents.style.transform = 'translateX(0%)'
  } else {
    specialEvents.style.transform = 'translateX(' + (translation) + '%)';
  }
  
  if (window.pageYOffset > window.innerHeight * 0.05) { // Change this value to control when the animation starts
      specialEvents.classList.add('show');
  } else {
      specialEvents.classList.remove('show');
  }
});

window.addEventListener('scroll', function() {
  var reservations = document.getElementById('reservations');
  var scrollPercentage = window.pageYOffset / (document.body.scrollHeight - window.innerHeight);
  var translation = -100 + (1 - scrollPercentage) * 223; // This makes it scroll in from the right
  console.log(translation);
  if (translation > 80) {
    reservations.style.opacity = '0';
  } else {
    reservations.style.opacity = '1';
  }
  if (translation <= 0 ) {
    reservations.style.transform = 'translateX(0%)'
  } else {
    reservations.style.transform = 'translateX(' + (translation) + '%)';
  }

  if (window.pageYOffset > window.innerHeight * 0.05) { // Change this value to control when the animation starts
      specialEvents.classList.add('show');
  } else {
      specialEvents.classList.remove('show');
  }
});


window.addEventListener('scroll', function() {
  var footer = document.getElementById('footer');
  if (window.scrollY > 100) { // Change this value to control when the animation starts
    footer.classList.add('show');
  } else {
    footer.classList.remove('show');
  }
});