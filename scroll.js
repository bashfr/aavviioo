const box = document.body;

let isDown = false;
let startX;
let startY;
let scrollX;
let scrollY;
let multiplier = 1.5;

box.addEventListener('mousedown', (e) => {
  isDown = true;

  scrollX = window.scrollX;
  scrollY = window.scrollY;
  startX = e.clientX;
  startY = e.clientY;

  box.style.cursor = 'grabbing';
});

box.addEventListener('mouseleave', () => {
  isDown = false;
  box.style.cursor = 'grab';
});

box.addEventListener('mouseup', () => {
  isDown = false;
  box.style.cursor = 'grab';
});

document.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();

  moveX = (e.clientX - startX) * multiplier;
  moveY = (e.clientY - startY) * multiplier;
  window.scroll( scrollX - moveX, scrollY - moveY );
});