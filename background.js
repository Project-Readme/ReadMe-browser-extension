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

const database = firebase.firestore();
const ref = database.collection('content').doc('newArticle')

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        ref.set({
            URL: sender.tab.url,
            Article: request.article
        })
    });
