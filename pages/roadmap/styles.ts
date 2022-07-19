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

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f5f5f5;
  padding: 22px;
`;

export const Content = styled.div`
  max-width: 1174px;
  width: 100%;
`;

export const ContentHeader = styled.div`
  display: flex;
  border-top: 1px solid #316fdc;
  width: 100%;
`;

export const ContentHeaderButton = styled.div`
  font-size: 20px;
  color: #ffffff;
  height: 53px;
  width: 250px;
  padding: 16px;
  position: relative;
  cursor: pointer;
  user-select: none;
  background-color: #316fdc;
  left: -5px;
  border-radius: 0 0 3px 8px;
  display: flex;
  align-items: center;

  &::after {
    content: "";
    position: absolute;
    height: 0;
    width: 0;
    border-style: solid;
    border-color: #316fdc transparent;
    right: -25px;
    border-width: 53px 25px 0 0;
  }
`;

export const ContentHeaderText = styled.div`
  padding-top: 5px;
  padding-left: 30px;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  color: #000000;
`;

export const ContentBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  gap: 10px;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Year = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 35px;
  color: #316fdc;
`;

export const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 22px 40px;
  border-left: 2px solid black;
  padding-bottom: 15px;
  position: relative;
  height: 100px;
  left: 20px;

  &::before,
  &::after {
    position: absolute;
    bottom: -6px;
    left: -5px;
    height: 8px;
    width: 8px;
    background: black;
    content: "";
    border-radius: 4px;
  }

  :after {
    top: 0;
    left: -5px;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const LogoText = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 35px;
  color: #316fdc;
`;
