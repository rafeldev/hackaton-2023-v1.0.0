import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import RegisterForm from "../../components/RegisterForm";
import SignIn from "../../components/SignIn";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function TemplateLogin() {
  const [isRegistrer, setIsRegistrer] = useState(false);
  console.log(
    "🚀 ~ file: index.jsx:8 ~ TemplateLogin ~ isRegistrer",
    isRegistrer
  );
  const history = useHistory();
  const isAuth = useSelector((state) => state.auth.uid);

  useEffect(() => {
    if (isAuth !== null) {
      window.location.href = "/home";
    }
  }, [isAuth, history]);

  return (
    <Flex
      direction="column"
      align="center"
      padding="8rem"
      height="90vh"
      justifyContent={"center"}
    >
      <div style={{ display: "flex", gap: "17px" }}>
        <div>
          <Box maxW="664px">
            <Heading as="h1" size="2xl" textAlign="left">
              Acorta y gestiona URL de forma sencilla
            </Heading>
            <Text fontSize="sm" textAlign="left">
              Copia tus URL´s y acorta en dos pasos
            </Text>
          </Box>
        </div>
        <div>
          {isRegistrer ? (
            <RegisterForm setIsRegistrer={setIsRegistrer} />
          ) : (
            <SignIn setIsRegistrer={setIsRegistrer} />
          )}
        </div>
      </div>
    </Flex>
  );
}

export default TemplateLogin;
