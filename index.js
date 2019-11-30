var head = document.head.outerHTML;
var article = document.getElementsByTagName('article')[0].innerHTML
var img = document.querySelector('meta[property="og:image"][content]').content;
var title = document.getElementsByTagName('title')[0].innerHTML

var sendArticle = async () => {
    chrome.runtime.sendMessage({ head, body: article, title, img }, function (response) {
        console.log('working')
    });
}

sendArticle()