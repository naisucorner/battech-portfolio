import { useState } from "react";
import { Container, Icon } from "./styles";

type CheckBoxProps = {
  size?: string;
  radius?: string;
  background?: string;
  border?: string;
  checked?: boolean;
  icon?: JSX.Element;
};

const CheckBox = ({
  size,
  radius,
  background,
  border,
  checked = false,
  icon: CustomIcon,
}: CheckBoxProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  const toggleCheck = () => setIsChecked((isChecked) => !isChecked);

  return (
    <Container
      size={size}
      radius={radius}
      background={background}
      border={border}
      onClick={toggleCheck}
    >
      {isChecked && (CustomIcon ? CustomIcon : <Icon />)}
    </Container>
  );
};

export default CheckBox;
