import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDhwxq04CIeF7226u5k8KRGLsPjk3eazs4',
  authDomain: 'my-tapio-assignment.firebaseapp.com',
  projectId: 'my-tapio-assignment',
  storageBucket: 'my-tapio-assignment.appspot.com',
  messagingSenderId: '53061974198',
  appId: '1:53061974198:web:d1b344a07c19027f45ce17',
  measurementId: 'G-QX7RMJPSTP',
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore()

export { db }
