import type { NextPage } from "next";
import Head from "next/head";
import { Container, Film, FilmTitle, FilmSub } from "./styles";

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Home</title>
      </Head>

      <Film>
        <FilmTitle>Best-in-class business meetings in the metaverse</FilmTitle>
      </Film>
    </Container>
  );
};

export default Home;
