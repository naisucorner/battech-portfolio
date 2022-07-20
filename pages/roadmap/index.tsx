import type { NextPage } from "next";
import Head from "next/head";
import LogoIcon from "../../components/icons/logo3";

import Signup from "../../components/signup";
import ToggleContent from "../../components/toggle-content";
import {
  Container,
  Header,
  HeaderSub,
  HeaderTitle,
  Body,
  Content,
  ContentHeader,
  ContentHeaderButton,
  ContentHeaderText,
  ContentBody,
  Year,
  Number,
  ItemContent,
  Logo,
  LogoText,
  Items,
  LogoTitle,
  Date,
  DateValue,
  DateEmpty,
  Events,
} from "./styles";

const data = [
  {
    year: 2018,
    items: [
      {
        date: "",
        content: [
          {
            event: "",
            data: [
              {
                title: "Foundation of BATTECH",
                des: "BATTECH started as BATTECH Labs as a metaverse company that also created solutions in the fastest growing sectors of the Internet economy.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    year: 2019,
    items: [
      {
        date: "",
        content: [
          {
            event: "",
            data: [
              {
                title: "Foundation-Building for Upcoming Solutions",
                des: "BATTECH started as BATTECH Labs as a metaverse company that also created solutions in the fastest growing sectors of the Internet economy.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    year: 2020,
    items: [
      {
        date: "August 2020",
        content: [
          {
            event: "NFTs",
            data: [
              {
                title: "Launch of 1st Edition KOGs",
                des: "BATTECH started as BATTECH Labs as a metaverse company that also created solutions in the fastest growing sectors of the Internet economy.",
              },
            ],
          },
        ],
      },
      {
        date: "September 2020",
        content: [
          {
            event: "NFTs",
            data: [
              {
                title: "Brand Release & Site Launch",
                des: "BATTECH started as BATTECH Labs as a metaverse company that also created solutions in the fastest growing sectors of the Internet economy.",
              },
              {
                title: "KOGs New Site Launch + BATTECH Games Litepaper",
                des: "BATTECH started as BATTECH Labs as a metaverse company that also created solutions in the fastest growing sectors of the Internet economy.",
              },
            ],
          },
        ],
      },
      {
        date: "December 2020",
        content: [
          {
            event: "VALT",
            data: [
              {
                title: "Closed Beta Game Testing + KOGs 2nd Edition Launch",
                des: "BATTECH started as BATTECH Labs as a metaverse company that also created solutions in the fastest growing sectors of the Internet economy.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    year: 2021,
    items: [
      {
        date: "March 2021",
        content: [
          {
            event: "VALT",
            data: [
              {
                title: "Launch of 1st Edition KOGs",
                des: "BATTECH started as BATTECH Labs as a metaverse company that also created solutions in the fastest growing sectors of the Internet economy.",
              },
            ],
          },
        ],
      },
      {
        date: "May 2021",
        content: [
          {
            event: "GAMES",
            data: [
              {
                title: "Brand Release & Site Launch",
                des: "BATTECH started as BATTECH Labs as a metaverse company that also created solutions in the fastest growing sectors of the Internet economy.",
              },
              {
                title: "KOGs New Site Launch + BATTECH Games Litepaper",
                des: "BATTECH started as BATTECH Labs as a metaverse company that also created solutions in the fastest growing sectors of the Internet economy.",
              },
            ],
          },
        ],
      },
      {
        date: "August 2021",
        content: [
          {
            event: "FINACE",
            data: [
              {
                title: "Closed Beta Game Testing + KOGs 2nd Edition Launch",
                des: "BATTECH started as BATTECH Labs as a metaverse company that also created solutions in the fastest growing sectors of the Internet economy.",
              },
              {
                title: "Brand Release & Site Launch",
                des: "BATTECH started as BATTECH Labs as a metaverse company that also created solutions in the fastest growing sectors of the Internet economy.",
              },
              {
                title: "KOGs New Site Launch + BATTECH Games Litepaper",
                des: "BATTECH started as BATTECH Labs as a metaverse company that also created solutions in the fastest growing sectors of the Internet economy.",
              },
            ],
          },
        ],
      },
      {
        date: "September 2021",
        content: [
          {
            event: "MEDIA",
            data: [
              {
                title: "Closed Beta Game Testing + KOGs 2nd Edition Launch",
                des: "BATTECH started as BATTECH Labs as a metaverse company that also created solutions in the fastest growing sectors of the Internet economy.",
              },
              {
                title: "Brand Release & Site Launch",
                des: "BATTECH started as BATTECH Labs as a metaverse company that also created solutions in the fastest growing sectors of the Internet economy.",
              },
              {
                title: "KOGs New Site Launch + BATTECH Games Litepaper",
                des: "BATTECH started as BATTECH Labs as a metaverse company that also created solutions in the fastest growing sectors of the Internet economy.",
              },
            ],
          },
          {
            event: "VALT",
            data: [
              {
                title: "Closed Beta Game Testing + KOGs 2nd Edition Launch",
                des: "BATTECH started as BATTECH Labs as a metaverse company that also created solutions in the fastest growing sectors of the Internet economy.",
              },
              {
                title: "Brand Release & Site Launch",
                des: "BATTECH started as BATTECH Labs as a metaverse company that also created solutions in the fastest growing sectors of the Internet economy.",
              },
            ],
          },
          {
            event: "FINACE",
            data: [
              {
                title: "Launch of 1st Edition KOGs",
                des: "BATTECH started as BATTECH Labs as a metaverse company that also created solutions in the fastest growing sectors of the Internet economy.",
              },
            ],
          },
          {
            event: "GAMES",
            data: [
              {
                title: "Launch of 1st Edition KOGs",
                des: "BATTECH started as BATTECH Labs as a metaverse company that also created solutions in the fastest growing sectors of the Internet economy.",
              },
            ],
          },
        ],
      },
      {
        date: "November 2021",
        content: [
          {
            event: "GAMES",
            data: [
              {
                title: "Closed Beta Game Testing + KOGs 2nd Edition Launch",
                des: "BATTECH started as BATTECH Labs as a metaverse company that also created solutions in the fastest growing sectors of the Internet economy.",
              },
              {
                title: "Brand Release & Site Launch",
                des: "BATTECH started as BATTECH Labs as a metaverse company that also created solutions in the fastest growing sectors of the Internet economy.",
              },
              {
                title: "KOGs New Site Launch + BATTECH Games Litepaper",
                des: "BATTECH started as BATTECH Labs as a metaverse company that also created solutions in the fastest growing sectors of the Internet economy.",
              },
            ],
          },
          {
            event: "GAMES",
            data: [
              {
                title: "Closed Beta Game Testing + KOGs 2nd Edition Launch",
                des: "BATTECH started as BATTECH Labs as a metaverse company that also created solutions in the fastest growing sectors of the Internet economy.",
              },
              {
                title: "Brand Release & Site Launch",
                des: "BATTECH started as BATTECH Labs as a metaverse company that also created solutions in the fastest growing sectors of the Internet economy.",
              },
            ],
          },
          {
            event: "GAMES",
            data: [
              {
                title: "Launch of 1st Edition KOGs",
                des: "BATTECH started as BATTECH Labs as a metaverse company that also created solutions in the fastest growing sectors of the Internet economy.",
              },
            ],
          },
          {
            event: "GAMES",
            data: [
              {
                title: "Launch of 1st Edition KOGs",
                des: "BATTECH started as BATTECH Labs as a metaverse company that also created solutions in the fastest growing sectors of the Internet economy.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    year: 2022,
    items: [
      {
        date: "First Quarter",
        content: [
          {
            event: "GAMES",
            data: [
              {
                title: "Closed Beta Game Testing + KOGs 2nd Edition Launch",
                des: "BATTECH started as BATTECH Labs as a metaverse company that also created solutions in the fastest growing sectors of the Internet economy.",
              },
              {
                title: "Brand Release & Site Launch",
                des: "BATTECH started as BATTECH Labs as a metaverse company that also created solutions in the fastest growing sectors of the Internet economy.",
              },
              {
                title: "KOGs New Site Launch + BATTECH Games Litepaper",
                des: "BATTECH started as BATTECH Labs as a metaverse company that also created solutions in the fastest growing sectors of the Internet economy.",
              },
            ],
          },
          {
            event: "GAMES",
            data: [
              {
                title: "Closed Beta Game Testing + KOGs 2nd Edition Launch",
                des: "BATTECH started as BATTECH Labs as a metaverse company that also created solutions in the fastest growing sectors of the Internet economy.",
              },
              {
                title: "Brand Release & Site Launch",
                des: "BATTECH started as BATTECH Labs as a metaverse company that also created solutions in the fastest growing sectors of the Internet economy.",
              },
            ],
          },
        ],
      },
      {
        date: "Second Quarter",
        content: [
          {
            event: "GAMES",
            data: [
              {
                title: "Brand Release & Site Launch",
                des: "BATTECH started as BATTECH Labs as a metaverse company that also created solutions in the fastest growing sectors of the Internet economy.",
              },
              {
                title: "KOGs New Site Launch + BATTECH Games Litepaper",
                des: "BATTECH started as BATTECH Labs as a metaverse company that also created solutions in the fastest growing sectors of the Internet economy.",
              },
            ],
          },
        ],
      },
      {
        date: "Third Quarter",
        content: [
          {
            event: "FINACE",
            data: [
              {
                title: "Closed Beta Game Testing + KOGs 2nd Edition Launch",
                des: "BATTECH started as BATTECH Labs as a metaverse company that also created solutions in the fastest growing sectors of the Internet economy.",
              },
              {
                title: "Brand Release & Site Launch",
                des: "BATTECH started as BATTECH Labs as a metaverse company that also created solutions in the fastest growing sectors of the Internet economy.",
              },
              {
                title: "KOGs New Site Launch + BATTECH Games Litepaper",
                des: "BATTECH started as BATTECH Labs as a metaverse company that also created solutions in the fastest growing sectors of the Internet economy.",
              },
            ],
          },
        ],
      },
    ],
  },
];

const Roadmap: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Roadmap</title>
      </Head>

      <Header>
        <HeaderTitle>battech ROADMAP</HeaderTitle>
        <HeaderSub>
          Discover the story of how BATTECH emerged from venture building across
          various tech industries to metaverse innovations.
        </HeaderSub>
      </Header>

      <Body>
        <Content>
          <ContentHeader>
            <ContentHeaderButton>Our Roadmap</ContentHeaderButton>

            <ContentHeaderText>
              Learn how BATTECH has progressed with its ecosystem and when to
              expect future milestones for our metaverse.
            </ContentHeaderText>
          </ContentHeader>

          <ContentBody>
            {data.map(({ year, items }) => (
              <Year key={year}>
                <Number>{year}</Number>

                <Items>
                  {items?.map(({ date, content }, index) => (
                    <ItemContent key={index}>
                      {date && (
                        <Date>
                          <DateValue>{date}</DateValue>

                          <DateEmpty />
                        </Date>
                      )}

                      {content.map(({ event, data }) => (
                        <Events>
                          <Logo>
                            <LogoIcon />

                            <LogoText>Battech</LogoText>
                            <LogoTitle>{event}</LogoTitle>
                          </Logo>

                          {data.map(({ title, des }) => (
                            <ToggleContent
                              key={title}
                              title={title}
                              des={des}
                            />
                          ))}
                        </Events>
                      ))}
                    </ItemContent>
                  ))}
                </Items>
              </Year>
            ))}
          </ContentBody>
        </Content>
      </Body>

      <Signup />
    </Container>
  );
};

export default Roadmap;
