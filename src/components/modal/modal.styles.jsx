import styled from "styled-components";
import { Modal } from "react-bootstrap";

export const ModalHeader = styled(Modal.Header)`
  text-align: center;
  border-bottom: none;
  display: flex;
  justify-content: center;
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
  justify-content: center;
`;

export const TextContainer = styled.h4`
  color: #091e42;
`;
