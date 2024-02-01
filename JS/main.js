let slideIndex = 0;
let autoScrollActive = true; // Flag to control automatic scrolling

showSlides();

function showSlides() {
  if (!autoScrollActive) return; // Stop if automatic scrolling is turned off
  let slides = document.querySelector(".slider").children;
  for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove('active');
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].classList.add('active');
  // Update the overlay text with the data-overlay attribute of the current slide
  document.querySelector('.overlay-text').innerText = slides[slideIndex-1].getAttribute('data-overlay');
  setTimeout(showSlides, 4000); // change every 4 seconds
}

window.onload = function() {
  // Select all anchor tags inside the element with class 'slider-nav'
  document.querySelectorAll('.slider-nav a').forEach(anchor => {
      // Set the click event for each anchor
      anchor.onclick = e => {
          e.preventDefault(); // Prevent the default anchor click behavior
          autoScrollActive = false; // Turn off automatic scrolling

          // Find the target element based on the anchor's href attribute
          var targetId = anchor.getAttribute('href');
          var target = document.getElementById(targetId.substring(1)); // Remove the '#' from the href
          // If the target exists, scroll to it
          if (target) {
              target.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); // Animate the scroll to the target element
              // Update the text of the element with class 'overlay-text' with the data-overlay attribute of the target
              document.querySelector('.overlay-text').innerText = target.getAttribute('data-overlay');
              // Deactivate all slides
              document.querySelectorAll('.slider img').forEach(slide => {
                  slide.classList.remove('active');
              });
              // Activate the target slide
              target.classList.add('active');
              // Set the current slide index to the index of the target slide
              slideIndex = Array.from(target.parentNode.children).indexOf(target) + 1;
          }
      };
  });
};

window.addEventListener('scroll', function() {
  //select all images with super-bowl class and translate Y based on scroll amount
  var superBowlImages = document.querySelectorAll('.super-bowl img');
  var scrollPercentage = window.scrollY / (document.body.scrollHeight - window.innerHeight);
  superBowlImages.forEach(function(img) {
      img.style.transform = 'translateY(' + (-10 + scrollPercentage * 100) + 'px)';
  });
});

window.addEventListener('scroll', function() {
  //select all images with trivia-night class and translate Y based on scroll amount
  var triviaImages = document.querySelectorAll('.trivia-night img');
  var scrollPercentage = window.scrollY / (document.body.scrollHeight - window.innerHeight);
  triviaImages.forEach(function(img) {
      img.style.transform = 'translateY(' + (-10 + scrollPercentage * 100) + 'px)';
  });
});