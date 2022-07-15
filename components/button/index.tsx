import { Container } from "./styles";

type ButtonProps = {
  text: string;
};

const Button = ({ text }: ButtonProps) => <Container>{text}</Container>;

export default Button;
