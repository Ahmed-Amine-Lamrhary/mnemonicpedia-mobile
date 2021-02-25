import React from "react";
import Mnemonics from "../components/Mnemonics";
import Container from "../components/Container";
import Navbar from "../components/Navbar";

function Home(props) {
  return (
    <Container>
      <Navbar />
      <Mnemonics />
    </Container>
  );
}

export default Home;
