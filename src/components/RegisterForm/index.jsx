import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Box, Input, Card, CardBody, Stack } from "@chakra-ui/react";

const RegisterForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box boxSize="md">
        <h1>Register</h1>
        <Card>
          <CardBody>hola</CardBody>
          <Stack spacing={3} p={3}>
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
            <button type="submit">enviar</button>
          </Stack>
        </Card>
      </Box>
    </form>
  );
};

export default RegisterForm;
