import { loginUserEmailPassword } from "../../services/auth/login.service";
import { registerUser } from "../../services/auth/register.service";
import { setUser } from "../slices/userSlice";

export const RegisterUserThunk = (data) => {
  return async (dispatch) => {
    const { correo, contraseña, nombre } = data;
    const newUser = await registerUser(correo, contraseña, nombre);

    dispatch(setUser(newUser));

    if (newUser.ok === false) {
      console.log(newUser.errorMessage);
    }
  };
};

export const LoginUserThunk = (data) => {
  return async (dispatch) => {
    const { correo, contraseña } = data;

    const user = await loginUserEmailPassword(correo, contraseña);

    dispatch(setUser(user));
    localStorage.setItem("token", user.uid);

    if (user.ok === false) {
      console.log(user.errorMessage);
    }
  };
};
