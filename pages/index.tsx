import type { NextPage } from "next";
import Head from "next/head";

import Film from "../components/film";
import Services from "../components/services";
import News from "../components/news";
import Review from "../components/review";
import { Container } from "./styles";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Home</title>
      </Head>
      <Film /> 
      <Services />
      <Review />
      <News />
    </Container>
  );
};

export default Home;
