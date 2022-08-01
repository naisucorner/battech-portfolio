import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

import PageHeader from "../../components/page-header";
import HeaderShape from "../../components/header-shape";
import Signup from "../../components/signup";
import VerifiedIcon from "../../components/icons/verified";
import PeoplesIcon from "../../components/icons/peoples";
import { data } from "./index";
import {
  Container,
  MemContainer,
  MemInfo,
  Avatar,
  MemInfoBody,
  MemName,
  MemDetail,
  MemAbout,
  MemAboutContent,
  Category,
  CategoryBody,
  Experience,
  ExperienceAvatar,
  ExperienceTitle,
  ExperienceDate,
  ExperienceLocation,
  ExperienceBody,
  ExperienceContent,
  Skill,
  SkillName,
  Skills,
  SkillDetail,
  Activities,
  Activity,
  ActivityImage,
  ActivityBody,
  ActivityTItle,
  ActivityDate,
  ActivityButton,
  ActivityTags,
} from "./styles";

const Member = () => {
  const router = useRouter();
  const { mem } = router.query;

  const memData = data
    .find((item) => item.content.find((value) => value.name === mem))
    ?.content.find((item) => item.name === mem);

  if (!memData) {
    return <></>;
  }

  const {
    image,
    name,
    des,
    about,
    experiences,
    educations,
    skills,
    activities,
  } = memData;

  return (
    <Container>
      <Head>
        <title>Battech Token</title>
      </Head>

      <PageHeader
        title="The Battech Team"
        sub="Meet the leaders and builders of the metaverse future at BATTECH."
      />

      <MemContainer>
        <MemInfo>
          <Avatar src={image} />

          <MemInfoBody>
            <MemName>{name}</MemName>
            <MemDetail>{des}</MemDetail>
          </MemInfoBody>
        </MemInfo>

        <MemAbout>
          <HeaderShape title="About" />
          <MemAboutContent>{about}</MemAboutContent>
        </MemAbout>

        {experiences && (
          <Category>
            <HeaderShape title="Experiences" />
            <CategoryBody>
              {experiences?.map(
                ({ title, date, location, detail, image }, index) => (
                  <Experience key={index}>
                    <ExperienceAvatar>
                      <img src={image} />
                    </ExperienceAvatar>

                    <ExperienceBody>
                      <ExperienceTitle>{title}</ExperienceTitle>
                      <ExperienceDate>{date}</ExperienceDate>
                      <ExperienceLocation>{location}</ExperienceLocation>
                      <ExperienceContent>{detail}</ExperienceContent>
                    </ExperienceBody>
                  </Experience>
                )
              )}
            </CategoryBody>
          </Category>
        )}

        {educations && (
          <Category>
            <HeaderShape title="Education" />
            <CategoryBody>
              {educations?.map(({ title, type, image }, index) => (
                <Experience key={index}>
                  <ExperienceAvatar>
                    <img src={image} />
                  </ExperienceAvatar>

                  <ExperienceBody>
                    <ExperienceTitle>{title}</ExperienceTitle>
                    <ExperienceDate>{type}</ExperienceDate>
                  </ExperienceBody>
                </Experience>
              ))}
            </CategoryBody>
          </Category>
        )}

        {skills && (
          <Category>
            <HeaderShape title="Skills" />
            <CategoryBody>
              <Skills>
                {skills?.map(({ name, verified, peoples }, index) => (
                  <Skill key={index}>
                    <SkillName>{name}</SkillName>
                    <SkillDetail>
                      <VerifiedIcon />
                      {verified}
                    </SkillDetail>
                    <SkillDetail>
                      <PeoplesIcon />
                      {peoples}
                    </SkillDetail>
                  </Skill>
                ))}
              </Skills>
            </CategoryBody>
          </Category>
        )}

        {activities && (
          <Category>
            <HeaderShape title="Activity" />
            <CategoryBody>
              <Activities>
                {activities.map(({ image, title, date, tags }, index) => (
                  <Activity key={index}>
                    <ActivityImage src={image} />
                    <ActivityBody>
                      <ActivityTItle>{title}</ActivityTItle>
                      <ActivityTags>
                        {tags.map((tag) => (
                          <div key={tag}>#{tag}</div>
                        ))}
                      </ActivityTags>
                      <ActivityDate>{date}</ActivityDate>
                      <ActivityButton>Learn More</ActivityButton>
                    </ActivityBody>
                  </Activity>
                ))}
              </Activities>
            </CategoryBody>
          </Category>
        )}
      </MemContainer>

      <Signup />
    </Container>
  );
};

export default Member;
