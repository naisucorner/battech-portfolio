import { Container, Button, Text } from "./styles";

type HeaderShapeProps = {
  title: string;
  content?: string;
};

const HeaderShape = ({ title, content }: HeaderShapeProps) => (
  <Container>
    <Button>{title}</Button>

    {content && <Text>{content}</Text>}
  </Container>
);

export default HeaderShape;
