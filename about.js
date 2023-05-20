let btn = document.querySelector('.container');
btn.addEventListener('mousemove', e => {
  let x = e.clientX;
  let y = e.clientY + window.scrollY;
  btn.style.setProperty('--x', x + 'px');
  btn.style.setProperty('--y', y + 'px');
});
