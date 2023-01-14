import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import React from "react";

const MyLinks = () => {
  return (
    <Box
      w={"40%"}
      height="649px"
      borderBottom="1px solid"
      borderRight="1px solid"
      borderColor="gray.200"
      // p="1rem 5rem"
      // justifyContent="space-between"
      alignItems="start"
    >
      <Box width="100%">
        <Text p="0.5 5rem">Tus links acortados</Text>
      </Box>
      <Divider />
      {/* <Box>
      </Box> */}
    </Box>
  );
};

export default MyLinks;
