import { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { Container, Title, TitleLogo, TitleText, Body } from "./styles";

type ToggleContentProps = {
  title: string;
  des: string;
};

const ToggleContent = ({ title, des }: ToggleContentProps) => {
  const [show, setShow] = useState(false);

  const toggleShow = () => setShow((show) => !show);

  return (
    <Container>
      <Title>
        <TitleLogo onClick={toggleShow}>
          {show ? (
            <KeyboardArrowDownIcon
              sx={{
                fontSize: "20px",
              }}
            />
          ) : (
            <ArrowForwardIosIcon
              sx={{
                fontSize: "12px",
              }}
            />
          )}
        </TitleLogo>

        <TitleText>{title}</TitleText>
      </Title>

      {show && <Body>{des}</Body>}
    </Container>
  );
};

export default ToggleContent;
