import React from "react";
import AppButton from "../components/AppButton";
import Container from "../components/Container";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";

function NotFoundScreen(props) {
  return (
    <Container>
      <Heading>Page not found</Heading>
      <Paragraph>
        We're sorry, we couldn't find the page you requested.
      </Paragraph>
      <AppButton>Go to home page</AppButton>
    </Container>
  );
}

export default NotFoundScreen;
