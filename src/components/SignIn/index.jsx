import {
  Box,
  Button,
  Divider,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import LoginCard from "../components-commos/LoginCard";
import { useDispatch } from "react-redux";
import { LoginUserThunk } from "../../redux/thunks/authUserThunk";

function SignIn({ setIsRegistrer }) {
  const [show, setShow] = useState(false);
  const handleShowPassword = () => setShow(!show);
  const dispatch = useDispatch();
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      correo: "",
      contraseña: "",
    },
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log(data);
    dispatch(LoginUserThunk(data));
  };
  return (
    <>
      <LoginCard>
        <form
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "17px",
          }}
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* <Flex direction="column" columnGap={4} p={4}> */}
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
                placeholder="correo"
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
          {/* </Flex> */}

          <Button colorScheme="blue" isDisabled={!isValid} type="submit">
            Enviar
          </Button>
          <Divider />
          <Button
            colorScheme="blue"
            variant="outline"
            onClick={() => setIsRegistrer(true)}
          >
            Regístrate
          </Button>
        </form>
      </LoginCard>
    </>
  );
}

export default SignIn;
