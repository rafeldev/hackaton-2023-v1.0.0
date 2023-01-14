import React from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";

import LoginCard from "../components-commos/LoginCard";

const RegisterForm = () => {
  const [show, setShow] = React.useState(false);
  const handleShowPassword = () => setShow(!show);
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });
  console.log(errors, "errores");
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <LoginCard>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="nombre"
          rules={{
            required: {
              value: true,
              message: "El nombre es obligatorio",
            },
            min: {
              value: 20,
              message: "Ingresa un número de 9 dígitos",
            },
            minLength: {
              value: 20,
              message: "Ingresa un número de 9 dígitos",
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
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              isInvalid={error?.ref.name === "nombre"}
            />
          )}
        />

        {errors.nombre && (
          <Box display="flex" alignItems="center" pb={4}>
            <Text fontSize="xs" color={"red"}>
              {errors.nombre.message}
            </Text>
          </Box>
        )}

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
          <Box display="flex" alignItems="center" pb={4}>
            <Text fontSize="xs" color={"red"}>
              {errors.correo.message}
            </Text>
          </Box>
        )}
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
          <Box display="flex" alignItems="center" pb={4}>
            <Text fontSize="xs" color={"red"}>
              {errors.contraseña.message}
            </Text>
          </Box>
        )}
        <button type="submit">enviar</button>
      </form>
    </LoginCard>
  );
};

export default RegisterForm;
