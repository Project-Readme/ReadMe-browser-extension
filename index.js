const URL = window.location.href;

const getArticle = async () => {
    try {
        const result = await fetch(URL, {
            method: 'GET',
        });
        const article = await result.text()
        return article;
    }
    catch (err) {
        console.log(err)
    }
}

const sendArticle = async () => {
    const article = await getArticle()
    chrome.runtime.sendMessage({ article }, function (response) {
    });
}

sendArticle()
