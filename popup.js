function injectTheScript() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.executeScript(tabs[0].id, { file: "index.js" });
    });
}

const addButton = document.getElementById('addArticle')

addButton.addEventListener('click', function () {
    injectTheScript()
    alert('Your article has been saved')
});
