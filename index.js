const URL = window.location.href;
// document.addEventListener('DOMContentLoaded', function () {
//     document.getElementById('addArticle').addEventListener('click', sendArticle);
// });
const sendArticle = async () => {
    try {
        const result = await fetch(URL, {
            method: 'GET',
        });
        console.log('in function')
        const article = await result.text()
        console.log('here', article)
        chrome.runtime.sendMessage({ article }, function (response) {
            alert('Your article has been saved');
        });
    }
    catch (err) {
        console.log(err)
    }
}
sendArticle();
