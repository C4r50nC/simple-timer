const nameInput = document.getElementById("name-input");
const timeInput = document.getElementById("time-input");
const saveBtn = document.getElementById("save-btn");

saveBtn.addEventListener("click", () => {
  const name = nameInput.value;
  const notificationTimeInSeconds = timeInput.value;
  chrome.storage.sync.set({
    name,
    notificationTimeInSeconds,
  });
});

chrome.storage.sync.get(["name", "notificationTimeInSeconds"], (res) => {
  const defaultNotificationTimeInSeconds = 300;
  nameInput.value = res.name ?? "???";
  timeInput.value =
    res.notificationTimeInSeconds ?? defaultNotificationTimeInSeconds;
});
