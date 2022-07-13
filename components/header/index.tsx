import Navbar from "../navbar";
import SelectLanguage from "../select-language";
import LogoIcon from "../icons/logo";
import { Container, Logo, Menu, Divider, Button } from "./styles";

const Header = () => (
  <Container>
    <Logo>
      <LogoIcon />
    </Logo>

    <Menu>
      <Navbar />

      <Divider />

      <SelectLanguage />

      <Button>Buy Battech</Button>
    </Menu>
  </Container>
);

export default Header;
