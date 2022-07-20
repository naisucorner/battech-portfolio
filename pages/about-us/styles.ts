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
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 50px;
  justify-content: center;
`;

export const IntroduceImage = styled.div``;

export const IntroduceContent = styled.div`
  width: 586px;
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
  height: 580px;
  width: 100%;
  background-image: url("./images/vision.jpg");
  background-repeat: no-repeat;
  background-position: right top;
  background-size: cover;
  display: flex;
  justify-content: center;
`;

export const VisionContent = styled.div`
  max-width: 1174px;
  padding-top: 35px;
  width: 100%;
`;

export const VisionTitle = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #000000;
`;

export const VisionBody = styled.div`
  width: 590px;
  margin-top: 15px;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
`;
