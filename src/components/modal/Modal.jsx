import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import {
  ModalTitle,
  ModalHeader,
  TextContainer,
  ModalBody,
} from "./modal.styles";

const RouteModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <ModalHeader>
        <ModalTitle onClick={props.onHide}>cerrar</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <TextContainer>Hey {props.data}</TextContainer>
      </ModalBody>
    </Modal>
  );
};

export default RouteModal;
