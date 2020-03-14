if (typeof firebase === 'undefined') throw new Error('hosting/init-error: Firebase SDK not detected. You must include it before /__/firebase/init.js');
var firebaseConfig = {
  "projectId": "test-a2237",
  "appId": "1:499855806044:web:d4141aaf447c948ff7a099",
  "databaseURL": "https://test-a2237.firebaseio.com",
  "storageBucket": "test-a2237.appspot.com",
  "locationId": "asia-northeast1",
  "apiKey": "AIzaSyBMUGMeU4rDSKoEyOWij2b9UsBgbSZ1QwY",
  "authDomain": "test-a2237.firebaseapp.com",
  "messagingSenderId": "499855806044"
};
if (firebaseConfig) {
  firebase.initializeApp(firebaseConfig);
}
