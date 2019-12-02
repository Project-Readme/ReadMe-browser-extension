const form = document.getElementById('loginForm');
const addButton = document.getElementById('addArticle');
const name = document.getElementById('name');
const logOut = document.getElementById('logOut')
form.onsubmit = submit;
logOut.onclick = onLogOut;

if (JSON.parse(localStorage.getItem('user'))) {
    form.style.display = 'none'
    addButton.style.display = 'block'
    logOut.style.display = 'block'
    name.innerHTML += JSON.parse(localStorage.getItem('user')).displayName
}

function onLogOut(evt) {
    evt.preventDefault()
    chrome.runtime.sendMessage({ type: logOut.id }, function (response) {
        form.style.display = 'block'
        addButton.style.display = 'none'
        logOut.style.display = 'none'
    })
}

function submit(evt) {
    evt.preventDefault()
    const email = document.getElementById('email')
    const password = document.getElementById('password')
    chrome.runtime.sendMessage({ type: form.id, email: email.value, password: password.value }, function (response) {
        //user successfully logged in hide login form show article button
        console.log('response', response)
        // console.log('status', response.status)
        if (response === 'success') {
            form.style.display = 'none'
            addButton.style.display = 'block'
            logOut.style.display = 'block'
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
