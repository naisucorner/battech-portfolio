import { useState } from "react";
import {
  Container,
  Update,
  UpdateTitle,
  UpdateSub,
  EmailForm,
  Input,
  Button,
  Info,
  Logo,
  Detail,
  SocialGroup,
  Copyrights,
  Menu,
  Item,
  ItemIcon,
  CustomLink,
} from "./styles";
import LogoIcon from "../icons/logo2";
import FacebookIcon from "../icons/facebook";
import TwitterIcon from "../icons/twitter";
import YoutubeIcon from "../icons/youtube";
import InIcon from "../icons/in";
import DiscordIcon from "../icons/discrod";
import { useRouter } from "next/router";
import ArrowDownIcon from "../icons/arrow-down";
import Link from "next/link";
import listNav from "../../const/nav";

const Footer = () => {
  const [email, setEmail] = useState("");
  const { pathname } = useRouter();

  const onChangeEmail = (event: React.FormEvent<HTMLInputElement>) =>
    setEmail(event.currentTarget.value);

  return (
    <Container>
      <Update>
        <UpdateTitle>Get the latest on battech</UpdateTitle>
        <UpdateSub>
          Sign up now to get the latest information about BATTECH, the
          metaverse, and more.
        </UpdateSub>

        <EmailForm>
          <Input
            placeholder="Enter your email"
            onChange={onChangeEmail}
            value={email}
          />
          <Button>Get Updates</Button>
        </EmailForm>
      </Update>

      <Info>
        <Logo>
          <LogoIcon />
        </Logo>

        <Detail>
          Building the BATTECH VALT metaverse and its ecosystem of supporting
          solutions. Shaping the future of the Internet in the metaverse through
          blockchain, virtual reality, NFTs, and immersive technology.
        </Detail>

        <SocialGroup>
          <FacebookIcon />
          <TwitterIcon />
          <YoutubeIcon />
          <InIcon />
          <DiscordIcon />
        </SocialGroup>

        <Copyrights>Copyrights © 2022 BATTECH. All rights reserved.</Copyrights>
      </Info>

      <Menu>
        {listNav.map(({ name, path, children }) => (
          <Item key={name} color={path === pathname ? "#fff" : "#939393"}>
            <Link href={path} replace>
              <CustomLink>
                {name}

                {children && (
                  <ItemIcon>
                    <ArrowDownIcon />
                  </ItemIcon>
                )}
              </CustomLink>
            </Link>
          </Item>
        ))}
      </Menu>
    </Container>
  );
};

export default Footer;
