import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import LoginCard from "../../components/components-commos/LoginCard";
import TemplateLogin from "../../components/components-commos/TemplateLogin";

function SignIn() {
  const [show, setShow] = useState(false);
  const handleShowPassword = () => setShow(!show);
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <TemplateLogin>
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
                  isInvalid={error?.ref.correo === "correo"}
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

            <Button colorScheme="blue">Enviar</Button>
            <Divider />
            <Button colorScheme="blue" variant="outline">
              Regístrate
            </Button>
          </form>

          {/* <Heading as="h2" size="md" noOfLines={1} color="fontColor">
            ¿Qué rol tienes? lore
          </Heading> */}
        </LoginCard>
      </TemplateLogin>
      {/* <Flex direction="column" align="center" padding="8rem" height="90vh"> */}

      {/* </Flex> */}
    </>
  );
}

export default SignIn;
