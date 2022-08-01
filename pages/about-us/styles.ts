import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Introduce = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding-bottom: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 50px;
  justify-content: center;
`;

export const IntroduceImage = styled.div`
  /* width: 100%; */

  @media screen and (max-width: 600px) {
    img {
      width: 100%;
    }
  }
`;

export const IntroduceContent = styled.div`
  max-width: 586px;
  padding: 20px;
`;

export const IntroduceHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IntroduceHeaderTitle = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #000000;
`;

export const IntroduceHeaderBody = styled.div`
  margin-top: 7px;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  color: #000000;
`;

export const IntroduceBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  width: 100%;
`;

export const Tabs = styled.div`
  display: flex;
  width: 100%;
`;

type TabProps = {
  isActive: boolean;
};

export const Tab = styled.div<TabProps>`
  padding: 12px;
  flex: 1;
  background: #ffffff;
  border: ${({ isActive }) => (isActive ? "1px solid #d7d7d7" : "none")};
  border-bottom: ${({ isActive }) =>
    isActive ? "1px solid transparent" : "1px solid #d7d7d7"};
  font-weight: 700;
  font-size: 16px;
  line-height: 30px;
  color: #000000;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TabContent = styled.div`
  padding: 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  color: #000000;
  background: #ffffff;
  border: 1px solid #d7d7d7;
  border-top: none;
`;

export const IntroduceButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  white-space: nowrap;
  padding: 11px 39px;
  border: 1px solid #316fdc;
  border-radius: 5px;
  font-weight: 700;
  font-size: 16px;
  line-height: 25px;
  color: #000000;
  position: relative;
  margin-top: 30px;
  width: fit-content;
  padding-right: 20px;

  &:hover {
    background: #101010;
    color: #fff;
  }
`;

export const IntroduceButtonIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 26px;
`;

export const Vision = styled.div`
  min-height: 580px;
  width: 100%;
  background-image: url("/images/vision.jpg");
  background-repeat: no-repeat;
  background-position: right top;
  background-size: cover;
  display: flex;
  justify-content: center;
  padding: 35px;
`;

export const Value = styled.div`
  min-height: 708px;
  width: 100%;
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const ValueImage = styled.img`
  height: 622px;

  @media screen and (max-width: 600px) {
    width: 100%;
    height: 100%;
  }
`;

export const ValueBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 587px;
`;

export const ValueTitle = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #000000;
`;

export const ValueContent = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  color: #000000;
`;

export const VisionContent = styled.div`
  max-width: 1174px;
  width: 100%;
`;

export const VisionTitle = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #000000;
`;

export const VisionBody = styled.div`
  max-width: 590px;
  margin-top: 15px;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
`;

export const Team = styled.div`
  min-height: 974px;
  width: 100%;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  background-color: #fff1dc;
  overflow: hidden;
`;

export const TeamShape = styled.div`
  /* position: absolute; */
  /* top: 50%; */
  position: relative;
  min-height: 522px;
  padding: 20px;
  background: #ffdca8;
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  /* border-radius: 0 260.5px 260.5px 0; */
  /* position: relative; */
  top: 13px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 99;
  border-right: none;
  /* position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%); */
`;

export const Mems = styled.img`
  height: 100%;
  z-index: 999;

  @media screen and (max-width: 1470px) {
    display: none;
  }
`;

export const Left = styled.div`
  position: relative;
  width: 70%;
  min-height: 974px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1470px) {
    width: 100%;
  }
`;

export const Chairs = styled.img`
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 9;
`;

export const TeamBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 4%;
  gap: 10px;
`;

export const TeamImage1 = styled.img`
  position: absolute;
  height: 100%;
`;

export const TeamImage2 = styled.img`
  height: 100%;
`;

export const TeamTitle = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #000000;
  z-index: 999;
`;

export const TeamDes = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  color: #000000;
  z-index: 999;
  max-width: 688px;
`;
