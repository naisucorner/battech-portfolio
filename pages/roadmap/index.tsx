import type { NextPage } from "next";
import Head from "next/head";

import Signup from "../../components/signup";
import { Container, Header, HeaderSub, HeaderTitle } from "./styles";

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

      <Signup />
    </Container>
  );
};

export default Roadmap;
