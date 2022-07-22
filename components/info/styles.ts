import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #0d0d0d;
  min-height: 510px;
  width: 100%;
  padding: 45px;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 41px;
`;

export const Detail = styled.div`
  font-size: 16px;
  line-height: 25px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 20px;
  color: #fff;
  max-width: 577px;
`;

export const Socials = styled.div`
  display: flex;
  gap: 11px;
  margin-bottom: 85px;
`;

export const Social = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33px;
  height: 33px;
  border-radius: 50%;
  background: #fff;
  cursor: pointer;
`;

export const Copyrights = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
