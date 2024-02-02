 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth'
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'
import React from "react";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAY1VlzkqxKrwq50DTap7ZA8Qdkn3ZSXRs",
  authDomain: "auth-c2cf8.firebaseapp.com",
  projectId: "auth-c2cf8",
  storageBucket: "auth-c2cf8.appspot.com",
  messagingSenderId: "378249154008",
  appId: "1:378249154008:web:110d5039f47ce59d44b6ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});





