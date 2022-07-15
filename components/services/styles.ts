import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 75px;
  padding-bottom: 85px;
  background: #fff;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 32px;
  line-height: 65px;
  text-align: center;
  color: #000000;
  margin-bottom: 40px;
`;

export const Body = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
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

export const Description = styled.div`
  margin-top: 15px;
  text-align: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  color: #000;
`;

export const Button = styled.div`
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
