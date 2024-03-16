const currentTimeElement = document.getElementById("current-time");
const nameElement = document.getElementById("user-name");
const currentTime = new Date().toLocaleTimeString();
currentTimeElement.textContent = `The current time is: ${currentTime}`;

chrome.action.setBadgeText(
  {
    text: "TIME",
  },
  () => {
    console.log("Finished setting badge text.");
  }
);

chrome.storage.sync.get(["name"], (res) => {
  const name = res.name ?? "???";
  nameElement.textContent = `Your name is ${name}`;
});
