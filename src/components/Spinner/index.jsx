import { Flex } from "@chakra-ui/react";
import React from "react";
import { Spinner } from "@chakra-ui/react";

const SpinnerLoading = () => {
  return (
    <Flex
      style={{
        zIndex: "10000 !important",
        opacity: "0.5",
        position: "absolute",
      }}
      align="center"
      justify="center"
      width="100vw"
      height="100vh"
      backgroundColor="black"
    >
      <Spinner color="white" size="xl" />
    </Flex>
  );
};

export default SpinnerLoading;
