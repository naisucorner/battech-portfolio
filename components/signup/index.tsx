import LogoIcon from "../icons/logo2";

import { Container, Body, Logo, Detail, Text, Button } from "./styles";

const Signup = () => {
  return (
    <Container>
      <Body>
        <Logo>
          <LogoIcon />
        </Logo>

        <Detail>
          <Text>Get access to the battech ecosystem with just one ID.</Text>
          <Button>Sign Up</Button>
        </Detail>
      </Body>
    </Container>
  );
};

export default Signup;
