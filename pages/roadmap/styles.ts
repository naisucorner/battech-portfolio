import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f5f5f5;
  padding: 22px;
  padding-bottom: 60px;
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
  top: -1px;

  &::after {
    content: "";
    position: absolute;
    height: 0;
    width: 0;
    border-style: solid;
    border-color: #316fdc transparent;
    right: -24px;
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

export const Year = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Number = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 35px;
  color: #316fdc;
`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  padding: 22px 40px;
  border-left: 1px solid black;
  padding-bottom: 15px;
  position: relative;
  left: 20px;
  gap: 25px;

  &::before,
  &::after {
    position: absolute;
    bottom: -6px;
    left: -4px;
    height: 8px;
    width: 8px;
    background: black;
    content: "";
    border-radius: 4px;
  }

  :after {
    top: 0;
    left: -4px;
  }
`;

export const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
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
  text-transform: uppercase;
`;

export const LogoTitle = styled.div`
  color: #000;
  text-transform: none;
  font-weight: 700;
  font-size: 20px;
  line-height: 35px;
`;

export const Date = styled.div`
  display: flex;
  margin-bottom: 18px;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  /* border-bottom: 1px solid #316fdc; */
  color: #000000;
  position: relative;

  &::before {
    position: absolute;
    bottom: -3px;
    left: -5px;
    height: 6px;
    width: 6px;
    background: #316fdc;
    content: "";
    border-radius: 3px;
  }
`;

export const DateValue = styled.div`
  padding-bottom: 5px;
  padding-left: 10px;
  border-bottom: 1px solid #316fdc;
  border-bottom-right-radius: 20px;
  padding-right: 40px;
  position: relative;
`;

export const DateBorder = styled.div`
  border-color: red;
  border-radius: 100% 0% 100% 0% / 76% 25% 75% 24%;
  height: 100%;
  width: 50px;
`;

export const DateEmpty = styled.div`
  border-top: 1px solid #316fdc;
  flex: 1;
  border-top-left-radius: 14px;
`;

export const Events = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 100px; */
`;
