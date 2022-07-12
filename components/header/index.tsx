import { Container, Logo, Menu, Divider, Button } from "./styles";
import LogoIcon from "../icons/logo";
import Navbar from "../navbar";
import SelectLanguage from "../select-language";

const Layout = () => {
  return (
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
};

export default Layout;
