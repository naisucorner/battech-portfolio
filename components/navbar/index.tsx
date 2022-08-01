import { useRouter } from "next/router";
import Link from "next/link";

import ArrowDownIcon from "../icons/arrow-down";
import listNav from "../../data/nav";
import { Container, Item, ItemIcon, CustomLink } from "./styles";

const Navbar = () => {
  const { pathname } = useRouter();

  const checkPath = (path: string) => {
    if (path === "/") {
      return path === pathname;
    }

    return pathname.includes(path);
  };

  return (
    <Container>
      {listNav.map(({ name, path, children }) => {
        return (
          <Item key={name} color={checkPath(path) ? "#316FDC" : "#fff"}>
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
        );
      })}
    </Container>
  );
};

export default Navbar;
