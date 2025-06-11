const symbols = ['⚠️', '🚫', '🛑', '☠️', '⚡', '🔥'];
const container = document.getElementById('alert-symbols');

function createSymbol() {
  const el = document.createElement('div');
  el.className = 'symbol';
  el.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  el.style.left = Math.random() * 100 + 'vw';
  el.style.fontSize = (Math.random() * 30 + 20) + 'px';
  el.style.animationDuration = (Math.random() * 5 + 8) + 's';
  container.appendChild(el);
  setTimeout(() => el.remove(), 12000);
}

setInterval(createSymbol, 500);
