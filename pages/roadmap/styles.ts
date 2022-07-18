import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Header = styled.div`
  height: 400px;
  width: 100%;
  background-image: url("./images/bg1.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeaderTitle = styled.div`
  font-weight: 700;
  font-size: 48px;
  line-height: 55px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
`;

export const HeaderSub = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  margin-top: 11px;
  max-width: 695px;
`;
