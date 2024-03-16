const currentTimeElement = document.getElementById("current-time");
const nameElement = document.getElementById("user-name");
const timerElement = document.getElementById("timer-text");

function updateTimerElement() {
  chrome.storage.local.get(["timerInSeconds"], (res) => {
    const timeInSeconds = res.timerInSeconds ?? 0;
    timerElement.textContent = `The timer is at: ${timeInSeconds} seconds`;
  });

  const currentTime = new Date().toLocaleTimeString();
  currentTimeElement.textContent = `The current time is: ${currentTime}`;
}

updateTimerElement();
setInterval(updateTimerElement, 1000);

chrome.storage.sync.get(["name"], (res) => {
  const name = res.name ?? "???";
  nameElement.textContent = `Your name is: ${name}`;
});

const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const resetBtn = document.getElementById("reset-btn");

startBtn.addEventListener("click", () => {
  chrome.storage.local.set({
    isRunning: true,
  });
});

stopBtn.addEventListener("click", () => {
  chrome.storage.local.set({
    isRunning: false,
  });
});

resetBtn.addEventListener("click", () => {
  chrome.storage.local.set({
    timerInSeconds: 0,
    isRunning: false,
  });
});
