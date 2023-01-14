import { Avatar, Flex, HStack, Image, Text } from "@chakra-ui/react";
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
      <HStack spacing="1rem">
        <Avatar size="sm" src="https://bit.ly/sage-adebayo" />
        <Text fontWeight="normal" color="blackAlpha.700">
          Rick Adalberto
        </Text>
        <ChevronDownIcon cursor="pointer" />
      </HStack>
    </Flex>
  );
};
