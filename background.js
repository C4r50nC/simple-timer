chrome.alarms.create({
  periodInMinutes: 1 / 60,
});

chrome.alarms.onAlarm.addListener((alarm) => {
  chrome.storage.local.get(["timerInSeconds", "isRunning"], (res) => {
    const timeInSeconds = res.timerInSeconds ?? 0;
    const isRunning = res.isRunning ?? false;

    if (!isRunning) {
      return;
    }

    chrome.storage.local.set({
      timerInSeconds: timeInSeconds + 1,
    });

    chrome.action.setBadgeText({
      text: `${timeInSeconds + 1}`,
    });

    chrome.storage.sync.get(["notificationTimeInSeconds"], (res) => {
      const defaultNotificationTimeInSeconds = 300;
      const notificationTimeInSeconds =
        res.notificationTimeInSeconds ?? defaultNotificationTimeInSeconds;
      if (
        timeInSeconds % notificationTimeInSeconds === 0 &&
        timeInSeconds !== 0
      ) {
        this.registration.showNotification("Simple Timer", {
          body: `${notificationTimeInSeconds} seconds have passed`,
          icon: "icon.png",
        });
      }
    });
  });
});
