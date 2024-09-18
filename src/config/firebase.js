// src/config/firebase.js
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://flexforce-5aad9.firebaseio.com"  // Replace with your Firebase database URL
});

const db = admin.firestore();

module.exports = { db };