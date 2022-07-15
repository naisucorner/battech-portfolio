import {
  Container,
  Left,
  Right,
  Girl,
  Boy,
  Box,
  BoxTitle,
  BoxSub,
  Center,
} from "./styles";

const Connected = () => (
  <Container>
    <Left>
      <img
        src="./images/base.png"
        width="100%"
        height="100%"
        style={{ opacity: "70%" }}
      />
      <Girl src="./images/girl.png" />
    </Left>

    <Center>
      <img
        src="./images/1234.png"
        width="100%"
        height="100%"
        style={{ opacity: "70%" }}
      />
    </Center>

    <Right>
      <img
        src="./images/base.png"
        width="100%"
        height="100%"
        style={{ opacity: "70%" }}
      />
      <Boy src="./images/boy.png" />
    </Right>

    <Box>
      <BoxTitle>Feel Connected</BoxTitle>

      <BoxSub>
        From the first virtual handshake, Battech makes people feel like they
        are closer together, boosting team cohesion and engagement
      </BoxSub>
    </Box>
  </Container>
);

export default Connected;
