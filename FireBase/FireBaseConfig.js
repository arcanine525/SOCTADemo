import * as firebase from 'firebase'

var config = {
    apiKey: "AIzaSyAxVvXxvQZHnIEbebqizy9QSFFWRZhT5PY",
    authDomain: "soctademo.firebaseapp.com",
    databaseURL: "https://soctademo.firebaseio.com",
    projectId: "soctademo",
    storageBucket: "soctademo.appspot.com",
    messagingSenderId: "1037929386237"
  };
export const firebaseApp = firebase.initializeApp(config);