

firebase.initializeApp({
    apiKey: 'AIzaSyDnTBGPTFHhQ9GFsd3MoypwJ0MBXNH7mO4',
    authDomain: 'readme-fa514.firebaseapp.com',
    databaseURL: 'https://readme-fa514.firebaseio.com',
    projectId: 'readme-fa514',
    storageBucket: 'readme-fa514.appspot.com',
    messagingSenderId: '706457283243',
    appId: '1:706457283243:web:d6341c27b1c7200a14e5ee',
    measurementId: 'G-VPC7CW19V8'
});
console.log('done')
const database = firebase.database();
console.log(database)
const ref = database.ref('content')
console.log(ref)
// ref.push('here')
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log(sender.tab ?
            "from a content script:" + sender.tab.url :
            "from the extension");
        console.log(sender.tab.url, request.article)
    });
