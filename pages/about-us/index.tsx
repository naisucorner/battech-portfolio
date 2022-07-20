import type { NextPage } from "next";
import Head from "next/head";
import PageHeader from "../../components/page-header";

import { Container } from "./styles";

const AboutUs: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>About Us</title>
      </Head>

      <PageHeader title="Giới Thiệu" />
    </Container>
  );
};

export default AboutUs;
