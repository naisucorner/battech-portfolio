import Latest from "../latest";
import Info from "../info";
import Menu from "../menu";
import useWindowSize from "../../hook/useWindowSize";
import { Container } from "./styles";

const Footer = () => {
  const { width } = useWindowSize();

  return (
    <Container>
      <Latest />

      <Info />

      {width && width > 1530 && <Menu />}
    </Container>
  );
};

export default Footer;
