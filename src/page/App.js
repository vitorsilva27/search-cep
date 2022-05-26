import React from "react";
// import { MdSearch } from 'react-icons/md'

import { Container } from "./styles";

import { Text } from "../components/Text";
import { Form } from "../components/Form";

export const App = () => {
  return (
    <Container>
      <Text type="h1" children="Buscador de CEP" />

      <Form />
    </Container>
  );
};

export default App;
