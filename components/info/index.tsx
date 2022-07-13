import LogoIcon from "../icons/logo2";
import FacebookIcon from "../icons/facebook";
import TwitterIcon from "../icons/twitter";
import YoutubeIcon from "../icons/youtube";
import InIcon from "../icons/in";
import DiscordIcon from "../icons/discrod";
import { Container, Logo, Detail, Socials, Copyrights, Social } from "./styles";

const socialData = [
  {
    name: "facebook",
    icon: FacebookIcon,
    path: "/",
  },
  {
    name: "twitter",
    icon: TwitterIcon,
    path: "/",
  },
  {
    name: "youtube",
    icon: YoutubeIcon,
    path: "/",
  },
  {
    name: "in",
    icon: InIcon,
    path: "/",
  },
  {
    name: "discord",
    icon: DiscordIcon,
    path: "/",
  },
];

const Info = () => (
  <Container>
    <Logo>
      <LogoIcon />
    </Logo>

    <Detail>
      Building the BATTECH VALT metaverse and its ecosystem of supporting
      solutions. Shaping the future of the Internet in the metaverse through
      blockchain, virtual reality, NFTs, and immersive technology.
    </Detail>

    <Socials>
      {socialData.map(({ name, icon: Icon }) => (
        <Social key={name}>{<Icon />}</Social>
      ))}
    </Socials>

    <Copyrights>Copyrights © 2022 BATTECH. All rights reserved.</Copyrights>
  </Container>
);

export default Info;
