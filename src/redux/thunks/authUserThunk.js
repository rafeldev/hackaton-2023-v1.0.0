import { loginUserEmailPassword } from "../../services/auth/login.service";
import { registerUser } from "../../services/auth/register.service";
import { setUser } from "../slices/userSlice";

export const RegisterUserThunk = (data) => {
  return async (dispatch) => {
    const {correo, contraseña, nombre} = data;
    try {
      const newUser = await registerUser(correo, contraseña, nombre);

      console.log(newUser)

      dispatch(
        setUser(newUser)
      );
    } catch (err) {
      console.error(err);
    }
  };
};

export const LoginUserThunk = (email, password) => {
    return async (dispatch) => {
        try {
            const user = await loginUserEmailPassword(email,password)

            dispatch(
                setUser(user)
            );
        } catch (error) {
            console.log(error);
        }
    }
}
