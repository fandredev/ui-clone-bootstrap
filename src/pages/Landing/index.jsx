import React from "react";
import { Container } from "./styled";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Section from "../../components/Section";
import Footer from "../../components/Footer";

const Landing = () => {
  return (
    <Container>
      <Header />
      <Main />
      <Section />
      <Footer />
    </Container>
  );
};

export default Landing;
