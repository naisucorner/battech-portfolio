import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Container,
  Info,
  Title,
  Sub,
  Buttons,
  Button,
  IconContainer,
} from "./styles";

const Film = () => (
  <Container>
    <Info>
      <Title>Best-in-class business meetings in the metaverse</Title>

      <Sub>
        Whether you want to meet with your team or with your customers, Battech
        offers human interaction more intuitive and effective than in real life
        by creating a new reality, optimized for exceptional collaboration.
      </Sub>

      <Buttons>
        <Button>
          <IconContainer>
            <PlayArrowIcon />
          </IconContainer>
          Watch the Film
        </Button>

        <Button>
          <IconContainer>
            <ArrowForwardIcon />
          </IconContainer>
          Sign Up Now
        </Button>
      </Buttons>
    </Info>
  </Container>
);

export default Film;
