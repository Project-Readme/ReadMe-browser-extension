/* eslint-disable newline-per-chained-call */
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
let incriment = firebase.firestore.FieldValue.increment(1);

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.type === 'loginForm') {
            let user;
            if (!JSON.parse(localStorage.getItem('user'))) {
                //login
                firebase.auth().signInWithEmailAndPassword(request.email, request.password)
                    .catch(error => console.log(error));

                user = firebase.auth().currentUser;
                localStorage.setItem('user', JSON.stringify(user))
            } else {
                //get from local storage
                user = JSON.parse(localStorage.getItem('user'))
            }
            sendResponse(user.displayName.trim())
        } else {
            //send article
            const currUser = JSON.parse(localStorage.getItem('user'))
            const url = sender.tab.url.split('/').join('')
            const usersRef = database.collection('users').doc(currUser.email).collection('articles').doc(url)
            const articlesRef = database.collection('articles').doc(url)

            articlesRef.get().then(function(doc) {
                if (doc.exists) {
                    database.collection('articles').doc(url).update({Popularity: incriment});
                    console.log('Document data:', doc.data());
                } else {
                    // doc.data() will be undefined in this case
                    articlesRef.set({
                        URL: sender.tab.url,
                        Head: request.head,
                        Body: request.body,
                        Title: request.title,
                        Image: request.img,
                        Popularity: 1
                    })
                    console.log('No such document!');
                }
                usersRef.set({
                    URL: sender.tab.url,
                    Head: request.head,
                    Body: request.body,
                    Title: request.title,
                    Image: request.img
                })
            }).catch(function(error) {
                console.log('Error getting document:', error);
            });
        }
    }
);
