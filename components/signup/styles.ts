import styled from "styled-components";

export const Container = styled.div`
  height: 327px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("./images/bg2.png");
  background-repeat: no-repeat;
  background-position: center;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  width: 70%;
`;

export const Logo = styled.div``;

export const Detail = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Text = styled.div`
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  text-transform: uppercase;
  color: #ffffff;
`;

export const Button = styled.div`
  padding: 9px 18px;
  background: #316fdc;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  text-transform: uppercase;
  color: #ffffff;
  white-space: nowrap;
  height: fit-content;

  &:hover {
    background: #fff;
    color: #101010;
  }
`;
