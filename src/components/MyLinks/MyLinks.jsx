import React from "react";
import { Box, Button, Divider, Flex, Image, Text } from "@chakra-ui/react";
import MenuHamburguesa from "../../assets/menuHamburguesa.svg";

const MyLinks = ({ children, handleOpenModal }) => {
  return (
    <Box
      w={"40%"}
      height="649px"
      borderBottom="1px solid"
      borderRight="1px solid"
      borderColor="gray.200"
      // p="1rem 5rem"
    >
      <Box width="100%">
        <Text w="fit-content" p="0.5rem 5rem">
          Tus links acortados
        </Text>
      </Box>
      <Divider mb="5rem" />
      <Box
        height="100%"
        display="flex"
        flexDirection="column"
        // justifyContent="center"
        alignItems="center"
      >
        <Image
          w={"112px"}
          h={"112px"}
          pb={4}
          src={MenuHamburguesa}
          alt="MenuHamburguesa"
        />
        <Text pb={8}>
          Aún no has creado links cortos, <br />
          añade el primero
        </Text>
        <Button colorScheme="telegram" onClick={() => handleOpenModal()}>
          Crear una nueva URL corta
        </Button>
      </Box>

      {children}
    </Box>
  );
};

export default MyLinks;
