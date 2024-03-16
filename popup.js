const currentTimeElement = document.getElementById("current-time");
const nameElement = document.getElementById("user-name");
const timerElement = document.getElementById("timer-text");

chrome.storage.local.get(["timerInSeconds"], (res) => {
  const timeInSeconds = res.timerInSeconds ?? 0;
  timerElement.textContent = `The timer is at: ${timeInSeconds} seconds`;
});

const currentTime = new Date().toLocaleTimeString();
currentTimeElement.textContent = `The current time is: ${currentTime}`;

chrome.storage.sync.get(["name"], (res) => {
  const name = res.name ?? "???";
  nameElement.textContent = `Your name is: ${name}`;
});
