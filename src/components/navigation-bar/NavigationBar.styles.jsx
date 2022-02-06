import styled from "styled-components";
import { Navbar } from "react-bootstrap";

export const NavigationContainer = styled(Navbar)`
  background-color: transparent;
  height: 110px;
  a {
    color: #fff !important;
    margin: 0 45px;

    &:hover {
      color: green !important;
    }
  }
`;
