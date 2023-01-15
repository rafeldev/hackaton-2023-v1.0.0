import React, { useState } from "react";
import SubHeader from "../components/SubHeader";
import MyLinks from "../components/MyLinks/MyLinks";
import { Box, Flex } from "@chakra-ui/react";
import ModalNewUrl from "../utils/ModalNewUrl";

const Layout = ({ children }) => {
  const [openModalNewUrl, setOpenModalNewUrl] = useState(false);
  const handleCloseModal = () => {
    setOpenModalNewUrl(false);
  };
  return (
    <div>
      <SubHeader setOpenModalNewUrl={setOpenModalNewUrl} />
      <Flex>
        <MyLinks />
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          w="100%"
          background="gray.50"
        >
          La información de tu URL corta, estará aquí
        </Box>
      </Flex>
      <ModalNewUrl
        openModalNewUrl={openModalNewUrl}
        setOpenModalNewUrl={setOpenModalNewUrl}
        handleCloseModal={handleCloseModal}
      />
    </div>
  );
};

export default Layout;
