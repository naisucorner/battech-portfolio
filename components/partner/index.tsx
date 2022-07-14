import Image from "next/image";
import CyberIcon from "../../public/images/cyber.png";
import BadDaysIcon from "../../public/images/baddays.png";
import Icon from "../../public/images/icon.png";
import RiphIcon from "../../public/images/riph.png";
import ChasingIcon from "../../public/images/chasing.png";
import { Container, Title, Groups, Item } from "./styles";

const data = [
  {
    name: "cyber",
    image: CyberIcon,
    path: "/",
  },
  {
    name: "baddays",
    image: BadDaysIcon,
    path: "/",
  },
  {
    name: "icon",
    image: Icon,
    path: "/",
  },
  {
    name: "riph",
    image: RiphIcon,
    path: "/",
  },
  {
    name: "chasing",
    image: ChasingIcon,
    path: "/",
  },
];

const Partner = () => (
  <Container>
    <Title>Đối tác chiến lược</Title>

    <Groups>
      {data.map(({ name, image }) => (
        <Item key={name}>
          <Image src={image} layout="fill" objectFit="contain" />
        </Item>
      ))}
    </Groups>
  </Container>
);

export default Partner;
