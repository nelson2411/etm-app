import React, { useState } from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";
import {
  ModalTitle,
  ModalHeader,
  TextContainer,
  ModalBody,
  ButtonLink,
  ButtonRoute,
  ModalFooter,
  GreetingContainer,
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
        <ButtonLink variant="link" onClick={props.onHide}>
          cerrar
        </ButtonLink>
      </ModalHeader>
      <ModalBody>
        <TextContainer>Hey {props.data},</TextContainer>
        <GreetingContainer>¿Cuál es tu rumbo, aluxioner?</GreetingContainer>
      </ModalBody>
      <ModalFooter>
        <Row>
          <Col>
            <ButtonRoute variant="outline-dark">Casa</ButtonRoute>
          </Col>
          <Col>
            <ButtonRoute variant="outline-dark">Aluxion</ButtonRoute>
          </Col>
        </Row>
      </ModalFooter>
    </Modal>
  );
};

export default RouteModal;
