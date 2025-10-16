// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAch_7AMTPR_o5bUZZwztaBWXiF-EI6No8',
  authDomain: 'fir-fighter-a8d41.firebaseapp.com',
  projectId: 'fir-fighter-a8d41',
  storageBucket: 'fir-fighter-a8d41.firebasestorage.app',
  messagingSenderId: '179724947655',
  appId: '1:179724947655:web:466c59705fe5560505eee2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);