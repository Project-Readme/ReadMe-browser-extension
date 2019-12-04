var head = document.head.outerHTML;
var img = document.querySelector('meta[property="og:image"][content]').content;
var title = document.getElementsByTagName('title')[0].innerHTML
var aTags = document.getElementsByTagName('a')
// $("a").remove()

var articles = document.getElementsByTagName('article');
var body = articles.length ? articles[0].innerHTML : `<html>${Array.from(document.getElementsByTagName('p')).reduce((str, elem) => str + '<p>' + elem.innerHTML + '</p>', '')}</html>`;

var sendArticle = async () => {
    chrome.runtime.sendMessage({ head, body, title, img }, function (response) { });
}

sendArticle()

