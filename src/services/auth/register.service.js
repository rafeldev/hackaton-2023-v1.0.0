import { auth } from "../../firebase/config.firebase";
import {
    createUserWithEmailAndPassword,
    updateProfile,
   /* signInWithEmailAndPassword,
    signOut,
    signInWithPopup,
    GoogleAuthProvider,*/
  } from "firebase/auth";

export const registerUser = async (email, password, userName) => {
      try {
        const { user } = await createUserWithEmailAndPassword  (
          auth,
          email,
          password
        );
        
        //en firebase por defecto sale el nombre de usuario como null, esta linea actualiza 
        //el nombre de usuario en la base de datos
         await updateProfile(user, {
          displayName: userName,
        });

        return {
            uid: user.uid,
            userName: user.displayName,
          };

      } catch (error) {
        console.log(error);
        throw new Error(error.message)
      }
    };
  