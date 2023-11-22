// Storing all elements with the class name 'img' into images
let images = [...document.querySelectorAll('.menu-item-image')];
let slider = document.querySelector('.container');
let sliderHeight;
let imageHeight;
let current = 0;
let target = 0;
let ease = 0.05;

images.forEach((img, idx) => {
  img.style.backgroundImage = `url(./images/${idx+1}.png)`;
})

function lerp(start, end, t) {
  return start * (1 - t) + end * t;
}

function setTransform(el, transform) {
  el.style.transform = transform;
}

function init() {
  console.log('init');
  sliderHeight = slider.getBoundingClientRect().height;
  imageHeight = sliderHeight / images.length;
  document.body.style.height = `${sliderHeight}px`;
}

function animate() {
  current = parseFloat(lerp(current, target, ease)).toFixed(2);
  target = window.scrollY;
  setTransform(slider, `translateY(-${current}px)`); // The placement of images change due to this transformation
  animateImages();
  requestAnimationFrame(animate);
}

function animateImages() {
  let ratio = current / imageHeight;
  let intersectionRatioValue;
  images.forEach((image, idx) => {
    intersectionRatioValue = ratio - (idx * 0.7);
    setTransform(image, `translateY(${intersectionRatioValue * 70}px)`); // The placement of images also changes due to this transformation
  });
}

document.addEventListener('click', function(e) {
  let clickEffect = document.createElement('div');
  clickEffect.className = 'click-effect';
  clickEffect.style.top = `${e.pageY - 50}px`;
  clickEffect.style.left = `${e.pageX - 50}px`;
  document.body.appendChild(clickEffect);

  setTimeout(function() {
    clickEffect.parentNode.removeChild(clickEffect);
  }, 1000);
}, false);
init();
animate();


let css = document.createElement('style');
css.type = 'text/css';
css.innerHTML = `
.click-effect {
  position: absolute;
  width: 100px;
  height: 100px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  pointer-events: none;
  transform: scale(0);
  animation: ripple 1s;
}
@keyframes ripple {
  to {
    transform: scale(2);
    opacity: 0;
  }
}`;
document.head.appendChild(css);