import firebase from "firebase/compat/app";

import "firebase/compat/firestore"; // for the db
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyA3SHK6KP01o9I3gP21rt3lt9_T3hcUQVw",
  authDomain: "claritapp-ad1bc.firebaseapp.com",
  projectId: "claritapp-ad1bc",
  storageBucket: "claritapp-ad1bc.firebasestorage.app",
  messagingSenderId: "739338709667",
  appId: "1:739338709667:web:205cab3d0472f95a59ed16",
};

firebase.initializeApp(config);

const firestore = firebase.firestore();

const auth = firebase.auth();

const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  const userRef = firestore.doc(`users/${userAuth.multiFactor.user.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;

    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export { firestore, createUserProfileDocument, auth };
