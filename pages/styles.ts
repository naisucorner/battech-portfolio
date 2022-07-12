import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const Film = styled.div`
  height: 1090px;
  width: 100%;
  background-image: url("/images/film.png");
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FilmInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FilmTitle = styled.div`
  font-weight: 700;
  font-size: 55px;
  line-height: 65px;
  width: 806px;
  color: #ffffff;
`;

export const FilmSub = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  color: #ffffff;
  width: 589px;
`;

export const Button = styled.button`
  padding: 12px 24px;
  background: transparent;
  border-radius: 22px;
  border: 1px solid #316fdc;
`;
