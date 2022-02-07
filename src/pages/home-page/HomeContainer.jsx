import React from "react";
import NavigationBar from "../../components/navigation-bar/NavigationBar";
import Header from "../../components/Header/Header";
import TeamCollection from "../../components/team-collection/TeamCollection";

const HomeContainer = () => {
  return (
    <>
      <NavigationBar />

      <Header />
      <TeamCollection />
    </>
  );
};

export default HomeContainer;
