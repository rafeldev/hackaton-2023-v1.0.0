import React from "react";
import {
  Card,
  CardBody,
  Text,
  Box,
  Divider,
  Flex,
  Button,
  Link,
} from "@chakra-ui/react";
import { CalendarIcon, CopyIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";

const UrlDetail = () => {
  const handleCopy = () => {
    navigator.clipboard.writeText("https://www.mi_url_larga.com");
  };
  return (
    <Card
      p="1.5rem"
      w="46.313rem"
      display="flex"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <CardBody w="100%">
        <Flex flexDirection="column" alignItems="flex-start" pb="2rem">
          <Text as="b" fontSize="14px" pb="0.5rem">
            URL destino
          </Text>
          <Text color="gray.500" pb="1rem">
            https://www.mi_url_larga.com
          </Text>
          <Divider />
        </Flex>
        <Flex flexDirection="column" alignItems="flex-start">
          <Text as="b" fontSize="14px" pb="0.5rem">
            Título
          </Text>
          <Text color="gray.500" pb="1rem">
            Mi portafolio en Behance
          </Text>
          <Divider />
        </Flex>
        {/* Inicio de Tu URL acortada */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          background="blackAlpha.50"
          mt="2rem"
          p="1rem"
          borderRadius="10px"
        >
          <Flex flexDirection="column" alignItems="flex-start">
            <Text
              fontWeight="bold"
              as="b"
              fontSize="14px"
              pb="0.5rem"
              color="black"
            >
              URL Acortado
            </Text>
            <Text fontSize="16px" pb="0.5rem" color="blue.500">
              <Link href="https://www.mi_url_larga.com" as="a" target="_blank">
                https://www.mi_url_larga.com
              </Link>
            </Text>
          </Flex>
          <Box>
            <Button
              leftIcon={<CopyIcon />}
              colorScheme="telegram"
              onClick={handleCopy}
            >
              Copiar
            </Button>
          </Box>
        </Box>
        {/* Fin de Tu URL acortada */}
        <Flex alignItems="center" pt="1.688rem">
          <CalendarIcon w="18px" h="18px" color="blackAlpha.700" />
          <Text
            fontWeight="normal"
            as="b"
            fontSize="14px"
            pl="0.5rem"
            color="blackAlpha.700"
          >
            January 14, 2023 2:55 PM GMT-5 by Rick Adalberto
          </Text>
        </Flex>

        <Flex alignItems="" justifyContent="flex-end" pt="1.688rem">
          <Button
            leftIcon={<EditIcon />}
            colorScheme="telegram"
            variant="outline"
          >
            Editar
          </Button>
          <Button leftIcon={<DeleteIcon />} colorScheme="red" ml="1rem">
            Eliminar
          </Button>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default UrlDetail;
