import {
    signInWithEmailAndPassword,
  } from "firebase/auth";
import { auth } from "../../firebase/config.firebase";

export const loginUserEmailPassword = async(correo, contraseña) => {
   
      try {
        const { user } = await signInWithEmailAndPassword(auth, correo, contraseña);
        
        return {
            uid: user.uid,
            userName: user.displayName,
        }
  
      } catch (error) {

        if (error.message === 'Firebase: Error (auth/user-not-found).') {
          return {
              ok: false,
              errorMessage: 'Usuario no existente.'
          }
      }

      }
    };
  