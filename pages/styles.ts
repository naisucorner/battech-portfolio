import styled from "styled-components";

export const Container = styled.div`
  display: flex;
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
  margin-bottom: 60px;
`;

export const Services = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
`;

export const Service = styled.div`
  display: flex;
  flex-direction: column;
  width: 540px;
`;

export const ServiceImage = styled.div`
  height: 294px;
  width: 100%;
  border-radius: 10px;
`;

export const ServiceTitle = styled.div`
  font-weight: 700;
  font-size: 32px;
  line-height: 65px;
  text-align: center;
  color: #000000;
  margin-top: 15px;
`;

export const ServiceDescription = styled.div`
  margin-top: 15px;
`;

export const ServiceButton = styled.div``;
