importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyAxE2KEe7K_xRsQ6FgjcoMSEimmSKkK98Q",
    authDomain: "fir-shopping-58775.firebaseapp.com",
    projectId: "fir-shopping-58775",
    storageBucket: "fir-shopping-58775.appspot.com",
    messagingSenderId: "937632440172",
    appId: "1:937632440172:web:847bef94868c8e15289d49"
});

const messaging = firebase.messaging();

// messaging.onBackgroundMessage(function(payload) {
//     console.log('[firebase-messaging-sw.js] Received background message ', payload);
//     // Customize notification here
//     const notificationTitle = 'Background Message Title';
//     const notificationOptions = {
//       body: 'este es el body',
//       icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Firebase_icon.svg/1200px-Firebase_icon.svg.png'
//     };
  
//     self.registration.showNotification(notificationTitle,
//       notificationOptions);
//   });