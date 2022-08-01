import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  border-top: 1px solid #316fdc;
  width: 100%;
`;

export const Button = styled.div`
  font-size: 20px;
  color: #ffffff;
  height: 53px;
  min-width: 250px;
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
  white-space: nowrap;

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

export const Text = styled.div`
  padding-top: 5px;
  padding-left: 30px;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  color: #000000;
`;
