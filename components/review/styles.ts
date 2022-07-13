import styled from "styled-components";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

export const Container = styled.div`
  height: 539px;
  background: rgba(49, 111, 220, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 32px;
  line-height: 65px;
  text-align: center;
  color: #ffffff;
  padding-top: 37px;
`;

export const Content = styled.div`
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
