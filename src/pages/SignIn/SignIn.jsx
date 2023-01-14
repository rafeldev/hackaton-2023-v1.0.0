import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import LoginCard from "../../components/components-commos/LoginCard";

function SignIn() {
  return (
    <>
      <Flex direction="column" align="center" padding="8rem" height="90vh">
        <LoginCard>
          <Heading as="h2" size="md" noOfLines={1} color="fontColor">
            ¿Qué rol tienes?
          </Heading>
        </LoginCard>
      </Flex>
    </>
  );
}

export default SignIn;
