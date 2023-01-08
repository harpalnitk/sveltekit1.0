import { initializeApp } from 'firebase/app';
import 'firebase/auth';
import {firebaseConfig} from './config.js';
import {readable} from 'svelte/store';


import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const provider = new GoogleAuthProvider();

const app =initializeApp(firebaseConfig);

const userMapper = claims => ({
    id: claims.user_id,
    name: claims.name,
    email:claims.email,
    picture:claims.picture
})

export const initAuth = (useRedirect = false)=> {
    const auth = getAuth();

    const loginWithGoogle = ()=>{
       // const provider = new firebase.auth.GoogleAuthProvider();
        if(useRedirect){
            return signInWithRedirect(auth,provider);
        }else{
            return signInWithPopup(auth,provider);
        }
    }

    const user = readable(null, set =>{
const unsub = auth.onAuthStateChanged(async fireUser =>{
    if(fireUser){
const token = await fireUser.getIdTokenResult();
const user = userMapper(token.claims);
set(user);
    }else{
        set(null)
    }
});
return unsub;
    });

    return {
        user,
        loginWithGoogle
    }
}