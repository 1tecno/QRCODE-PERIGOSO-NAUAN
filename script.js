const icones = ["⚠️", "🚫", "🛑", "❗", "⚡"];

function criarIcone() {
  const span = document.createElement("span");
  span.textContent = icones[Math.floor(Math.random() * icones.length)];
  span.style.left = Math.random() * 100 + "vw";
  span.style.top = "100vh";
  span.style.animationDuration = (Math.random() * 5 + 5) + "s";
  document.querySelector(".icones").appendChild(span);

  setTimeout(() => {
    span.remove();
  }, 10000);
}

setInterval(criarIcone, 800);
