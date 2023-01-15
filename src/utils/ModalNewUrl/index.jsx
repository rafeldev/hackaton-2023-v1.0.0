import React from "react";
import {
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

//css
import "./styles.css";

import UrlModalForm from "../../components/UrlModalForm";
import { useForm } from "react-hook-form";

const ModalNewUrl = ({ openModalNewUrl, handleCloseModal }) => {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      urlDestino: "",
      titulo: "",
    },
    mode: "onChange",
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* <h1>hola soy el modal pa crear esta welta</h1> */}
      <Modal isOpen={openModalNewUrl} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader p={"10px 24px"}>Nueva URL</ModalHeader>
          <Divider />
          <ModalCloseButton />
          <ModalBody>
            <UrlModalForm control={control} errors={errors} />
          </ModalBody>
          <Divider />

          <ModalFooter>
            <Button mr={3} variant="outline" onClick={handleCloseModal}>
              Cancelar
            </Button>
            <Button isDisabled={!isValid} type="submit" colorScheme="blue">
              Guardar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </form>
  );
};

export default ModalNewUrl;
