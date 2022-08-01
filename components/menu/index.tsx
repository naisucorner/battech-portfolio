import { useRouter } from "next/router";
import Link from "next/link";

import listNav from "../../data/nav";
import ArrowDownIcon from "../icons/arrow-down";
import { Container, Item, ItemIcon, CustomLink } from "./styles";

const Menu = () => {
  const { pathname } = useRouter();

  const checkPath = (path: string) => {
    if (path === "/") {
      return path === pathname;
    }

    return pathname.includes(path);
  };

  return (
    <Container>
      {listNav.map(({ name, path, children }) => (
        <Item key={name} color={checkPath(path) ? "#939393" : "#fff"}>
          <Link href={path} replace>
            <CustomLink>
              {name}

              {children && (
                <ItemIcon>
                  <ArrowDownIcon />
                </ItemIcon>
              )}
            </CustomLink>
          </Link>
        </Item>
      ))}
    </Container>
  );
};

export default Menu;
