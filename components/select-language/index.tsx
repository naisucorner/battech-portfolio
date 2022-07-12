import { useState, useRef } from "react";
import PublicIcon from "@mui/icons-material/Public";
import { Container, Icon, Select, Option, Item } from "./styles";

import useOnClickOutside from "../../hook/useClickOutSide";

const listLang = ["EN", "VI"];

const SelectLanguage = () => {
  const [lang, setLang] = useState("EN");
  const [displayOption, setDisplayOption] = useState(false);
  const ref = useRef(null);

  const toggleOption = () =>
    setDisplayOption((displayOption) => !displayOption);

  const handleClickOutside = () => setDisplayOption(false);

  const onItemClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    value: string
  ) => {
    event.stopPropagation();
    setLang(value);
    toggleOption();
  };

  useOnClickOutside(ref, handleClickOutside);

  return (
    <Container>
      <Icon>
        <PublicIcon color="inherit" />
      </Icon>

      <Select onClick={toggleOption} ref={ref}>
        {lang}

        {displayOption && (
          <Option>
            {listLang.map((item) => (
              <Item key={item} onClick={(event) => onItemClick(event, item)}>
                {item}
              </Item>
            ))}
          </Option>
        )}
      </Select>
    </Container>
  );
};

export default SelectLanguage;
