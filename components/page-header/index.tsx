import { Container, Title, Sub } from "./styles";

interface PageHeaderProps {
  title: string;
  sub?: string;
}

const PageHeader = ({ title, sub }: PageHeaderProps) => (
  <Container>
    <Title>{title}</Title>

    {sub && <Sub>{sub}</Sub>}
  </Container>
);

export default PageHeader;
