import React from "react";
import SubHeader from "../components/SubHeader";
import MyLinks from "../components/MyLinks/MyLinks";
import { Flex } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <div>
      <SubHeader />
      <Flex>
        <MyLinks />
        <main>hola</main>
      </Flex>
    </div>
  );
};

export default Layout;
