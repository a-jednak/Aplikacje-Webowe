const board = document.querySelector("#board");
const scoring = document.querySelector("#score");
const divReset = document.querySelector("#reset");
const mouseCursor = document.querySelector("#newCursor");
const h2Final = document.querySelector("#final");
const music = new Audio("sad-music.mp3");

const zombieDict = {};
let score = 0;
let health = 3;
let index = 0;
let gameRunning;

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

const zombie = () => {
  const speed = getRandomInt(20, 40);
  const position = 40 + getRandomInt(3, 20);
  const size = Math.random() + 0.5;

  spawnZombie(speed, position, size);
};

const spawnZombie = (speed, pos, size) => {
  const zombie = document.createElement("div");
  zombie.classList.add("zombie");
  zombie.id = index++;
  zombie.style.bottom = `${pos}vh`;
  zombie.style.left = "100vw";
  zombie.style.transform = `scale(${size})`;

  zombie.addEventListener("click", shot);
  board.appendChild(zombie);

  animateZombie(zombie, speed);
};

const animateZombie = (zombie, speed) => {
  const shift = 200;
  let bgPosition = 0;
  let position = 0;

  zombieDict[zombie.id] = setInterval(() => {
    zombie.style.backgroundPositionX = `${bgPosition + shift}px`;
    zombie.style.left = `${100 - position}vw`;
    bgPosition -= shift;
    position++;

    if (bgPosition === -1800) bgPosition = 0;

    if (position === 115) {
      zombie.remove();
      health--;
      updateHealthBar();

      if (health <= 0 || score < 0) gameEnd();

      clearInterval(zombieDict[zombie.id]);
    }
  }, speed);
};

const updateHealthBar = () => {
  const hearts = document.querySelectorAll("#healthbar img");
  for (let i = 0; i < hearts.length; i++) {
    hearts[i].src = i < health ? "full_heart.png" : "empty_heart.png";
  }
};

const cursorMove = (e) => {
  mouseCursor.style.top = `${e.pageY}px`;
  mouseCursor.style.left = `${e.pageX}px`;
};

const miss = () => {
  score -= 5;
  updateScore();
};

const shot = function () {
  score += 25;
  updateScore();

  clearInterval(zombieDict[this.id]);
  this.remove();
};

const updateScore = () => {
  scoring.textContent = score;
};

const loadGame = () => {
  health = 3;
  score = 0;
  index = 0;

  updateScore();
  updateHealthBar();
  document.body.style.cursor = "none";

  board.addEventListener("click", miss);
  window.addEventListener("mousemove", cursorMove);

  document.querySelectorAll(".zombie").forEach((zombie) => zombie.remove());

  gameRunning = setInterval(() => {
    zombie();
    if (score < 0) gameEnd();
  }, 1000);
};

const resetGame = () => {
  divReset.style.transform = "translateY(200%)";
  music.pause();
  music.currentTime = 0;
  loadGame();
};

const gameEnd = () => {
  clearInterval(gameRunning);

  Object.values(zombieDict).forEach(clearInterval);

  board.removeEventListener("click", miss);
  window.removeEventListener("mousemove", cursorMove);

  document.body.style.cursor = "default";
  h2Final.textContent = score;
  divReset.style.transform = "translateY(0%)";
  music.play();

  document.getElementById("resetGame").addEventListener("click", resetGame);
};

loadGame();
