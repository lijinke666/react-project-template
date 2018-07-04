import React, { PureComponent } from "react";
import Container from "shared/components/Container";

export default class TestPage extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        <h2>Dawdler!</h2>
      </Container>
    );
  }
}
