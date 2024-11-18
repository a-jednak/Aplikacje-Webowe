let runningTimer = null;
let time = 0;
let paused = true;
const timerEl = document.getElementById("czas");

function start() {
  if (paused) {
    runningTimer = setInterval(updateTimer, 1000);
    paused = false;
  }
}

function stop() {
  paused = true;
  clearInterval(runningTimer);
}

function reset() {
  paused = true;
  time = 0;
  clearInterval(runningTimer);
  updateTimer();
}

function updateTimer() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (minutes > 0) {
    timerEl.innerHTML = `${minutes}m ${seconds}s`;
  } else {
    timerEl.innerHTML = `${seconds}s`;
  }
  time++;
}
