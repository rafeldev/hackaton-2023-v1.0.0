import React from "react";
import { Button, Flex, Text } from "@chakra-ui/react";

const SubHeader = ({ setOpenModalNewUrl }) => {
  return (
    <Flex
      borderBottom="1px solid"
      borderColor="gray.200"
      p="1rem 5rem"
      w="100%"
      // flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
    >
      <Text fontSize="3xl" as="b">
        Hola, Nombre:
      </Text>
      <Button colorScheme="telegram" onClick={() => setOpenModalNewUrl(true)}>
        Crear una nueva URL corta
      </Button>
    </Flex>
  );
};

export default SubHeader;
