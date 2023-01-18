import { auth } from "../../firebase/config.firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

export const registerUser = async (correo, contraseña, nombre) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
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

    if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
      return {
        ok: false,
        errorMessage: 'El correo electrónico ya está en uso.'
      }
    }
    console.log(error.message);
  }
};
