import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

var config = {
	apiKey: "AIzaSyDj1kPvJgaBIj7HSBewbZveRLoFZA_eMy0",
	authDomain: "cloudmessage-bdd44.firebaseapp.com",
	databaseURL: "https://cloudmessage-bdd44.firebaseio.com",
	projectId: "cloudmessage-bdd44",
	storageBucket: "cloudmessage-bdd44.appspot.com",
	messagingSenderId: "548210758981",
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
