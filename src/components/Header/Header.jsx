import { Avatar, Flex, Image, Popover, PopoverBody, PopoverContent, PopoverHeader, PopoverTrigger, Text } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Logo from "../../assets/logo.jpg";

export const Header = () => {
  return (
    <Flex
      borderBottom="1px solid"
      borderColor="gray.200"
      p="1rem 5rem"
      justifyContent="space-between"
      alignItems="center"
    >
      <Image src={Logo} alt="Logo" />
      <Flex columnGap="1rem" alignItems="center">
        <Avatar name="Rick Adalberto" size="sm" /> {/* name={string} --> iniciales del usuario autenticado */}
        <Text fontWeight="normal" color="blackAlpha.700" fontSize="18px">
          Rick Adalberto
        </Text>
        <Popover>
          <PopoverTrigger>
            <ChevronDownIcon cursor="pointer" />
          </PopoverTrigger>
          <PopoverContent w="fit-content" h="auto" mr="80px" p="1rem 1rem .5rem" boxShadow="0px 6px 36px 0px #0000001A" border="1px" borderColor="gray.200">
            <PopoverHeader display="flex" alignItems="center" columnGap="1rem" pb="1rem">
              <Avatar name="Rick Adalberto" w="48px" h="48px" /> {/* name={string} --> iniciales del usuario autenticado */}
              <Text color="blackAlpha.700" fontSize="16px" fontWeight="500">rick_adalberto@url.short</Text> {/* {string} --> correo del usuario autenticado */}
            </PopoverHeader>
            <PopoverBody p="8px 0px">
              <Text cursor="pointer" fontSize="16px" color="blackAlpha.700" w="fit-content">Cerrar sesión</Text>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Flex>
    </Flex>
  );
};
