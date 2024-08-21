import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics'; 

const firebaseConfig = {
    apiKey: "AIzaSyC19TXcCjlADVmKUgm-Ds2YCCeKKeIGrtE",
    authDomain: "gastronomic-restaurant.firebaseapp.com",
    projectId: "gastronomic-restaurant",
    storageBucket: "gastronomic-restaurant.appspot.com",
    messagingSenderId: "361021417904",
    appId: "1:361021417904:web:099e4eca18e5d328060e75",
    measurementId: "G-50EX4T54XE"
  };

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firebase Analytics
const analytics = getAnalytics(app);

// Exporta Firestore
const db = getFirestore(app);

export default db;
