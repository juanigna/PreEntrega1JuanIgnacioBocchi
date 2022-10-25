// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: 'AIzaSyAdtKv9O6Hg25jedOL0OWufSTjlTpLTnsc',

    authDomain: 'curso-react-coderhouse-a56c2.firebaseapp.com',

    projectId: 'curso-react-coderhouse-a56c2',

    storageBucket: 'curso-react-coderhouse-a56c2.appspot.com',

    messagingSenderId: '769750085420',

    appId: '1:769750085420:web:5649ebacb8fca73e180689',
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
