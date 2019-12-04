var head = document.head.outerHTML;
var img = document.querySelector('meta[property="og:image"][content]').content;
var title = document.getElementsByTagName('title')[0].innerHTML
var aTags = document.getElementsByTagName('a')
// $("a").remove()

var articles = document.getElementsByTagName('article');
var preBody = articles.length ? articles[0].innerHTML : `<html>${Array.from(document.getElementsByTagName('p')).reduce((str, elem) => str + '<p>' + elem.innerHTML + '</p>', '')}</html>`;

var body = stripTags(preBody);


var sendArticle = async () => {
    chrome.runtime.sendMessage({ head, body, title, img }, function (response) { });
}

sendArticle()

// strips targeted HTML tags (hyperlinks, iframes and asides) from our body text
function stripTags(str) {
    let noAnchors = str.replace(/<a[^>]+>/g, '').replace(/<\/a>/g, '');

    let noIframe = noAnchors.replace(/<iframe[^>]+>/g, '').replace(/<\/iframe>/g, '');

    return noIframe.replace(/<aside[^>]+>/g, '').replace(/<aside>/g, '').replace(/<\/aside>/g, '');

}