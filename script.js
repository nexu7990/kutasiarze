// script.js
const floatingTexts = document.querySelectorAll('.floating');

floatingTexts.forEach(text => {
  // ustawienie początkowego losowego położenia, różne dla każdego napisu
  let x = Math.random() * 90;
  let y = Math.random() * 90;
  let vx = (Math.random() * 0.3 + 0.1) * (Math.random() > 0.5 ? 1 : -1);
  let vy = (Math.random() * 0.3 + 0.1) * (Math.random() > 0.5 ? 1 : -1);

  text.style.left = x + '%';
  text.style.top = y + '%';

  function move() {
    x += vx;
    y += vy;

    if (x < 0 || x > 90) vx *= -1;
    if (y < 0 || y > 90) vy *= -1;

    text.style.left = x + '%';
    text.style.top = y + '%';

    requestAnimationFrame(move);
  }
  move();
});