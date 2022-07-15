import styled from "styled-components";

type ContainerProps = {
  size?: string;
  radius?: string;
  background?: string;
  border?: string;
};

export const Container = styled.div<ContainerProps>`
  width: ${({ size }) => (size ? size : "14px")};
  height: ${({ size }) => (size ? size : "14px")};
  border-radius: ${({ radius }) => (radius ? radius : "2px")};
  background-color: ${({ background }) => (background ? background : "#fff")};
  border: ${({ border }) => (border ? border : "1px solid #939393")};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Icon = styled.div`
  display: inline-block;

  &:after {
    /*Add another block-level blank space*/
    content: "";
    display: block;

    /*Make it a small rectangle so the border will create an L-shape*/
    width: 2px;
    height: 4px;

    /*Add a white border on the bottom and left, creating that 'L' */
    border: solid #000;
    border-width: 0 2px 2px 0;

    /*Rotate the L 45 degrees to turn it into a checkmark*/
    transform: rotate(45deg);
  }
`;
