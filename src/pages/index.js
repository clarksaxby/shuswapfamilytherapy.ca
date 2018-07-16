import React from 'react'
import styled from 'styled-components'

import HeroBanner from '../components/HeroBanner'

import heroImage from './images/lake.jpg'

const Content = styled.div`
  max-width: calc(100% - 5rem);
  padding: 2.5rem 0;
  margin: 0 auto;
`

const Section = styled.section`
  margin-top: 2.5rem;
`

const IndexPage = () => (
  <Content>
    <Section>
      <HeroBanner
        title="Discover"
        image={heroImage}
        subtitle="meaningful connections, creative solutions, and new possibilities"
      />
    </Section>
  </Content>
)

export default IndexPage
