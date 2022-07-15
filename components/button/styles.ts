import styled from "styled-components";

type ContainerProps = {
  padding?: string;
  radius?: string;
  background?: string;
  border?: string;
};

export const Container = styled.button<ContainerProps>`
  padding: ${({ padding }) => (padding ? padding : "15px")};
  border-radius: ${({ radius }) => (radius ? radius : "5px")};
  background-color: ${({ background }) => (background ? background : "#fff")};
  white-space: nowrap;
  border: none;
  outline: none;
`;
