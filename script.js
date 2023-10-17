let score = 0;
let newHit = 0;

function gethit() {
  newHit = Math.floor(Math.random() * 10);
  document.querySelector("#hit").textContent = newHit;
}

function scoreChange() {
  score += 10;
  document.querySelector("#score").textContent = score;
}

function makeBubble() {
  let bubble = "";

  for (let i = 1; i < 130; i++) {
    let randNum = Math.floor(Math.random() * 10);
    bubble += `<div class="bubble-box">${randNum}</div>`;
  }
  document.querySelector("#box-content").innerHTML = bubble;
}
let timer = 60;
function runTimer() {
  let timeCheck = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#tic-toc").innerText = timer;
    } else {
      clearInterval(timeCheck);
      document.querySelector("#box-content").innerHTML = `<h1>Game Over</h1>`;
    }
  }, 1000);
}

document.querySelector("#box-content").addEventListener("click", (dets) => {
  let bubbleNum = Number(dets.target.textContent);
  if (newHit === bubbleNum) {
    scoreChange();
    gethit();
    makeBubble();
  }
});

runTimer();
makeBubble();
