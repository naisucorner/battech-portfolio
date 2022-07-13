import Latest from "../latest";
import Info from "../info";
import Menu from "../menu";
import { Container } from "./styles";

const Footer = () => (
  <Container>
    <Latest />

    <Info />

    <Menu />
  </Container>
);

export default Footer;
