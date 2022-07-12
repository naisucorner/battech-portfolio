import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5px;
`;

export const Select = styled.div`
  background: transparent;
  color: #fff;
  border: none;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  position: relative;
  cursor: pointer;
  width: 30px;
`;

export const Option = styled.div`
  color: #fff;
  background: #000;
  position: absolute;
  bottom: -80px;
  right: -5px;
  display: flex;
  flex-direction: column;
  z-index: 9;
`;

export const Item = styled.button`
  display: flex;
  padding: 10px;
  cursor: pointer;
  color: #fff;
  background: #000;
  border: none;
  outline: none;

  &:hover {
    background: #316fdc;
    color: #fff;
  }
`;
