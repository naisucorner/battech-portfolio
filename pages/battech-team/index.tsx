import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import PageHeader from "../../components/page-header";
import HeaderShape from "../../components/header-shape";
import Signup from "../../components/signup";
import {
  Container,
  Body,
  Join,
  JoinContainer,
  JoinImage,
  JoinBody,
  JoinTitle,
  JoinContent,
  JoinButton,
  Team,
  TeamContainer,
  TeamPosition,
  TeamContent,
  TeamDetail,
  Avatar,
  Name,
  Position,
  Detail,
  Button,
} from "./styles";

export const data = [
  {
    title: "Co-Founders: CEO & CSO",
    content: [
      {
        image:
          "https://s3-alpha-sig.figma.com/img/06a1/4803/ed1651ec16ea1cc48ce8f9fdb9c086bf?Expires=1659916800&Signature=hWzHZjrBZUVVhyulQwovAPwApneSqDVhRCgVGzgut5GNC1-PdCVvfDx029vGE0NiZ2zSlGePBi6Qof1DyjwI0yrO-yj~qvDRJGgdSmTt3agKdy8szRylO8MwWQ-mMY4k8WBmd5HChnGLRs-A9SsYo5SmIA~XiR636n0VQAn-KbIi~1368Sojpx-QDyJyxYtD4hQ7J0-OQJzo016byozrGYYc89c6GjaykICjPZ0C4xmKbX5bkM11ZyONKGjdQISMpATokth4eJIYDaL8t~bteuLNjXlFbixUJ-P~WpAV5pZ-a4mGLRMJPPOYc55~vmJP7Dno6JqZOPaHeLo9JJ3eOw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        name: "Mr. He",
        des: "CEO & Co-Founder BATGROUP | BATTECH | Building high-velocity internet companies for emerging markets Vietnam",
        position: "Chief Executive Officer",
        detail:
          "With 20 years of global experience, Le Van He spearheaded growth for companies such as Batgroup",
        about: `Over 20 years of global experience in the Telecommunications, Customer Experience and Contact Centre industry and more than 12 years experience in Senior Management. Experienced in UK, Asia Pacific, Middle East and South African markets.\n Proven CEO and C level Executive.\n Specialties: Customer Experience to drive customer growth and organization profitability, Telecommunications, Contact Centre, KYC and BPO Operations and Strategy. Contact Centre restructures and Outsource Transitions. Greenfields Projects. `,
        experiences: [
          {
            title: "CEO and Founder BATTECH",
            date: "Jun 2018 - Present · 4 yrs 1 mo",
            location: "Vietnam",
            detail:
              "BATTECH is on a mission to empower everyone to play, create and earn in an immersive metaverse without borders.\nWe are creating a metaverse that acts as a platform connecting whitelabel services in one central hub. Businesses and creators can tap into tools for finance, gaming, VR, NFTs, e-commerce and retail and market to a ready-made audience of users.",
            image:
              "https://s3-alpha-sig.figma.com/img/4991/5f81/cdc0d8d7afbff8b79ff0c769d1068e13?Expires=1659916800&Signature=PMvWcTOeSaAc7nPlJVPk9~dYu1OZ9ANFPBjE7ReiW-GROh6bHczvIv9fi3~jg0MjbZTJiG4VnaGVGgWHyAaIylsWhWRIiD1d9qEkHzpe0BDpvhH6dPej39alf~ugkIgT8OhbTPe04yw47PP3cQZw2VKB03u4awdfB~5~UoZ75WDaHA4P7HfjJkEDXxhLB2MZjqHeaUBnTeX3FGwk~oMjS-BvI4xkWVd04379P2su5Erzgm~IWuBIjbnSNTLFeDRxVwmM0pitKh7eCYGZUreT-y7EBZJAFjki76224hqxAZpSpejVCQWcNU5Fd0iauIhpSeoE~McZFnfl5icCR6VVxA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
          },
          {
            title: "CEO and Founder BATTECH",
            date: "Jun 2018 - Present · 4 yrs 1 mo",
            location: "Vietnam",
            detail:
              "BATTECH is on a mission to empower everyone to play, create and earn in an immersive metaverse without borders.\nWe are creating a metaverse that acts as a platform connecting whitelabel services in one central hub. Businesses and creators can tap into tools for finance, gaming, VR, NFTs, e-commerce and retail and market to a ready-made audience of users.",
            image:
              "https://s3-alpha-sig.figma.com/img/4991/5f81/cdc0d8d7afbff8b79ff0c769d1068e13?Expires=1659916800&Signature=PMvWcTOeSaAc7nPlJVPk9~dYu1OZ9ANFPBjE7ReiW-GROh6bHczvIv9fi3~jg0MjbZTJiG4VnaGVGgWHyAaIylsWhWRIiD1d9qEkHzpe0BDpvhH6dPej39alf~ugkIgT8OhbTPe04yw47PP3cQZw2VKB03u4awdfB~5~UoZ75WDaHA4P7HfjJkEDXxhLB2MZjqHeaUBnTeX3FGwk~oMjS-BvI4xkWVd04379P2su5Erzgm~IWuBIjbnSNTLFeDRxVwmM0pitKh7eCYGZUreT-y7EBZJAFjki76224hqxAZpSpejVCQWcNU5Fd0iauIhpSeoE~McZFnfl5icCR6VVxA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
          },
          {
            title: "CEO and Founder BATTECH",
            date: "Jun 2018 - Present · 4 yrs 1 mo",
            location: "Vietnam",
            detail:
              "BATTECH is on a mission to empower everyone to play, create and earn in an immersive metaverse without borders.\nWe are creating a metaverse that acts as a platform connecting whitelabel services in one central hub. Businesses and creators can tap into tools for finance, gaming, VR, NFTs, e-commerce and retail and market to a ready-made audience of users.",
            image:
              "https://s3-alpha-sig.figma.com/img/4991/5f81/cdc0d8d7afbff8b79ff0c769d1068e13?Expires=1659916800&Signature=PMvWcTOeSaAc7nPlJVPk9~dYu1OZ9ANFPBjE7ReiW-GROh6bHczvIv9fi3~jg0MjbZTJiG4VnaGVGgWHyAaIylsWhWRIiD1d9qEkHzpe0BDpvhH6dPej39alf~ugkIgT8OhbTPe04yw47PP3cQZw2VKB03u4awdfB~5~UoZ75WDaHA4P7HfjJkEDXxhLB2MZjqHeaUBnTeX3FGwk~oMjS-BvI4xkWVd04379P2su5Erzgm~IWuBIjbnSNTLFeDRxVwmM0pitKh7eCYGZUreT-y7EBZJAFjki76224hqxAZpSpejVCQWcNU5Fd0iauIhpSeoE~McZFnfl5icCR6VVxA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
          },
        ],
        educations: [
          {
            title: "Ha Noi national university",
            type: "Business Administration",
            image:
              "https://s3-alpha-sig.figma.com/img/8b1c/9b33/164082c190c12128e68dc00eb442cd23?Expires=1659916800&Signature=MvYy6wxwfd7qoIClZfAPP1bpibYfPlY6JuFeD3VZ87FIy7zgymykDMDSXTvdwj4hHkjhXLO0YMgyA-ASYUqywfS33aj~vdmMc~hzsjQl8B~5ZzDlUz4Fne-FYrcg4l725OSPGBb5tLFTl1X0gzWe-lh6mbJrqhsjDDFK3hkROmIKF8Y3hdOjK1Ggn4FU~EKdKNy2A6LmXthC1TD6Q4yHX1t6LG2NUchZyGClRmPKeFlWj0FqtGnD5kTC2c188OpAsvN7YABnY-JmlYInUQTrIBnTIyIxGjnyyPqWeDvpRKaQ5uN3m0LnlQCDyH~cEbKrzI3lKYBwMrPb93SqN0IjoQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
          },
          {
            title: "Ha Noi national university",
            type: "Business Administration",
            image:
              "https://s3-alpha-sig.figma.com/img/8b1c/9b33/164082c190c12128e68dc00eb442cd23?Expires=1659916800&Signature=MvYy6wxwfd7qoIClZfAPP1bpibYfPlY6JuFeD3VZ87FIy7zgymykDMDSXTvdwj4hHkjhXLO0YMgyA-ASYUqywfS33aj~vdmMc~hzsjQl8B~5ZzDlUz4Fne-FYrcg4l725OSPGBb5tLFTl1X0gzWe-lh6mbJrqhsjDDFK3hkROmIKF8Y3hdOjK1Ggn4FU~EKdKNy2A6LmXthC1TD6Q4yHX1t6LG2NUchZyGClRmPKeFlWj0FqtGnD5kTC2c188OpAsvN7YABnY-JmlYInUQTrIBnTIyIxGjnyyPqWeDvpRKaQ5uN3m0LnlQCDyH~cEbKrzI3lKYBwMrPb93SqN0IjoQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
          },
        ],
        skills: [
          {
            name: "Telecommunications",
            verified:
              "Endorsed by Deborah Aspoas and 1 other who is highly skilled at this",
            peoples:
              "Endorsed by 3 colleagues at Ooredoo Myanmar 44 endorsements",
          },
          {
            name: "Team Management",
            verified:
              "Endorsed by Deborah Aspoas and 1 other who is highly skilled at this",
            peoples:
              "Endorsed by 3 colleagues at Ooredoo Myanmar 44 endorsements",
          },
          {
            name: "Management",
            verified:
              "Endorsed by Deborah Aspoas and 1 other who is highly skilled at this",
            peoples:
              "Endorsed by 3 colleagues at Ooredoo Myanmar 44 endorsements",
          },
          {
            name: "Customer Relationship Management (CRM)",
            verified:
              "Endorsed by Deborah Aspoas and 1 other who is highly skilled at this",
            peoples:
              "Endorsed by 3 colleagues at Ooredoo Myanmar 44 endorsements",
          },
        ],
        activities: [
          {
            image:
              "https://s3-alpha-sig.figma.com/img/8ab4/7fe3/4c4ffd89c876e842444cd215314a3940?Expires=1659916800&Signature=cbuRxChFh9vO1~dOhvv3no-xoyVp5akEZOFb875LaCWrQ8rOOtCN7vR3ChNeuAVRTf8m3hqG-zKouZVsHYXhowgeDG7cZHlb6ROOjXfUkQyvoQqspaqDiPOayR7u04NYNzn2iAmsmdu5sAmNfdutKwDuHMLimAZ~Bn~TJhZKD~T7OUoIocunZzc-3N9R1JcQA3i-DOtu4CBf-zUu-57gbEYgvZcn0kGfioMUreOps2cIR1~253zqkS1PLKC8kaCKON4Hess6c8B3V~u36f2ybk9-JkQCwXKU7T0w7Ks8NPiqFncBwMvSmjoAVsNNalyevTzf5mby8x66JaqjftWwmg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
            title:
              "Join me on the 12th of April as I discuss blockchain gaming in the metaverse on behalf",
            tags: ["Battech", "Batgroup", "Digitalinclusion", "Blockchain"],
            date: "Jul 12, 2021",
          },
          {
            image:
              "https://s3-alpha-sig.figma.com/img/b343/85b5/90ec63d8ef7bb47615372766725b371d?Expires=1659916800&Signature=WyoW2WJLFFEkC6wgHubYFd3Nfdv7SwRF8vpOJfBBSf3BxI2Dfs02mB3kGwdTs06kMV0zhksQJVmXbL5SMaxsztzIGdMuOdoDgS7A8KgL1VN7VQxj5lgykcRyM7K0QeZ0RMTI5zAKfV0Gz~tMadfnNJVzgRzDpZOQWI5CpKFhRf9~KRa2vVJJ-l6mAUi~xKyzXpn1Cfxt~TFndRixQnKAE52v2hg9kzkw54Yc0FgTyfBqcWoIE68sVzKfgQeXub9aPfioTbxAWPTXxU-o5Nodf~P1qCxbeURQ~QGbenZyWRV3-L1LMh7qGJLUpVSQc0I4a5Lb8O1NTOzxmM73RPzMgQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
            title:
              "Join me on the 12th of April as I discuss blockchain gaming in the metaverse on behalf",
            tags: ["Battech", "Batgroup", "Digitalinclusion", "Blockchain"],
            date: "Jul 12, 2021",
          },
          {
            image:
              "https://s3-alpha-sig.figma.com/img/8ab4/7fe3/4c4ffd89c876e842444cd215314a3940?Expires=1659916800&Signature=cbuRxChFh9vO1~dOhvv3no-xoyVp5akEZOFb875LaCWrQ8rOOtCN7vR3ChNeuAVRTf8m3hqG-zKouZVsHYXhowgeDG7cZHlb6ROOjXfUkQyvoQqspaqDiPOayR7u04NYNzn2iAmsmdu5sAmNfdutKwDuHMLimAZ~Bn~TJhZKD~T7OUoIocunZzc-3N9R1JcQA3i-DOtu4CBf-zUu-57gbEYgvZcn0kGfioMUreOps2cIR1~253zqkS1PLKC8kaCKON4Hess6c8B3V~u36f2ybk9-JkQCwXKU7T0w7Ks8NPiqFncBwMvSmjoAVsNNalyevTzf5mby8x66JaqjftWwmg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
            title:
              "Join me on the 12th of April as I discuss blockchain gaming in the metaverse on behalf",
            tags: ["Battech", "Batgroup", "Digitalinclusion", "Blockchain"],
            date: "Jul 12, 2021",
          },
        ],
      },
      {
        image:
          "https://s3-alpha-sig.figma.com/img/b43e/27a3/329192ea34df240419891937722664f5?Expires=1659916800&Signature=evN1aZyb22Cvfirsabrr5~~rapQZ7nP15mhazcpYhxTKfLnJfY~cuqrI9TAoa0GrDj1lAbL7MNhrPE5GXUXBLvZ14YMUKofdxEtRYT67k5c9ubS9OmKuNCtBEGK8yribBsXlPureSz4nrwH7q0rGSLTLiRV6e0nsw6KEqs79e7YJPdZ2CQpiIEitQ~6J4DsCNIKluVjIwr6402uG8rKUpz6AnTuDjnHD78yApfYsS9lKlZi6LlF4ld1lBt1NlhTVaehQl64Hc5yR-UmMjMKYP15Th9lgyg0R4WxR-jIffx4K-HRuG2jS8JF5Ga71Qn8a8uarR-S2hbd5KT~f2bggkw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        name: "Dusan",
        des: "CEO & Co-Founder BATGROUP | BATTECH | Building high-velocity internet companies for emerging markets Vietnam",
        position: "Chief Technology Officer",
        detail:
          "Glen’s leadership career spans more than 15 years and industries such as blockchain, e-commerce, and retail.",
        about: `Over 20 years of global experience in the Telecommunications, Customer Experience and Contact Centre industry and more than 12 years experience in Senior Management. Experienced in UK, Asia Pacific, Middle East and South African markets.\n Proven CEO and C level Executive.\n Specialties: Customer Experience to drive customer growth and organization profitability, Telecommunications, Contact Centre, KYC and BPO Operations and Strategy. Contact Centre restructures and Outsource Transitions. Greenfields Projects. `,
      },
    ],
  },
  {
    title: "Advisors & Investors",
    content: [
      {
        image:
          "https://s3-alpha-sig.figma.com/img/ddb2/273d/0d5f76ccc6bd12d6b1764f343b468ffa?Expires=1659916800&Signature=HpuORcPab1o4-0Gau9fMpMovuFtwe2IND9zaECW1z7ubRDwnAOcCoUeMBrZPXWa8Wt5TS~NDxb~lgCGREFr6KEWQWxFT3XQeVaGBLbo~GMFarueoik4TSzmE6J508EfdXA6ai8KDuKQZWp2wsUtEiGaN0k~znD~sGZE026Ej4OOpyu9t1q0fTiNW-2jikYu~Li7YtiQdu0sAWBn0~pxQQMB9MvvyTd-KlWtxChHGJe3KYF26bT-FUTQ~sqGc1-Ok~mP5kX5vSPFobRFIsEAA0SW5EnMRLVlTGYjw9kOL37ifPkZ3gimc2iu~OxyiPbS6GBrSvgWERS5wNbOItx0cOw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        name: "Mr. He",
        des: "CEO & Co-Founder BATGROUP | BATTECH | Building high-velocity internet companies for emerging markets Vietnam",
        position: "Chief Executive Officer",
        detail:
          "With 20 years of global experience, Le Van He spearheaded growth for companies such as Batgroup",
        about: `Over 20 years of global experience in the Telecommunications, Customer Experience and Contact Centre industry and more than 12 years experience in Senior Management. Experienced in UK, Asia Pacific, Middle East and South African markets.\n Proven CEO and C level Executive.\n Specialties: Customer Experience to drive customer growth and organization profitability, Telecommunications, Contact Centre, KYC and BPO Operations and Strategy. Contact Centre restructures and Outsource Transitions. Greenfields Projects. `,
      },
      {
        image:
          "https://s3-alpha-sig.figma.com/img/66f2/6e47/09b6d24a7f792892596f7c672bd580e2?Expires=1659916800&Signature=H~NvrBBfFHxDv36nklXj7s4VMeWAs9KzkrrTLDCkF~OEChzKt50~uI2tIbvJgUXDcuc92sJTR6CdOpNjxsjFqmcizgx798veMUcKH33emBHdHDs~3rq5mqj6YlFxxymhkxxeY~dj0hAStYpQJK5yRIc3WT9rf8IAsmE8JoG4jjuUz~V51WrH9L4kFxotB8mZkq3rlMgTTqGVzV-9ZM7BknzRImsm~ex3DUOW02Vt4IbuLdIwP3mnJNxgaFRc5hq0q5iOZxx6fIlzYZFjDYA09ClHI04TWT3CIU~JfeWfjYtYE9octVUwqp25zeyFbig0w5JDaM9ZWuQcoLUr5DnzJA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        name: "Dusan",
        des: "CEO & Co-Founder BATGROUP | BATTECH | Building high-velocity internet companies for emerging markets Vietnam",
        position: "Chief Technology Officer",
        detail:
          "Glen’s leadership career spans more than 15 years and industries such as blockchain, e-commerce, and retail.",
        about: `Over 20 years of global experience in the Telecommunications, Customer Experience and Contact Centre industry and more than 12 years experience in Senior Management. Experienced in UK, Asia Pacific, Middle East and South African markets.\n Proven CEO and C level Executive.\n Specialties: Customer Experience to drive customer growth and organization profitability, Telecommunications, Contact Centre, KYC and BPO Operations and Strategy. Contact Centre restructures and Outsource Transitions. Greenfields Projects. `,
      },
      {
        image:
          "https://s3-alpha-sig.figma.com/img/06a1/4803/ed1651ec16ea1cc48ce8f9fdb9c086bf?Expires=1659916800&Signature=hWzHZjrBZUVVhyulQwovAPwApneSqDVhRCgVGzgut5GNC1-PdCVvfDx029vGE0NiZ2zSlGePBi6Qof1DyjwI0yrO-yj~qvDRJGgdSmTt3agKdy8szRylO8MwWQ-mMY4k8WBmd5HChnGLRs-A9SsYo5SmIA~XiR636n0VQAn-KbIi~1368Sojpx-QDyJyxYtD4hQ7J0-OQJzo016byozrGYYc89c6GjaykICjPZ0C4xmKbX5bkM11ZyONKGjdQISMpATokth4eJIYDaL8t~bteuLNjXlFbixUJ-P~WpAV5pZ-a4mGLRMJPPOYc55~vmJP7Dno6JqZOPaHeLo9JJ3eOw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        name: "Mr. He",
        des: "CEO & Co-Founder BATGROUP | BATTECH | Building high-velocity internet companies for emerging markets Vietnam",
        position: "Chief Executive Officer",
        detail:
          "With 20 years of global experience, Le Van He spearheaded growth for companies such as Batgroup",
        about: `Over 20 years of global experience in the Telecommunications, Customer Experience and Contact Centre industry and more than 12 years experience in Senior Management. Experienced in UK, Asia Pacific, Middle East and South African markets.\n Proven CEO and C level Executive.\n Specialties: Customer Experience to drive customer growth and organization profitability, Telecommunications, Contact Centre, KYC and BPO Operations and Strategy. Contact Centre restructures and Outsource Transitions. Greenfields Projects. `,
      },
      {
        image:
          "https://s3-alpha-sig.figma.com/img/b43e/27a3/329192ea34df240419891937722664f5?Expires=1659916800&Signature=evN1aZyb22Cvfirsabrr5~~rapQZ7nP15mhazcpYhxTKfLnJfY~cuqrI9TAoa0GrDj1lAbL7MNhrPE5GXUXBLvZ14YMUKofdxEtRYT67k5c9ubS9OmKuNCtBEGK8yribBsXlPureSz4nrwH7q0rGSLTLiRV6e0nsw6KEqs79e7YJPdZ2CQpiIEitQ~6J4DsCNIKluVjIwr6402uG8rKUpz6AnTuDjnHD78yApfYsS9lKlZi6LlF4ld1lBt1NlhTVaehQl64Hc5yR-UmMjMKYP15Th9lgyg0R4WxR-jIffx4K-HRuG2jS8JF5Ga71Qn8a8uarR-S2hbd5KT~f2bggkw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        name: "Dusan",
        des: "CEO & Co-Founder BATGROUP | BATTECH | Building high-velocity internet companies for emerging markets Vietnam",
        position: "Chief Technology Officer",
        detail:
          "Glen’s leadership career spans more than 15 years and industries such as blockchain, e-commerce, and retail.",
        about: `Over 20 years of global experience in the Telecommunications, Customer Experience and Contact Centre industry and more than 12 years experience in Senior Management. Experienced in UK, Asia Pacific, Middle East and South African markets.\n Proven CEO and C level Executive.\n Specialties: Customer Experience to drive customer growth and organization profitability, Telecommunications, Contact Centre, KYC and BPO Operations and Strategy. Contact Centre restructures and Outsource Transitions. Greenfields Projects. `,
      },
    ],
  },
  {
    title: "Management",
    content: [
      {
        image:
          "https://s3-alpha-sig.figma.com/img/1871/5cd1/7b4dcf26206ef1f36c32fe365e5852e1?Expires=1659916800&Signature=FUCPyT8b522NHrLWMoysE6eE0X~~RI~G~avRWEcbhPzATe3uUfkRSjs4jYPrGcU-v~u80DDoymtdlYX9w20wgL6E6xbz4yfXtyn~cXj7F5a14T6RIUoZb0RE2YVKyogyjqSMBWT0TAI0wY~jy~LCIFtUQOXOldq2e0ahRgI6q49gH93wLs-EyIAh9CgjvrP5QpSUvjTi55CL52sv-2o1wBDbAr0NQNbbw9sBzhBaF0DvIk9guYTG1EVwig-ZF97RmpXanydxOGpPu8N8EA1kuqk~zljo5yaEiT~EgEdSr9hBfOM1NBesSlLpu8r5rXyzf7p5KY-bktcZIrQE~DKI8g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        name: "Mr. He",
        des: "CEO & Co-Founder BATGROUP | BATTECH | Building high-velocity internet companies for emerging markets Vietnam",
        position: "Chief Executive Officer",
        detail:
          "With 20 years of global experience, Le Van He spearheaded growth for companies such as Batgroup",
        about: `Over 20 years of global experience in the Telecommunications, Customer Experience and Contact Centre industry and more than 12 years experience in Senior Management. Experienced in UK, Asia Pacific, Middle East and South African markets.\n Proven CEO and C level Executive.\n Specialties: Customer Experience to drive customer growth and organization profitability, Telecommunications, Contact Centre, KYC and BPO Operations and Strategy. Contact Centre restructures and Outsource Transitions. Greenfields Projects. `,
      },
      {
        image:
          "https://s3-alpha-sig.figma.com/img/07a7/d093/455de2526076e67691e9e0f001adfb58?Expires=1659916800&Signature=MfDUJmZ2AHqxqrZTFGwr1hs3Lt37HvV5N3nBjoRKFIwbiimq2G8br2zS8FILhVAvCzh3Z-UgmNnIMEEeLXMDW0zLsw7VJ13XrgDin8GLJkZOVyWGlmTj-v2YA82cgeXkPGLRucgqKGLMnzWUO4OmjGB0K9vVobEvz4Dm932UclLxph46HFrOg09fF13CQYsl3lGgXwwSfG9imhtf9tfTEHwLGIlm5NQef8pk9zCODCCYSeHZrUvaF8KTjCeHz9NXVss3AjkTk6lxapufmAmwuhFcYyryEbxdrprh88kqHiLZCrliKH-QkkRIYZiZfTZyzxSTrXDtYp~pF~mi0j9pig__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        name: "Dusan",
        des: "CEO & Co-Founder BATGROUP | BATTECH | Building high-velocity internet companies for emerging markets Vietnam",
        position: "Chief Technology Officer",
        detail:
          "Glen’s leadership career spans more than 15 years and industries such as blockchain, e-commerce, and retail.",
        about: `Over 20 years of global experience in the Telecommunications, Customer Experience and Contact Centre industry and more than 12 years experience in Senior Management. Experienced in UK, Asia Pacific, Middle East and South African markets.\n Proven CEO and C level Executive.\n Specialties: Customer Experience to drive customer growth and organization profitability, Telecommunications, Contact Centre, KYC and BPO Operations and Strategy. Contact Centre restructures and Outsource Transitions. Greenfields Projects. `,
      },
      {
        image:
          "https://s3-alpha-sig.figma.com/img/06a1/4803/ed1651ec16ea1cc48ce8f9fdb9c086bf?Expires=1659916800&Signature=hWzHZjrBZUVVhyulQwovAPwApneSqDVhRCgVGzgut5GNC1-PdCVvfDx029vGE0NiZ2zSlGePBi6Qof1DyjwI0yrO-yj~qvDRJGgdSmTt3agKdy8szRylO8MwWQ-mMY4k8WBmd5HChnGLRs-A9SsYo5SmIA~XiR636n0VQAn-KbIi~1368Sojpx-QDyJyxYtD4hQ7J0-OQJzo016byozrGYYc89c6GjaykICjPZ0C4xmKbX5bkM11ZyONKGjdQISMpATokth4eJIYDaL8t~bteuLNjXlFbixUJ-P~WpAV5pZ-a4mGLRMJPPOYc55~vmJP7Dno6JqZOPaHeLo9JJ3eOw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        name: "Mr. He",
        des: "CEO & Co-Founder BATGROUP | BATTECH | Building high-velocity internet companies for emerging markets Vietnam",
        position: "Chief Executive Officer",
        detail:
          "With 20 years of global experience, Le Van He spearheaded growth for companies such as Batgroup",
        about: `Over 20 years of global experience in the Telecommunications, Customer Experience and Contact Centre industry and more than 12 years experience in Senior Management. Experienced in UK, Asia Pacific, Middle East and South African markets.\n Proven CEO and C level Executive.\n Specialties: Customer Experience to drive customer growth and organization profitability, Telecommunications, Contact Centre, KYC and BPO Operations and Strategy. Contact Centre restructures and Outsource Transitions. Greenfields Projects. `,
      },
      {
        image:
          "https://s3-alpha-sig.figma.com/img/b43e/27a3/329192ea34df240419891937722664f5?Expires=1659916800&Signature=evN1aZyb22Cvfirsabrr5~~rapQZ7nP15mhazcpYhxTKfLnJfY~cuqrI9TAoa0GrDj1lAbL7MNhrPE5GXUXBLvZ14YMUKofdxEtRYT67k5c9ubS9OmKuNCtBEGK8yribBsXlPureSz4nrwH7q0rGSLTLiRV6e0nsw6KEqs79e7YJPdZ2CQpiIEitQ~6J4DsCNIKluVjIwr6402uG8rKUpz6AnTuDjnHD78yApfYsS9lKlZi6LlF4ld1lBt1NlhTVaehQl64Hc5yR-UmMjMKYP15Th9lgyg0R4WxR-jIffx4K-HRuG2jS8JF5Ga71Qn8a8uarR-S2hbd5KT~f2bggkw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        name: "Dusan",
        des: "CEO & Co-Founder BATGROUP | BATTECH | Building high-velocity internet companies for emerging markets Vietnam",
        position: "Chief Technology Officer",
        detail:
          "Glen’s leadership career spans more than 15 years and industries such as blockchain, e-commerce, and retail.",
        about: `Over 20 years of global experience in the Telecommunications, Customer Experience and Contact Centre industry and more than 12 years experience in Senior Management. Experienced in UK, Asia Pacific, Middle East and South African markets.\n Proven CEO and C level Executive.\n Specialties: Customer Experience to drive customer growth and organization profitability, Telecommunications, Contact Centre, KYC and BPO Operations and Strategy. Contact Centre restructures and Outsource Transitions. Greenfields Projects. `,
      },
      {
        image:
          "https://s3-alpha-sig.figma.com/img/66f2/6e47/09b6d24a7f792892596f7c672bd580e2?Expires=1659916800&Signature=H~NvrBBfFHxDv36nklXj7s4VMeWAs9KzkrrTLDCkF~OEChzKt50~uI2tIbvJgUXDcuc92sJTR6CdOpNjxsjFqmcizgx798veMUcKH33emBHdHDs~3rq5mqj6YlFxxymhkxxeY~dj0hAStYpQJK5yRIc3WT9rf8IAsmE8JoG4jjuUz~V51WrH9L4kFxotB8mZkq3rlMgTTqGVzV-9ZM7BknzRImsm~ex3DUOW02Vt4IbuLdIwP3mnJNxgaFRc5hq0q5iOZxx6fIlzYZFjDYA09ClHI04TWT3CIU~JfeWfjYtYE9octVUwqp25zeyFbig0w5JDaM9ZWuQcoLUr5DnzJA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        name: "Dusan",
        des: "CEO & Co-Founder BATGROUP | BATTECH | Building high-velocity internet companies for emerging markets Vietnam",
        position: "Chief Technology Officer",
        detail:
          "Glen’s leadership career spans more than 15 years and industries such as blockchain, e-commerce, and retail.",
        about: `Over 20 years of global experience in the Telecommunications, Customer Experience and Contact Centre industry and more than 12 years experience in Senior Management. Experienced in UK, Asia Pacific, Middle East and South African markets.\n Proven CEO and C level Executive.\n Specialties: Customer Experience to drive customer growth and organization profitability, Telecommunications, Contact Centre, KYC and BPO Operations and Strategy. Contact Centre restructures and Outsource Transitions. Greenfields Projects. `,
      },
      {
        image:
          "https://s3-alpha-sig.figma.com/img/06a1/4803/ed1651ec16ea1cc48ce8f9fdb9c086bf?Expires=1659916800&Signature=hWzHZjrBZUVVhyulQwovAPwApneSqDVhRCgVGzgut5GNC1-PdCVvfDx029vGE0NiZ2zSlGePBi6Qof1DyjwI0yrO-yj~qvDRJGgdSmTt3agKdy8szRylO8MwWQ-mMY4k8WBmd5HChnGLRs-A9SsYo5SmIA~XiR636n0VQAn-KbIi~1368Sojpx-QDyJyxYtD4hQ7J0-OQJzo016byozrGYYc89c6GjaykICjPZ0C4xmKbX5bkM11ZyONKGjdQISMpATokth4eJIYDaL8t~bteuLNjXlFbixUJ-P~WpAV5pZ-a4mGLRMJPPOYc55~vmJP7Dno6JqZOPaHeLo9JJ3eOw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        name: "Mr. He",
        des: "CEO & Co-Founder BATGROUP | BATTECH | Building high-velocity internet companies for emerging markets Vietnam",
        position: "Chief Executive Officer",
        detail:
          "With 20 years of global experience, Le Van He spearheaded growth for companies such as Batgroup",
        about: `Over 20 years of global experience in the Telecommunications, Customer Experience and Contact Centre industry and more than 12 years experience in Senior Management. Experienced in UK, Asia Pacific, Middle East and South African markets.\n Proven CEO and C level Executive.\n Specialties: Customer Experience to drive customer growth and organization profitability, Telecommunications, Contact Centre, KYC and BPO Operations and Strategy. Contact Centre restructures and Outsource Transitions. Greenfields Projects. `,
      },
      {
        image:
          "https://s3-alpha-sig.figma.com/img/b43e/27a3/329192ea34df240419891937722664f5?Expires=1659916800&Signature=evN1aZyb22Cvfirsabrr5~~rapQZ7nP15mhazcpYhxTKfLnJfY~cuqrI9TAoa0GrDj1lAbL7MNhrPE5GXUXBLvZ14YMUKofdxEtRYT67k5c9ubS9OmKuNCtBEGK8yribBsXlPureSz4nrwH7q0rGSLTLiRV6e0nsw6KEqs79e7YJPdZ2CQpiIEitQ~6J4DsCNIKluVjIwr6402uG8rKUpz6AnTuDjnHD78yApfYsS9lKlZi6LlF4ld1lBt1NlhTVaehQl64Hc5yR-UmMjMKYP15Th9lgyg0R4WxR-jIffx4K-HRuG2jS8JF5Ga71Qn8a8uarR-S2hbd5KT~f2bggkw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        name: "Dusan",
        des: "CEO & Co-Founder BATGROUP | BATTECH | Building high-velocity internet companies for emerging markets Vietnam",
        position: "Chief Technology Officer",
        detail:
          "Glen’s leadership career spans more than 15 years and industries such as blockchain, e-commerce, and retail.",
        about: `Over 20 years of global experience in the Telecommunications, Customer Experience and Contact Centre industry and more than 12 years experience in Senior Management. Experienced in UK, Asia Pacific, Middle East and South African markets.\n Proven CEO and C level Executive.\n Specialties: Customer Experience to drive customer growth and organization profitability, Telecommunications, Contact Centre, KYC and BPO Operations and Strategy. Contact Centre restructures and Outsource Transitions. Greenfields Projects. `,
      },
    ],
  },
];

