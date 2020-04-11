import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBCNtFIb5qfrSmi_pWFd8nkBGsgVPYD9Is",
    authDomain: "my-ecomm-4fece.firebaseapp.com",
    databaseURL: "https://my-ecomm-4fece.firebaseio.com",
    projectId: "my-ecomm-4fece",
    storageBucket: "my-ecomm-4fece.appspot.com",
    messagingSenderId: "684894916444",
    appId: "1:684894916444:web:c1b892df37119a4d02fb99",
    measurementId: "G-V5TMJQL6BT"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (e) {
            console.log('Error createing user: ', e);
        }
    }

    return userRef;
};

export default firebase;