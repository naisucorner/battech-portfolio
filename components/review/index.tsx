import { SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import Avatar from "../../public/images/ava.png";
import ReviewIcon from "../icons/review";
import {
  Container,
  Content,
  Title,
  Icon,
  Carrousel,
  CustomSwiper,
  CustomSlide,
  SlideAvatar,
  SlideDes,
  SlideSub,
  SlideTitle,
} from "./styles";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const sildeData = [
  {
    name: "slide1",
    image: Avatar,
    title: "Timmy Ghiurau",
    sub: "XR simulations and experience lead at Volvo Cars",
    des: `The most relevant VR collaboration platform – relevant in our
    automotive use cases, in the way we design, build, experience
    and sell cars but also enabling remote collaboration seamlessly
    and intuitively. It is environment friendly – avoiding air
    travel while also boosting productivity.`,
  },
  {
    name: "slide2",
    image: Avatar,
    title: "Timmy Ghiurau",
    sub: "XR simulations and experience lead at Volvo Cars",
    des: `The most relevant VR collaboration platform – relevant in our
    automotive use cases, in the way we design, build, experience
    and sell cars but also enabling remote collaboration seamlessly
    and intuitively. It is environment friendly – avoiding air
    travel while also boosting productivity.`,
  },
];

const Review = () => (
  <Container>
    <Title>Nhận xét của khách hàng</Title>

    <Content>
      <Icon>
        <ReviewIcon />
      </Icon>

      <Carrousel>
        <CustomSwiper
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {sildeData.map(({ name, image, title, sub, des }) => (
            <SwiperSlide key={name}>
              <CustomSlide>
                <SlideAvatar src={image} width="96px" height="96px" />

                <SlideTitle>{title}</SlideTitle>

                <SlideSub>{sub}</SlideSub>

                <SlideDes>{des}</SlideDes>
              </CustomSlide>
            </SwiperSlide>
          ))}
        </CustomSwiper>
      </Carrousel>
    </Content>
  </Container>
);

export default Review;
