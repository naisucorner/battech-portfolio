import type { NextPage } from "next";
import Head from "next/head";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Container,
  Film,
  FilmInfo,
  FilmTitle,
  FilmSub,
  ButtonIcon,
  ButtonGroup,
  Button,
} from "./styles";

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Home</title>
      </Head>

      <Film>
        <FilmInfo>
          <FilmTitle>
            Best-in-class business meetings in the metaverse
          </FilmTitle>

          <FilmSub>
            Whether you want to meet with your team or with your customers,
            Battech offers human interaction more intuitive and effective than
            in real life by creating a new reality, optimized for exceptional
            collaboration.
          </FilmSub>

          <ButtonGroup>
            <Button>
              <ButtonIcon>
                <PlayArrowIcon />
              </ButtonIcon>
              Watch the Film
            </Button>

            <Button>
              <ButtonIcon>
                <ArrowForwardIcon />
              </ButtonIcon>
              Sign Up Now
            </Button>
          </ButtonGroup>
        </FilmInfo>
      </Film>
    </Container>
  );
};

export default Home;
