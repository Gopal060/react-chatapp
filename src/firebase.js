import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA_9Kv5kegDrKnGVYS60chnhw6ECo8xo5E",
  authDomain: "chatapp-30238.firebaseapp.com",
  projectId: "chatapp-30238",
  storageBucket: "chatapp-30238.appspot.com",
  messagingSenderId: "877607621101",
  appId: "1:877607621101:web:3ba4d5e8516c71283f57e4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);