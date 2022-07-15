import styled from "styled-components";

export const Container = styled.div`
  padding: 52px 52px 90px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 32px;
  line-height: 65px;
  text-align: center;
  color: #000000;
  margin-bottom: 37px;
`;

export const Body = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 44px;
`;

export const New = styled.div`
  height: 235px;
  width: 200px;
  background: #ffffff;
  border: 5px solid rgba(49, 111, 220, 0.2);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  span {
    height: 100%;
  }
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
