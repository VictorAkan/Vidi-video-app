import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDskg-0rPAnT_sgfJI7Pzo4VBE-NpstWrw",
    authDomain: "vidi-server-side.firebaseapp.com",
    projectId: "vidi-server-side",
    storageBucket: "vidi-server-side.appspot.com",
    messagingSenderId: "1076790811020",
    appId: "1:1076790811020:web:6d44c1a3499ea3782d9ea9",
    measurementId: "G-0N5046FF9K"
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)