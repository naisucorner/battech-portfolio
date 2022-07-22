import styled from "styled-components";

export const Container = styled.div`
  background: #232323;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 55px;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 32px;
  line-height: 65px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 70px;

  @media screen and (max-width: 550px) {
    font-weight: 700;
    font-size: 24px;
    line-height: 65px;
    margin-bottom: 10px;
  }
`;

export const Groups = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 65px;

  @media screen and (max-width: 550px) {
    gap: 10px;
  }
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  position: relative;
  width: 150px;
  max-width: 150px;
  cursor: pointer;
`;
