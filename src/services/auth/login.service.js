import {
    signInWithEmailAndPassword,
  } from "firebase/auth";
import { auth } from "../../firebase/config.firebase";

export const loginUserEmailPassword = async(email, password) => {
   
      try {
        const { user } = await signInWithEmailAndPassword(auth, email, password);
        
        return {
            uid: user.uid,
            userName: user.displayName,
        }
  
      } catch (error) {
        throw new Error(error.message)
      }
    };
  