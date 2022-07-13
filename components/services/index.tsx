import VR from "../../public/images/vr.png";
import Meetings from "../../public/images/meetings.png";
import {
  Container,
  Title,
  Body,
  Service,
  ServiceImage,
  Description,
  ServiceTitle,
  Button,
} from "./styles";

const servicesData = [
  {
    name: "vr",
    image: VR,
    title: "Phòng họp VR",
    des: `Do you miss having in-person meetings? Do you want to feel engaged?
    Inside Battech, all distractions are gone and you meet like was it in
    real life. Whether it is team meetings or customer meetings, you have
    all the necessary equipment at your fingertips to make your meetings
    more efficient. Feel the 3D sound from the other participants and wrap
    up your meetings with our signature virtual handshake.`,
  },
  {
    name: "meetings",
    image: Meetings,
    title: "Meetings",
    des: `Do you miss having in-person meetings? Do you want to feel engaged?
    Inside Battech, all distractions are gone and you meet like was it in
    real life. Whether it is team meetings or customer meetings, you have
    all the necessary equipment at your fingertips to make your meetings
    more efficient. Feel the 3D sound from the other participants and wrap
    up your meetings with our signature virtual handshake.`,
  },
];

const Services = () => (
  <Container>
    <Title>Dịch vụ của chúng tôi</Title>

    <Body>
      {servicesData.map(({ name, image, title, des }) => (
        <Service key={name}>
          <ServiceImage src={image} height="294px" width="588px" />
          <ServiceTitle>{title}</ServiceTitle>
          <Description>{des}</Description>
          <Button>Learn More</Button>
        </Service>
      ))}
    </Body>
  </Container>
);

export default Services;
