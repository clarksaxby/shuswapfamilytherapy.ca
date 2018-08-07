import React from 'react'
import styled from 'styled-components'
import Kendra from '../layouts/images/kendra.png'
import ContentPage from '../components/ContentPage'
import Content, { Section } from '../components/Content'
import overlay from '../layouts/images/overlay.png'

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px 20px;
  margin-bottom: 40px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-gap: 10px 0px;
  }
  @media screen and (max-width: 565px) {
    grid-gap: 10px 0px;
  }
`
const ImageStyleAfter = styled.div`
  position: relative;
  grid-column: 2 / span 1;
  grid-row: 2 / span 3;
  justify-self: center;
  align-self: center;

  @media (max-width: 1000px) {
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100% - 7px);
    background-image: url(${overlay}),
      linear-gradient(
        45deg,
        rgba(162, 206, 220, 0.25),
        rgba(170, 143, 255, 0.25)
      );
  }
`
const Image = styled.img`
  @media (max-width: 630px) {
    width: 310px;
    height: 330px;
  }
`
const Paragraph1 = styled.div`
  grid-column: 1 / span 2;
  grid-row: 1 / span 1;
  @media (max-width: 1000px) {
    grid-row: 2 / span 1;
  }
`

const Paragraph2 = styled.div`
  grid-column: 1 / span 1;
  grid-row: 2 / span 1;
  @media (max-width: 1000px) {
    grid-row: 3 / span 1;
  }
`
const Paragraph3 = styled.div`
  grid-column: 1 / span 1;
  grid-row: 3 / span 1;
  @media (max-width: 1000px) {
    grid-row: 4 / span 1;
  }
`
const Paragraph4 = styled.div`
  grid-column: 1 / span 1;
  grid-row: 4 / span 1;
  @media (max-width: 1000px) {
    grid-row: 5 / span 1;
  }
`
const Paragraph5 = styled.div`
  grid-column: 1 / span 2;
  grid-row: 5 / span 1;
  @media (max-width: 1000px) {
    grid-row: 6 / span 1;
  }
`

const About = () => (
  <Content>
    <Section>
      <ContentPage
        title="Kendra Kieft"
        subtitle="MAMFT, RCC"
        footer="Shuswap Couple & Family Therapy 2018"
      >
        <ContentWrapper>
          <ImageStyleAfter>
            <Image src={Kendra} alt="Kendra" />
          </ImageStyleAfter>

          <Paragraph1>
            My name is Kendra Kieft and I am a Registered Clinical Counsellor
            (#13285) with a Masters degree in Marriage and Family Therapy. I
            consider it a privilege to work with couples, children, youth, and
            families as they navigate the many stages of life and work towards
            positive growth.
          </Paragraph1>

          <Paragraph2>
            Growing up in a small town in Northern Alberta, I learned many life
            lessons about family, community, and the resilience of the human
            spirit. I moved to Abbotsford, BC to study counselling and
            caregiving and had the amazing opportunity to work with adults with
            special needs. Through my encounters with unique individuals I
            continued to learn about the power of relationship and story. I
            believe we all desire to be accepted, loved, and seen for who we
            really are. This desire for connection propels us into
            relationships; a complicated combination of hurt and healing. It is
            my desire to support individuals in creating healthy, supportive
            relationships with self and others.
          </Paragraph2>
          <Paragraph3>
            I have lived in the beautiful Shuswap area since 2008 with my
            husband and three lively sons. I returned to school to begin my
            Masters degree in 2012, and at the same time began working part-time
            as a school counsellor at {`King's`} Christian School in Salmon Arm.
            I have also been working at the Shuswap Family Resource & Referral
            Centre in Salmon Arm since 2015. I am committed to utilizing best
            practices for therapy, to engage in ongoing supervision and
            consultation, and to always be a lifelong learner.
          </Paragraph3>
          <Paragraph4>
            Common Issues I work with:
            <ul>
              <li>Family & Couple Relationships </li>
              <li> Anxiety in Adults and/or Children</li>
              <li>Depression in Adults and/or Children</li>
              <li>Self-harm and Suicidal Ideation</li>
              <li>Self-Esteem and Self-Worth</li>
              <li>Stress Management</li>
              <li>Grief and Loss</li>
            </ul>
          </Paragraph4>
          <Paragraph5>
            The clinical therapy I provide meets the high standards of the
            British Columbia Association of Clinical Counsellors (BCACC.) Please
            visit the
            {` BCACC's`} website for more information on Registered Clinical
            Counsellors.
          </Paragraph5>
        </ContentWrapper>
      </ContentPage>
    </Section>
  </Content>
)

export default About
