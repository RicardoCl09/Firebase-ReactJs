// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getMessaging, getToken } from "firebase/messaging"
import { getFirestore } from "firebase/firestore";

const vapidKey = "BAYoJM48U8_46_PbmvalDcprK0Ty7CDdYrTk-0aKysbKS5HIvTc6AT5nUCjg4vq7eLE8Xh3_7AfIFxDjErJ3YJs"

// const currentToken = "dtL2Qq-S_6osx3LQEszqlr:APA91bF6V0DxEz8kYEkp0JRA_edbyOWHwhpJi7m8XtdTV5y-mjSoQcGmbrSwNmqtPVOLqe9a9MhEWA5wAWFww0hfRONiYynVjJcNdLv_woEHnRCEr0jKQcJs2s56JD2fMvfrVxcEF6Yr"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxE2KEe7K_xRsQ6FgjcoMSEimmSKkK98Q",
  authDomain: "fir-shopping-58775.firebaseapp.com",
  projectId: "fir-shopping-58775",
  storageBucket: "fir-shopping-58775.appspot.com",
  messagingSenderId: "937632440172",
  appId: "1:937632440172:web:847bef94868c8e15289d49"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

getToken(messaging, {vapidKey}).then((currentToken) => {
  if (currentToken) {
    // Send the token to your server and update the UI if necessary
    // ...
    // console.log(currentToken)
    sendTokenToServer(currentToken);
  } else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
    // ...
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  // ...
});

const sendTokenToServer = token => {
  if (localStorage.getItem('tokenSentToServer')) return;
  console.log('Ha almacenado el token');
  localStorage.setItem('tokenSentToServer', '1')
}

export const db = getFirestore(app);