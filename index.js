// var img = document.getElementsByTagName('img')[0].src

var getArticle = async () => {
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

var sendArticle = async () => {
    var title = document.getElementsByTagName('title')[0].innerHTML
    const article = await getArticle()
    chrome.runtime.sendMessage({ article, title }, function (response) {
    });
}

sendArticle()
