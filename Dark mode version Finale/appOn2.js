/* essai de code pour agrandir size, non fonctionnel

const fontSize = "40px";

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ fontSize });
  console.log('Default font size set to 40px');
});

let changeFontSize = document.getElementById("changeFontSize");
//alert("tata")
chrome.storage.sync.get("fontSize", ({ fontSize }) => {
  changeFontSize.style.fontSize = fontSize;
});

changeFontSize.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  //alert("juju")
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setFontSize,
  });
});
  
function setFontSize() {
  chrome.storage.sync.get("fontSize", ({ fontSize }) => {
    document.body.style.fontSize = fontSize;
    document.querySelector("html").style.font = fontSize;
  });

  console.log("ada")
}
*/