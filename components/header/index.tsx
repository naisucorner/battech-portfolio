import MenuIcon from "@mui/icons-material/Menu";
import Navbar from "../navbar";
import useWindowSize from "../../hook/useWindowSize";
import SelectLanguage from "../select-language";
import LogoIcon from "../icons/logo";
import { Container, Logo, Menu, Divider, Button, MobileMenu } from "./styles";

const Header = () => {
  const { width } = useWindowSize();

  console.log("width", width);
  return (
    <Container>
      <Logo>
        <LogoIcon />
      </Logo>

      {width && width > 1530 ? (
        <Menu>
          <Navbar />

          <Divider />

          <SelectLanguage />

          <Button>Buy Battech</Button>
        </Menu>
      ) : (
        <MobileMenu>
          <MenuIcon sx={{ color: "white", fontSize: "30px" }} />
        </MobileMenu>
      )}
    </Container>
  );
};

export default Header;
