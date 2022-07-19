import type { NextPage } from "next";
import Head from "next/head";
import LogoIcon from "../../components/icons/logo3";

import Signup from "../../components/signup";
import {
  Container,
  Header,
  HeaderSub,
  HeaderTitle,
  Body,
  Content,
  ContentHeader,
  ContentHeaderButton,
  ContentHeaderText,
  ContentBody,
  Item,
  Year,
  ItemContent,
  Logo,
  LogoText,
} from "./styles";

const data = [
  {
    year: 2018,
  },
  {
    year: 2019,
  },
  {
    year: 2020,
  },
  {
    year: 2021,
  },
  {
    year: 2022,
  },
];

const Roadmap: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Roadmap</title>
      </Head>

      <Header>
        <HeaderTitle>battech ROADMAP</HeaderTitle>
        <HeaderSub>
          Discover the story of how BATTECH emerged from venture building across
          various tech industries to metaverse innovations.
        </HeaderSub>
      </Header>

      <Body>
        <Content>
          <ContentHeader>
            <ContentHeaderButton>Our Roadmap</ContentHeaderButton>

            <ContentHeaderText>
              Learn how BATTECH has progressed with its ecosystem and when to
              expect future milestones for our metaverse.
            </ContentHeaderText>
          </ContentHeader>

          <ContentBody>
            {data.map(({ year }) => (
              <Item key={year}>
                <Year>{year}</Year>

                <ItemContent>
                  <Logo>
                    <LogoIcon />

                    <LogoText>Battech</LogoText>
                  </Logo>
                </ItemContent>
              </Item>
            ))}
          </ContentBody>
        </Content>
      </Body>

      <Signup />
    </Container>
  );
};

export default Roadmap;
