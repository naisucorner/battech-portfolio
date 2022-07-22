import styled from "styled-components";

export const Container = styled.div`
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

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 55px;
  line-height: 65px;
  max-width: 806px;
  color: #ffffff;

  @media screen and (max-width: 830px) {
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
  }
`;

export const Sub = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  color: #ffffff;
  max-width: 589px;
  margin-top: 50px;
`;

export const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
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
  white-space: nowrap;

  &:hover {
    background: #fff;
    color: #101010;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
`;
