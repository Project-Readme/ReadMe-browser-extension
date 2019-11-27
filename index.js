// var img = document.getElementsByTagName('img')[0].src
var css = document.head.outerHTML
var html = document.body.outerHTML
html = `<html> 
${html}
</html>`

var sendArticle = async () => {
    var title = document.getElementsByTagName('title')[0].innerHTML
    chrome.runtime.sendMessage({ html, css, title }, function (response) {
        console.log('working')
    });
}

sendArticle()
