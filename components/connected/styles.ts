import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 1289px;
  background-image: url("./images/connected.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  width: 866px;
  margin-bottom: 70px;
`;

export const CenterBase = styled.div`
  height: 320px;
`;

export const CanvasContainer = styled.div`
  height: 400px;
  position: relative;
  top: 100px;
  z-index: 999;
`;

export const Left = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  height: 433px;
  width: 433px;
  z-index: 99;
`;

export const Right = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  height: 433px;
  width: 433px;
  z-index: 99;
`;

export const Girl = styled.img`
  position: absolute;
  bottom: 150px;
  left: 95px;
  width: 100%;
  height: 100%;
`;

export const Boy = styled.img`
  position: absolute;
  bottom: 160px;
  right: -25px;
  width: 500px;
  height: 450px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 486px;
  margin-bottom: 153px;
`;

export const BoxTitle = styled.div`
  font-weight: 700;
  font-size: 32px;
  line-height: 65px;
  text-align: center;
  color: #ffffff;
`;

export const BoxSub = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  color: #ffffff;
`;
