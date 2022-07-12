import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Update = styled.div`
  background: #316ed9;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 340px;
  display: flex;
  flex-direction: column;
`;

export const UpdateTitle = styled.div`
  font-weight: 700;
  font-size: 32px;
  line-height: 37px;
  color: #fff;
  text-transform: uppercase;
  margin-bottom: 13px;
  text-align: center;
`;

export const UpdateSub = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  color: #fff;
  margin-bottom: 37px;
`;

export const EmailForm = styled.div`
  display: flex;
`;

export const Input = styled.input`
  width: 313px;
  height: 49px;
  border-radius: 24.5px;
  padding: 15px 18px;
  background: #fff;
  color: #414141;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  border: none;
  outline: none;

  &::placeholder {
    color: #414141;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 49px;
  width: 191px;
  color: #fff;
  text-transform: uppercase;
  margin-left: 12px;
  border-radius: 24.5px;
  background: #0d0d0d;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  cursor: pointer;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #0d0d0d;
  height: 510px;
  width: 100%;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 41px;
`;

export const LogoText = styled.div``;

export const Detail = styled.div`
  font-size: 16px;
  line-height: 25px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 20px;
  color: #fff;
  width: 577px;
`;

export const SocialGroup = styled.div`
  display: flex;
  gap: 11px;
  margin-bottom: 85px;
`;

export const Copyrights = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  color: #fff;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1f1f1f;
  height: 67px;
  gap: 15px;
`;

export const Item = styled.div`
  color: ${({ color }) => (color ? color : "#fff")};
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  cursor: pointer;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  align-items: center;
  white-space: nowrap;

  path {
    fill: ${({ color }) => (color ? color : "#fff")};
  }

  :hover {
    color: #fff;

    path {
      fill: #fff;
    }
  }
`;

export const ItemIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
`;

export const CustomLink = styled.a`
  display: flex;
`;
