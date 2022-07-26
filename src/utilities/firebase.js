//------------------Imports------------------------------------------// 
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, onIdTokenChanged, signInWithPopup, signOut } from 'firebase/auth';
import { useState, useEffect } from 'react';
import { getStorage} from 'firebase/storage';
import { getDatabase, ref, onValue,set,serverTimestamp } from "firebase/database";
//------------------Your web app's Firebase configuration------------------------------------------// 
const firebaseConfig = {
  apiKey: "AIzaSyAP15bQWoq5hoilmAVTOFU4qmjO5e_VAPs",
  authDomain: "nysl-app-f28a2.firebaseapp.com",
  databaseURL: "https://nysl-app-f28a2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "nysl-app-f28a2",
  storageBucket: "nysl-app-f28a2.appspot.com",
  messagingSenderId: "925159170805",
  appId: "1:925159170805:web:a69f603f36bf14b1a65bbc",
  measurementId: "G-YCKWS30Y98"
};
//------------------Initialize Firebase------------------------------------------// 
const app = initializeApp(firebaseConfig);

//------------------Storage------------------------------------------//  storageReference
const storage = getStorage(app);
const db = getDatabase(app);




//------------------Write data to realtime database------------------------------------------// 
  const PostData = (url) =>{
    const auth = getAuth();
    const user = auth.currentUser;
    const uid = user.uid;
    set(ref(db, 'messages/pictures/game-1/picture-6'),{
      author: `${uid}`,
      timestamp:serverTimestamp(),
      url: "papa"
    })
  }


//------------------Read Data from realtime database------------------------------------------// 
const dbRef = ref(db, 'messages/pictures/game-1/picture-1/url');
  onValue(dbRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data)
    // WriteNewPost(postElement, data); 
  });

  


const SignInWithGoogle = () => {
    signInWithPopup(getAuth(app), new GoogleAuthProvider());
  };


//sign out 
const AppSignOut = () => signOut(getAuth(app));


//state if sign in or out
const useUserState = () => {
    const [user, setUser] = useState();
  
    useEffect(() => {
      onIdTokenChanged(getAuth(app), setUser);
    }, []);
  
    return [user];
  }; 


//------------------Exports------------------------------------------// 

  export { SignInWithGoogle, AppSignOut as signOut, useUserState, storage, db, PostData } ;