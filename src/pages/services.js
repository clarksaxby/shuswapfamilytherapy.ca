import React from 'react'
import styled from 'styled-components'
import ContentPage from '../components/ContentPage'
import Content, { Section } from '../components/Content'

const PriceWrapper = styled.div`
  padding: 40px 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 30px;
  margin-bottom: 40px;
  justify-items: center;

  & > * {
    text-align: center;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-gap: 20px 10px;
  }
`

const Title = styled.h3`
  margin: 0px;
`

const Services = () => (
  <Content>
    <Section>
      <ContentPage
        title="Services"
        subtitle="Services may be covered in part or in full by your extended health plan, please inquire of your specific plan if counselling sessions by a Registered Clinical Counsellor (RCC) are eligible for coverage."
        footer="Shuswap Couple & Family Therapy 2018"
      >
        <PriceWrapper>
          <div>
            <Title>Individuals</Title> $110 for 50 minute sessions
          </div>
          <div>
            <Title>Couples</Title> $125 for 50 minute sessions
          </div>
          <div>
            <Title>Family</Title> $125 for 50 minute sessions
          </div>
        </PriceWrapper>
      </ContentPage>
    </Section>
  </Content>
)

export default Services
