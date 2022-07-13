import styled from "styled-components";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

export const Body = styled.div`
  margin-top: 74px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Film = styled.div`
  height: 1090px;
  width: 100%;
  background-image: url("/images/film.png");
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FilmInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FilmTitle = styled.div`
  font-weight: 700;
  font-size: 55px;
  line-height: 65px;
  width: 806px;
  color: #ffffff;
`;

export const FilmSub = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  color: #ffffff;
  width: 589px;
  margin-top: 50px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  margin-top: 30px;
  gap: 20px;
`;

export const Button = styled.button`
  padding: 12px 24px;
  background: transparent;
  border-radius: 22px;
  border: 1px solid #316fdc;
  color: #316fdc;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background: #fff;
    color: #101010;
  }
`;

export const ButtonIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
`;

export const ServicesBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 75px;
  padding-bottom: 85px;
  background: #fff;
`;

export const ServicesTitle = styled.div`
  font-weight: 700;
  font-size: 32px;
  line-height: 65px;
  text-align: center;
  color: #000000;
  margin-bottom: 40px;
`;

export const Services = styled.div`
  display: flex;
  gap: 40px;
`;

export const Service = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 540px;
`;

export const ServiceImage = styled(Image)`
  height: 294px;
  width: 100%;
  border-radius: 18px;
`;

export const ServiceTitle = styled.div`
  font-weight: 700;
  font-size: 32px;
  line-height: 65px;
  text-align: center;
  color: #000000;
`;

export const ServiceDescription = styled.div`
  margin-top: 15px;
  text-align: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  color: #000;
`;

export const ServiceButton = styled.div`
  padding: 6px 15px;
  border-radius: 15px;
  background: #ffffff;
  border: 1px solid #316fdc;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;
  color: #316fdc;
  cursor: pointer;
  width: fit-content;
  margin-top: 25px;

  &:hover {
    background: #000;
    color: #fff;
  }
`;

export const ReviewBox = styled.div`
  height: 539px;
  background: rgba(49, 111, 220, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const ReviewTitle = styled.div`
  font-weight: 700;
  font-size: 32px;
  line-height: 65px;
  text-align: center;
  color: #ffffff;
  padding-top: 37px;
`;

export const ReviewContent = styled.div`
  display: flex;
  gap: 50px;
`;

export const Icon = styled.div``;

export const Carrousel = styled.div`
  width: 570px;
`;

export const CustomSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
`;

export const CustomSlide = styled(SwiperSlide)`
  width: 100%;
  height: 100%;
  background: #fff;
  padding: 23px 27px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SlideAvatar = styled(Image)`
  width: 96px;
  height: 96px;
  border-radius: 50%;
`;

export const SlideTitle = styled.div`
  margin-top: 5px;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  color: #000000;
`;

export const SlideSub = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  text-align: center;
  color: #000000;
`;

export const SlideDes = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  text-align: center;
  color: #000000;
  margin-top: 13px;
`;
