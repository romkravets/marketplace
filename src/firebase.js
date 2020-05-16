import * as firebase from "firebase";

let firebaseConfig = {
  apiKey: "AIzaSyADCx6rRTqPDTNi5H2rcFcBPzcb3u4QSBk",
  authDomain: "marketplace-91001.firebaseapp.com",
  databaseURL: "https://marketplace-91001.firebaseio.com",
  projectId: "marketplace-91001",
  storageBucket: "marketplace-91001.appspot.com",
  messagingSenderId: "561618160981",
  appId: "1:561618160981:web:36105beef96ec8614233dc",
  measurementId: "G-4LJCGWNGKS",
};

const fire = firebase.initializeApp(firebaseConfig);
//firebase.analytics();

export default fire;
