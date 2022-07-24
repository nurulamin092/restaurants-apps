import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDyqS3g8KI31J2SUWwwIr3PJHH2qlQV0uw",
    authDomain: "food-delivery-app-5537f.firebaseapp.com",
    databaseURL: "https://food-delivery-app-5537f-default-rtdb.firebaseio.com",
    projectId: "food-delivery-app-5537f",
    storageBucket: "food-delivery-app-5537f.appspot.com",
    messagingSenderId: "971717473580",
    appId: "1:971717473580:web:1320befb39e6d3f881e889"

};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage }
