import styled from "styled-components";
import { Image } from "react-bootstrap";

export const BackgroundImage = styled.div`
  width: 100%;
  height: 250px;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-color: blue;
  mix-blend-mode: screen;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 250px;

  overflow: hidden;
  &:hover {
    cursor: pointer;
    & ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
  }
`;

export const LinkContainer = styled.a``;
