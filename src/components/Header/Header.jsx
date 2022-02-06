import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  HeaderContainer,
  ColumnContainer,
  RowContainer,
  SearchContainer,
} from "./header.styles";

const Header = () => {
  return (
    <HeaderContainer>
      <RowContainer>
        <ColumnContainer>
          <h1>
            Don't be late,
            <br />
            aluxioner
          </h1>
        </ColumnContainer>
        <SearchContainer>
          <p>World!</p>
        </SearchContainer>
      </RowContainer>
    </HeaderContainer>
  );
};

export default Header;
