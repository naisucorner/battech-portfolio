import { useRouter } from "next/router";
import { Container, Item, ItemIcon, CustomLink } from "./styles";
import ArrowDownIcon from "../icons/arrow-down";
import Link from "next/link";

import listNav from "../../const/nav";

const Navbar = () => {
  const { pathname } = useRouter();

  return (
    <Container>
      {listNav.map(({ name, path, children }) => (
        <Item key={name} color={path === pathname ? "#316FDC" : "#fff"}>
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

export default Navbar;
