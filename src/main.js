import { createElement, append } from '/utility/jsx'

/** @jsx createElement */

// ------ ABOVE THIS LINE IS MANDATORY FOR ALL FILES USING JSX ---------


/// Firebase stuff
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCXnZXKK94myUyAcMihCXLfv-62NSmgZyY",
    authDomain: "codingportfolio.firebaseapp.com",
    projectId: "codingportfolio",
    storageBucket: "codingportfolio.appspot.com",
    messagingSenderId: "1096720885728",
    appId: "1:1096720885728:web:8a4560e11e63a7e7f02d85"
  };
const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);
  
// Get a reference to the storage service, which is used to create references in your storage bucket
//const storage = getStorage(firebaseApp);


import { banner } from '/components/banner/banner'
import { portfolio } from './components/portfolio/portfolio'
import { stack } from './components/stack/stack'
import { about } from './components/about/about';
import { scroll } from './components/scroll/scroll';
  
banner();
portfolio(storage);
//stack();
//about();
//scroll()