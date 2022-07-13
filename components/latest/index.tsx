import { useState } from "react";

import { Container, Title, Sub, Form, Input, Button } from "./styles";

const Latest = () => {
  const [email, setEmail] = useState("");

  const onChangeEmail = (event: React.FormEvent<HTMLInputElement>) =>
    setEmail(event.currentTarget.value);

  return (
    <Container>
      <Title>Get the latest on battech</Title>

      <Sub>
        Sign up now to get the latest information about BATTECH, the metaverse,
        and more.
      </Sub>

      <Form>
        <Input
          placeholder="Enter your email"
          onChange={onChangeEmail}
          value={email}
        />
        <Button>Get Updates</Button>
      </Form>
    </Container>
  );
};

export default Latest;
