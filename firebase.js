import * as firebase from 'firebase';

import "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyCBKg6YOTtMtW0gPNzwZNvRDrMZQ6UowFY",
    authDomain: "a-course-scheduler.firebaseapp.com",
    databaseURL: "https://a-course-scheduler-default-rtdb.firebaseio.com",
    projectId: "a-course-scheduler",
    storageBucket: "a-course-scheduler.appspot.com",
    messagingSenderId: "334041730704",
    appId: "1:334041730704:web:4c2bb1be5b13edd17b9215",
    measurementId: "G-5LS8VY5SKE"
};


firebase.initializeApp(firebaseConfig);

export { firebase };