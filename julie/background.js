let fontSize = "40px";

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ fontSize });
  console.log('Default font size set to 40px');
});