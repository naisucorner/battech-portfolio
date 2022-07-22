import styled from "styled-components";

export const Container = styled.div`
  background: #316ed9;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 32px;
  line-height: 37px;
  color: #fff;
  text-transform: uppercase;
  margin-bottom: 13px;
  text-align: center;
`;

export const Sub = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  color: #fff;
  margin-bottom: 37px;
`;

export const Form = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  @media screen and (max-width: 650px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const Input = styled.input`
  width: 313px;
  height: 49px;
  border-radius: 24.5px;
  padding: 15px 18px;
  background: #fff;
  color: #414141;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  border: none;
  outline: none;

  &::placeholder {
    color: #414141;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
  }

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 49px;
  width: 191px;
  color: #fff;
  text-transform: uppercase;
  /* margin-left: 12px; */
  border-radius: 24.5px;
  background: #0d0d0d;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  cursor: pointer;
  border: none;

  &:hover {
    background: #fff;
    color: #101010;
  }

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;
