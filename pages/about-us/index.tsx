import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PageHeader from "../../components/page-header";

import {
  Container,
  Body,
  Introduce,
  Content,
  IntroduceImage,
  IntroduceContent,
  IntroduceHeader,
  IntroduceHeaderTitle,
  IntroduceHeaderBody,
  IntroduceBody,
  Tabs,
  Tab,
  TabContent,
  IntroduceButton,
  IntroduceButtonIcon,
  Vision,
  VisionBody,
  VisionContent,
  VisionTitle,
} from "./styles";

const data = [
  {
    title: "Phòng họp ảo",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.",
  },
  {
    title: "Dự án NFT",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.",
  },
  {
    title: "Game & Ứng dụng",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.",
  },
];

const AboutUs: NextPage = () => {
  const [tab, setTab] = useState(data[0].title);

  const handleChangeTab = (value: string) => setTab(value);

  return (
    <Container>
      <Head>
        <title>About Us</title>
      </Head>

      <PageHeader title="Giới Thiệu" />

      <Body>
        <Introduce>
          <Content>
            <IntroduceImage>
              <img src="./images/introduce.jpg" />
            </IntroduceImage>

            <IntroduceContent>
              <IntroduceHeader>
                <IntroduceHeaderTitle>
                  Giới thiệu về BATTECH
                </IntroduceHeaderTitle>

                <IntroduceHeaderBody>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularized in the 1960s with
                  the release of Leeriest sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Lauds.
                </IntroduceHeaderBody>
              </IntroduceHeader>

              <IntroduceBody>
                <Tabs>
                  {data.map(({ title }) => (
                    <Tab
                      key={title}
                      isActive={tab === title}
                      onClick={() => handleChangeTab(title)}
                    >
                      {title}
                    </Tab>
                  ))}
                </Tabs>

                <TabContent>
                  {data.find((item) => item.title === tab)?.body}

                  <IntroduceButton>
                    Xem thêm
                    <IntroduceButtonIcon>
                      <ArrowForwardIcon sx={{ fontSize: "20px" }} />
                    </IntroduceButtonIcon>
                  </IntroduceButton>
                </TabContent>
              </IntroduceBody>
            </IntroduceContent>
          </Content>
        </Introduce>

        <Vision>
          <VisionContent>
            <VisionTitle>Tầm nhìn và sứ mệnh</VisionTitle>
            <VisionBody>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
              <br/>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source.
            </VisionBody>
          </VisionContent>
        </Vision>
      </Body>
    </Container>
  );
};

export default AboutUs;
