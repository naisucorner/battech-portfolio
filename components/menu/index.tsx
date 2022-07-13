import { useRouter } from "next/router";
import Link from "next/link";

import listNav from "../../const/nav";
import ArrowDownIcon from "../icons/arrow-down";
import { Container, Item, ItemIcon, CustomLink } from "./styles";

const Menu = () => {
  const { pathname } = useRouter();

  return (
    <Container>
      {listNav.map(({ name, path, children }) => (
        <Item key={name} color={path === pathname ? "#fff" : "#939393"}>
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
