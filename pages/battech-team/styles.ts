import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Join = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: #000000;
  padding: 100px 50px;
  justify-content: center;
  align-items: center;
`;

export const JoinContainer = styled.div`
  max-width: 1174px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 37px;
`;

export const JoinImage = styled.img`
  border-radius: 20px 0px;
  max-width: 600px;

  @media screen and (max-width: 830px) {
    max-width: 100%;
  }
`;

export const JoinBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const JoinTitle = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;
`;

export const JoinContent = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  color: #ffffff;
  max-width: 500px;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const JoinButton = styled.button`
  background: #316fdc;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  width: fit-content;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;
  color: #ffffff;

  &:hover {
    background: #fff;
    color: #101010;
  }
`;

export const Team = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  padding: 70px 50px;
`;

export const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1174px;
  width: 100%;
`;

export const TeamPosition = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TeamContent = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 700px) {
    justify-content: center;
  }
`;

export const TeamDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 45px;
  gap: 10px;
`;

export const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  cursor: pointer;
`;

export const Name = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #000000;
  cursor: pointer;

  &:hover {
    color: #316fdc;
  }
`;

export const Position = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #000000;
`;

export const Detail = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: #000000;
  max-width: 195px;
`;

export const Button = styled.button`
  padding: 8px 20px;
  background: #316fdc;
  border: 1px solid #316fdc;
  border-radius: 18px;
  cursor: pointer;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;
  background: #ffffff;
  color: #316fdc;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: #316fdc;
    color: #ffffff;
  }
`;

export const MemContainer = styled.div`
  max-width: 1174px;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1210px) {
    padding: 0 20px;
  }
`;

export const MemInfo = styled.div`
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

export const MemInfoBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const MemName = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: #316fdc;
  margin-bottom: 10px;
`;

export const MemDetail = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  color: #000000;
  max-width: 400px;
  margin-bottom: 10px;
`;

export const MemCompany = styled.div`
  display: flex;
  gap: 28px;
`;

export const MemAbout = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MemAboutContent = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  color: #000000;
  margin-top: 23px;
  margin-bottom: 33px;
  white-space: pre-line;
`;

export const Category = styled.div`
  display: flex;
  flex-direction: column;
  gap: 34px;
  margin-bottom: 50px;
`;

export const CategoryBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Experience = styled.div`
  display: flex;
  gap: 18px;
`;

export const ExperienceAvatar = styled.div`
  width: 91px;
  height: 91px;
  min-width: 91px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(49, 111, 220, 0.2);
  padding: 15px;

  img {
    width: 100%;
  }
`;

export const ExperienceBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ExperienceTitle = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 35px;
  color: #000000;
`;

export const ExperienceDate = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #939393;
  margin-top: 5px;
`;

export const ExperienceLocation = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #939393;
  margin-top: 5px;
`;

export const ExperienceContent = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  color: #000000;
  margin-top: 10px;
  white-space: pre-line;
`;

export const Skills = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Skill = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const SkillName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border: 1px solid #316fdc;
  border-radius: 25px;
  padding: 5px 20px;
  font-weight: 400;
  font-size: 18px;
  line-height: 35px;
  color: #316fdc;
  margin-bottom: 12px;
  width: fit-content;
`;

export const SkillDetail = styled.div`
  display: flex;
  gap: 10px;
`;

export const Activities = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

export const Activity = styled.div`
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
`;

export const ActivityImage = styled.img`
  width: 373px;
  border-radius: 10px;
`;

export const ActivityBody = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  gap: 5px;
`;

export const ActivityTItle = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  color: #000000;
`;

export const ActivityTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: #316fdc;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  gap: 3px;
`;

export const ActivityDate = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  color: #7e7e7e;
`;

export const ActivityButton = styled.div`
  background: #ffffff;
  border: 1px solid #316fdc;
  border-radius: 18px;
  padding: 10px 30px;
  width: fit-content;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-transform: uppercase;
  color: #316fdc;
  cursor: pointer;
`;
