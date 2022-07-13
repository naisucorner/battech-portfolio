import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1f1f1f;
  height: 67px;
  gap: 15px;
`;

export const Item = styled.div`
  color: ${({ color }) => (color ? color : "#fff")};
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  cursor: pointer;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  align-items: center;
  white-space: nowrap;

  path {
    fill: ${({ color }) => (color ? color : "#fff")};
  }

  :hover {
    color: #fff;

    path {
      fill: #fff;
    }
  }
`;

export const ItemIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
`;

export const CustomLink = styled.a`
  display: flex;
`;
