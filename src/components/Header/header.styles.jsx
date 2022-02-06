import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

export const HeaderContainer = styled(Container)`
  height: 60vh;
`;

export const ColumnContainer = styled(Col)`
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
`;

export const SearchContainer = styled(Col)`
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  align-items: end;
`;

export const RowContainer = styled(Row)`
  height: 100%;
`;
