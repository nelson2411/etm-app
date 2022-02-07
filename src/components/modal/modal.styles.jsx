import styled from "styled-components";
import { Modal, Button } from "react-bootstrap";

export const ModalHeader = styled(Modal.Header)`
  text-align: center;
  border-bottom: none;
  display: flex;
  justify-content: center;
`;

export const ButtonLink = styled(Button)`
  color: #091e42;
  text-decoration: none;

  &hover {
    color: #0e1ad5;
  }
`;

export const ButtonRoute = styled(Button)`
  background-color: #091e42;
  padding: 0.375rem 2rem;
  border-radius: 1.25rem;
  width: 150px;
  color: #fff;

  &:hover {
    background-color: #fff;
    color: #091e42;
  }
`;

export const ModalTitle = styled(Modal.Title)`
  color: black;
  text-align: center;
  font-size: 15px;

  &:hover {
    cursor: pointer;
  }
`;
export const ModalBody = styled(Modal.Body)`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const TextContainer = styled.h4`
  color: #091e42;
`;
export const GreetingContainer = styled.h5`
  color: #091e42;
`;

export const ModalFooter = styled(Modal.Footer)`
  border-top: none;
  display: flex;
  justify-content: center;
`;
