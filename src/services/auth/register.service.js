import { auth } from "../../firebase/config.firebase";
import {
    createUserWithEmailAndPassword,
    updateProfile,
  } from "firebase/auth";

export const registerUser = async (correo, contraseña, nombre) => {
      try {
        const { user } = await createUserWithEmailAndPassword  (
          auth,
          correo,
          contraseña
        );
        
        //en firebase por defecto sale el nombre de usuario como null, esta linea actualiza 
        //el nombre de usuario en la base de datos
         await updateProfile(user, {
          displayName: nombre,
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
  