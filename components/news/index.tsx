import Image from "next/image";

import TwentyFour from "../../public/images/24.png";
import Vnexpress from "../../public/images/vnexpress.png";
import Vtc from "../../public/images/vtc.png";
import Dantri from "../../public/images/dantri.png";
import Hanoimoi from "../../public/images/hanoimoi.png";
import { Container, Title, Body, New, ImageContainer, Button } from "./styles";

const data = [
  {
    name: "24h",
    image: TwentyFour,
    path: "/",
  },
  {
    name: "vnexpress",
    image: Vnexpress,
    path: "/",
  },
  {
    name: "vtc",
    image: Vtc,
    path: "/",
    width: "73px",
    height: "73px",
  },
  {
    name: "dantri",
    image: Dantri,
    path: "/",
  },
  {
    name: "hanoimoi",
    image: Hanoimoi,
    path: "/",
  },
];

export const News = () => (
  <Container>
    <Title>Báo chí nói gì về chúng tôi</Title>

    <Body>
      {data.map(({ image, name, width, height }) => (
        <New key={name}>
          <ImageContainer>
            <Image src={image} width={width} height={height} />
          </ImageContainer>

          <Button>Learn More</Button>
        </New>
      ))}
    </Body>
  </Container>
);

export default News;
