import React, { useState } from "react";
import { Link } from "react-router-dom";
import team_data from "../../data/team.data";
import { Container, Row, Col, Image, Card, Button } from "react-bootstrap";
import {
  ImageContainer,
  BackgroundImage,
  LinkContainer,
} from "./team-collection.styles";
import RouteModal from "../modal/Modal";

export const TeamCollection = () => {
  const [modalShow, setModalShow] = useState(false);
  const [name, setName] = useState("");
  const handleName = (name) => {
    setName(name);
    setModalShow(true);
  };
  return (
    <Container>
      <Row>
        {team_data.map((item) => (
          <Col key={item.id}>
            <div style={{ width: "175px" }}>
              <ImageContainer>
                <LinkContainer onClick={() => handleName(item.name)}>
                  <BackgroundImage
                    style={{ backgroundImage: `url(${item.imageUrl})` }}
                  />
                </LinkContainer>
              </ImageContainer>
              <h4>{item.name}</h4>
              <p>{item.position}</p>
            </div>
          </Col>
        ))}
      </Row>
      <RouteModal
        data={name}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Container>
  );
};

export default TeamCollection;
