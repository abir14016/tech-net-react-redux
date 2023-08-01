// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDqajgqecztC9AmctzJS1l_KxeugWPQ9Ls',
  authDomain: 'tech-net-505bf.firebaseapp.com',
  projectId: 'tech-net-505bf',
  storageBucket: 'tech-net-505bf.appspot.com',
  messagingSenderId: '522797878316',
  appId: '1:522797878316:web:3e34b0cb8305d196ccd589',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
