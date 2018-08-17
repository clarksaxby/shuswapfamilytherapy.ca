import React from 'react'
import styled from 'styled-components'
import ContentPage from '../components/ContentPage'
import Content, { Section } from '../components/Content'

// grid-template-rows: 1fr 1fr;
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px 20px;
  margin-bottom: 40px;
  justify-items: center;

  & > * {
    text-align: center;
  }

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-gap: 10px 0px;
  }
  @media screen and (max-width: 565px) {
    grid-gap: 10px 0px;
  }
`

const Title = styled.h3`
  margin: 0px;
`
// const Couples = styled.div``
// const Family = styled.div``

const Services = props => (
  <Content>
    <Section>
      <ContentPage
        title="Services"
        subtitle="Services may be covered in part or in full by your extended health plan, please inquire of your specific plan if counselling sessions by a Registered Clinical Counsellor (RCC) are eligible for coverage."
        footer="Shuswap Couple & Family Therapy 2018"
      >
        <ContentWrapper {...props}>
          <div>
            <Title>Individuals</Title> $110 for 50 minute sessions
          </div>
          <div>
            <Title>Couples</Title> $125 for 50 minute sessions
          </div>
          <div>
            <Title>Family</Title> $125 for 50 minute sessions
          </div>
        </ContentWrapper>
      </ContentPage>
    </Section>
  </Content>
)

export default Services
