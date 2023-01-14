import { VStack } from "@chakra-ui/react";
import React from "react";

const LoginCard = ({ children }) => {
  return (
    <VStack
      spacing="24px"
      bg="#FFFF"
      w="24.813rem"
      p="1.5rem"
      borderRadius="12px"
      border="1px solid #E2E8F0"
      boxShadow="0px 0px 0px 1px rgba(0, 0, 0, 0.05)"
    >
      {children}
    </VStack>
  );
};

export default LoginCard;
