import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #000000;
  padding: 10px 20px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99999;
`;

export const Logo = styled.div`
  cursor: pointer;
  width: 100;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
`;

export const Divider = styled.div`
  height: 28px;
  border-left: 1px solid #fff;
  margin: 0 20px;
`;

export const Language = styled.div``;

export const Button = styled.div`
  background: #316fdc;
  border-radius: 4px;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  text-transform: uppercase;
  padding: 9px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: 20px;
  white-space: nowrap;
`;
