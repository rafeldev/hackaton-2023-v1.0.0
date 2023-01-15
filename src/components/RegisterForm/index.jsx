import React from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  Divider,
} from "@chakra-ui/react";

//css
import "./index.css";

import LoginCard from "../components-commos/LoginCard";

const RegisterForm = ({ setIsRegistrer }) => {
  const [show, setShow] = React.useState(false);
  const handleShowPassword = () => setShow(!show);
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      nombre: "",
      correo: "",
      contraseña: "",
    },
    mode: "onChange",
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <LoginCard>
      <form className="Form-register" onSubmit={handleSubmit(onSubmit)}>
        <Box pb={4}>
          <Controller
            control={control}
            name="nombre"
            rules={{
              required: {
                value: true,
                message: "El nombre es obligatorio",
              },
              min: {
                value: 5,
                message: "Ingresa un nombre de 5 dígitos",
              },
              minLenght: {
                value: 5,
                message: "Ingresa un nombre de 5 dígitos",
              },
              max: {
                value: 20,
                message: "Ingresa un nombre de 20 dígitos",
              },
              maxLenght: {
                value: 20,
                message: "Ingresa un nombre de 20 dígitos",
              },
            }}
            render={({
              field: { value, onChange, onBlur },
              fieldState: { error },
            }) => (
              <Input
                size="md"
                placeholder="Nombre o apodo"
                name="nombre"
                autoComplete="off"
                type="text"
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                isInvalid={error?.ref.name === "nombre"}
              />
            )}
          />

          {errors.nombre && (
            <Box display="flex" alignItems="center">
              <Text fontSize="xs" color={"red"}>
                {errors.nombre.message}
              </Text>
            </Box>
          )}
        </Box>
        <Box pb={4}>
          <Controller
            control={control}
            name="correo"
            rules={{
              required: {
                value: true,
                message: "El correo es obligatorio",
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Ingresa un correo válido",
              },
            }}
            render={({
              field: { value, onChange, onBlur },
              fieldState: { error },
            }) => (
              <Input
                size="md"
                placeholder="Correo"
                name="correo"
                autoComplete="off"
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                isInvalid={error?.ref.name === "correo"}
              />
            )}
          />
          {errors.correo && (
            <Box display="flex" alignItems="center">
              <Text fontSize="xs" color={"red"}>
                {errors.correo.message}
              </Text>
            </Box>
          )}
        </Box>

        <Box pb={4}>
          <Controller
            control={control}
            name="contraseña"
            rules={{
              required: {
                value: true,
                message: "La contraseña es obligatoria",
              },
            }}
            render={({
              field: { value, onChange, onBlur },
              fieldState: { error },
            }) => (
              <InputGroup>
                <Input
                  size="md"
                  type={show ? "text" : "password"}
                  placeholder="Contraseña"
                  name="contraseña"
                  autoComplete="off"
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  isInvalid={error?.ref.name === "contraseña"}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleShowPassword}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            )}
          />
          {errors.contraseña && (
            <Box display="flex" alignItems="center">
              <Text fontSize="xs" color={"red"}>
                {errors.contraseña.message}
              </Text>
            </Box>
          )}
        </Box>
        <Box pb={4}>
          <Button
            isDisabled={!isValid}
            w="100%"
            colorScheme="telegram"
            type="submit"
          >
            Regístrate
          </Button>
        </Box>
        <Divider />
        <Box pt={4} display="flex" justifyContent={"center"} gap={"5px"}>
          <Text fontSize="16px" color={"gray.500"}>
            ¿Ya tienes cuenta?{" "}
          </Text>
          <Text
            style={{ cursor: "pointer" }}
            onClick={() => setIsRegistrer(false)}
            color="blue.500"
          >
            inicia sesión
          </Text>
        </Box>
      </form>
    </LoginCard>
  );
};

export default RegisterForm;
