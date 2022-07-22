import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PageHeader from "../../components/page-header";
import Signup from "../../components/signup";

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
  Value,
  ValueImage,
  ValueContent,
  ValueTitle,
  ValueBody,
  Team,
  TeamShape,
  TeamBody,
  TeamTitle,
  TeamDes,
  Mems,
  Left,
  Chairs,
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
              <br />
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

        <Value>
          <ValueImage src="./images/value.jpg" />

          <ValueBody>
            <ValueTitle>Giá trị cốt lõi</ValueTitle>
            <ValueContent>
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
              <br />
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
              <br />
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those interested. Sections 1.10.32 and
              1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
              reproduced in their exact original form, accompanied by English
              versions from the 1914 translation by H. Rackham.
            </ValueContent>
          </ValueBody>
        </Value>

        <Team>
          <Left>
            <TeamShape>
              <TeamBody>
                <TeamTitle>Đội ngũ nhân sự</TeamTitle>
                <TeamDes>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
                  "de Finibus Bonorum et Malorum" (The Extremes of Good and
                  Evil) by Cicero, written in 45 BC. This book is a treatise on
                  the theory of ethics, very popular during the Renaissance. The
                  first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                  comes from a line in section 1.10.32.
                </TeamDes>
              </TeamBody>
            </TeamShape>

            <Chairs src="./images/chairs.jpg" />
          </Left>

          <Mems src="./images/mems.jpg" />
        </Team>

        <Signup />
      </Body>
    </Container>
  );
};

export default AboutUs;