const BattechTeam: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Battech Token</title>
      </Head>

      <PageHeader
        title="The Battech Team"
        sub="Meet the leaders and builders of the metaverse future at BATTECH."
      />

      <Body>
        <Join>
          <JoinContainer>
            <JoinImage src="./images/join-team.png" />
            <JoinBody>
              <JoinTitle>Leadership Team</JoinTitle>
              <JoinContent>
                Our leadership team's experience spans several industries
                including international C-Level executives with a proven track
                record in new and emerging markets. With major successes in
                company turnarounds and start-ups, our team continues to lead
                the upcoming disruptive technologies around the world. The team
                consists of experienced and well respected international C-Level
                executives with an exceptional reach and global connections.
              </JoinContent>
              <JoinButton>JOIN OUR TEAM</JoinButton>
            </JoinBody>
          </JoinContainer>
        </Join>

        <Team>
          <TeamContainer>
            {data.map(({ title, content }, index) => (
              <TeamPosition key={index}>
                <HeaderShape title={title} />
                <TeamContent>
                  {content.map(({ image, name, position, detail }, index) => (
                    <TeamDetail key={index}>
                      <Link href={`/battech-team/${name}`}>
                        <Avatar src={image} />
                      </Link>

                      <Link href={`/battech-team/${name}`}>
                        <Name>{name}</Name>
                      </Link>

                      <Position>{position}</Position>
                      <Detail>{detail}</Detail>
                      <Button>Learn More</Button>
                    </TeamDetail>
                  ))}
                </TeamContent>
              </TeamPosition>
            ))}
          </TeamContainer>
        </Team>

        <Signup />
      </Body>
    </Container>
  );
};

export default BattechTeam;
