const currentTimeElement = document.getElementById("current-time");
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
