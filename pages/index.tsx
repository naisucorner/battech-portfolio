import type { NextPage } from "next";
import Head from "next/head";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import Image1 from "../public/images/1.png";
import Image2 from "../public/images/2.png";
import TwentyFour from "../public/images/24.png";
import Vnexpress from "../public/images/vnexpress.png";
import Vtc from "../public/images/vtc.png";
import Dantri from "../public/images/dantri.png";
import Hanoimoi from "../public/images/hanoimoi.png";
import Image from "next/image";

import Avatar from "../public/images/ava.png";
import ReviewIcon from "../components/icons/review";
import {
  Container,
  Film,
  FilmInfo,
  FilmTitle,
  FilmSub,
  ButtonIcon,
  ButtonGroup,
  Button,
  ServicesBox,
  ServicesTitle,
  Services,
  Service,
  ServiceImage,
  ServiceTitle,
  ServiceDescription,
  ServiceButton,
  ReviewBox,
  ReviewContent,
  ReviewTitle,
  Icon,
  Carrousel,
  CustomSwiper,
  CustomSlide,
  SlideAvatar,
  SlideDes,
  SlideSub,
  SlideTitle,
  NewsBox,
  NewsTitle,
  News,
  New,
  NewImage,
} from "./styles";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Home</title>
      </Head>

      <Film>
        <FilmInfo>
          <FilmTitle>
            Best-in-class business meetings in the metaverse
          </FilmTitle>

          <FilmSub>
            Whether you want to meet with your team or with your customers,
            Battech offers human interaction more intuitive and effective than
            in real life by creating a new reality, optimized for exceptional
            collaboration.
          </FilmSub>

          <ButtonGroup>
            <Button>
              <ButtonIcon>
                <PlayArrowIcon />
              </ButtonIcon>
              Watch the Film
            </Button>

            <Button>
              <ButtonIcon>
                <ArrowForwardIcon />
              </ButtonIcon>
              Sign Up Now
            </Button>
          </ButtonGroup>
        </FilmInfo>
      </Film>

      <ServicesBox>
        <ServicesTitle>Dịch vụ của chúng tôi</ServicesTitle>

        <Services>
          <Service>
            <ServiceImage src={Image2} height="294px" width="588px" />
            <ServiceTitle>Phòng họp VR</ServiceTitle>
            <ServiceDescription>
              Do you miss having in-person meetings? Do you want to feel
              engaged? Inside Battech, all distractions are gone and you meet
              like was it in real life. Whether it is team meetings or customer
              meetings, you have all the necessary equipment at your fingertips
              to make your meetings more efficient. Feel the 3D sound from the
              other participants and wrap up your meetings with our signature
              virtual handshake.
            </ServiceDescription>
            <ServiceButton>Learn More</ServiceButton>
          </Service>

          <Service>
            <ServiceImage src={Image1} height="294px" width="588px" />
            <ServiceTitle>Meetings</ServiceTitle>
            <ServiceDescription>
              Do you miss having in-person meetings? Do you want to feel
              engaged? Inside Battech, all distractions are gone and you meet
              like was it in real life. Whether it is team meetings or customer
              meetings, you have all the necessary equipment at your fingertips
              to make your meetings more efficient. Feel the 3D sound from the
              other participants and wrap up your meetings with our signature
              virtual handshake.
            </ServiceDescription>
            <ServiceButton>Learn More</ServiceButton>
          </Service>
        </Services>
      </ServicesBox>

      <ReviewBox>
        <ReviewTitle>Nhận xét của khách hàng</ReviewTitle>

        <ReviewContent>
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
              <SwiperSlide>
                <CustomSlide>
                  <SlideAvatar src={Avatar} width="96px" height="96px" />

                  <SlideTitle>Timmy Ghiurau</SlideTitle>

                  <SlideSub>
                    XR simulations and experience lead at Volvo Cars
                  </SlideSub>

                  <SlideDes>
                    The most relevant VR collaboration platform – relevant in
                    our automotive use cases, in the way we design, build,
                    experience and sell cars but also enabling remote
                    collaboration seamlessly and intuitively. It is environment
                    friendly – avoiding air travel while also boosting
                    productivity.
                  </SlideDes>
                </CustomSlide>
              </SwiperSlide>

              <SwiperSlide>
                <CustomSlide>
                  <SlideAvatar src={Avatar} width="96px" height="96px" />

                  <SlideTitle>Timmy Ghiurau</SlideTitle>

                  <SlideSub>
                    XR simulations and experience lead at Volvo Cars
                  </SlideSub>

                  <SlideDes>
                    The most relevant VR collaboration platform – relevant in
                    our automotive use cases, in the way we design, build,
                    experience and sell cars but also enabling remote
                    collaboration seamlessly and intuitively. It is environment
                    friendly – avoiding air travel while also boosting
                    productivity.
                  </SlideDes>
                </CustomSlide>
              </SwiperSlide>
            </CustomSwiper>
          </Carrousel>
        </ReviewContent>
      </ReviewBox>

      <NewsBox>
        <NewsTitle>Báo chí nói gì về chúng tôi</NewsTitle>

        <News>
          <New>
            <NewImage>
              <Image src={TwentyFour} />
            </NewImage>

            <ServiceButton>Learn More</ServiceButton>
          </New>

          <New>
            <NewImage>
              <Image src={Vnexpress} />
            </NewImage>

            <ServiceButton>Learn More</ServiceButton>
          </New>

          <New>
            <NewImage>
              <Image src={Vtc} width="73px" height="73px" />
            </NewImage>

            <ServiceButton>Learn More</ServiceButton>
          </New>

          <New>
            <NewImage>
              <Image src={Dantri} />
            </NewImage>

            <ServiceButton>Learn More</ServiceButton>
          </New>

          <New>
            <NewImage>
              <Image src={Hanoimoi} />
            </NewImage>

            <ServiceButton>Learn More</ServiceButton>
          </New>
        </News>
      </NewsBox>
    </Container>
  );
};

export default Home;
