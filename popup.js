const form = document.getElementById('loginForm')
const addButton = document.getElementById('addArticle')
form.onsubmit = submit;

if (JSON.parse(localStorage.getItem('user'))) {
    form.style.display = 'none'
    addButton.style.display = 'block'
}

function submit(evt) {
    evt.preventDefault()
    const email = document.getElementById('email')
    const password = document.getElementById('password')
    chrome.runtime.sendMessage({ type: form.id, email: email.value, password: password.value }, function (response) {
        //user successfully logged in hide login form show article button
        if (response) {
            form.style.display = 'none'
            addButton.style.display = 'block'
        }
    });
}

function injectTheScript() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.executeScript(tabs[0].id, { file: "index.js" });
    });
}

addButton.addEventListener('click', function () {
    injectTheScript()
    alert('Your article has been saved')
});
