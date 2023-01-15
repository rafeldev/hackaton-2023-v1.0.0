import { Box, Input, Text } from "@chakra-ui/react";
import React from "react";
import { Controller } from "react-hook-form";

const UrlModalForm = ({ control, errors }) => {
  return (
    <>
      <Box pt={4} pb={6}>
        <Controller
          control={control}
          name="urlDestino"
          rules={{
            required: {
              value: true,
              message: "El nombre es obligatorio",
            },
            pattern: {
              value:
                /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi,
              message: "Ingresa una URL válida",
            },
          }}
          render={({
            field: { value, onChange, onBlur },
            fieldState: { error },
          }) => (
            <>
              <Text mb="8px" as="b">
                URL destino
              </Text>
              <Input
                size="md"
                placeholder="URL destino"
                name="urlDestino"
                autoComplete="off"
                type="url"
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                isInvalid={error?.ref.name === "urlDestino"}
              />
            </>
          )}
        />

        {errors.urlDestino && (
          <Box display="flex" alignItems="center">
            <Text fontSize="xs" color={"red"}>
              {errors.urlDestino.message}
            </Text>
          </Box>
        )}
      </Box>
      <Box pb={4}>
        <Controller
          control={control}
          name="titulo"
          rules={{
            required: {
              value: true,
              message: "El título es obligatorio",
            },
          }}
          render={({
            field: { value, onChange, onBlur },
            fieldState: { error },
          }) => (
            <>
              <Text mb="8px" as="b">
                Título
              </Text>
              <Input
                size="md"
                placeholder="Título"
                name="titulo"
                autoComplete="off"
                type={"text"}
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                isInvalid={error?.ref.name === "titulo"}
              />
            </>
          )}
        />
        {errors.titulo && (
          <Box display="flex" alignItems="center">
            <Text fontSize="xs" color={"red"}>
              {errors.titulo.message}
            </Text>
          </Box>
        )}
      </Box>
    </>
  );
};

export default UrlModalForm;
