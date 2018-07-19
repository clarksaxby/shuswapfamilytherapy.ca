import React from 'react'
import styled from 'styled-components'
import queryString from 'query-string'

import HeroBanner from '../components/HeroBanner'
import ContentPage from '../components/ContentPage'
import Teaser from '../components/Teaser'

import heroImage from './images/lake.jpg'
import couplesImage from './images/couples-pricing.jpg'
import familiesImage from './images/families-pricing.jpg'
import individualImage from './images/individual-pricing.jpg'
import ContactForm from '../components/ContactForm'
import Content, { Section } from '../components/Content'

const Services = styled.div`
  display: flex;
  padding-bottom: 1em;
  justify-content: space-around;
  flex-wrap: wrap;
`

const Service = styled.div`
  flex: 1;
  flex-grow: 1;
  flex-basis: auto;
  width: 300px;
  min-width: 300px;
  max-width: 300px;
`

const QuoteContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`

const Quote = styled.div`
  flex: 1;
  flex-basis: auto;
  padding: 1em 2em;
  font-size: 1.25em;
  text-align: center;
  width: 300px;
  min-width: 300px;
  max-width: 300px;

  quotes: '“' '”';

  /* Quote styling from https://css-tricks.com/snippets/css/simple-and-nice-blockquote-styling/ */
  &:before {
    color: #ccc;
    content: open-quote;
    font-size: 4em;
    line-height: 0.1em;
    margin-right: 0.25em;
    vertical-align: -0.4em;
  }
`

const Author = styled.div`
  color: #7a7d86;
  font-weight: 600;
  padding-top: 0.5em;
`

const IndexPage = () => {
  const redirect = queryString.parseUrl(window.location.href)
  redirect.query.thanks = true

  return (
    <Content>
      <Section>
        <HeroBanner
          title="Discover"
          image={heroImage}
          subtitle="meaningful connections, creative solutions, and new possibilities"
        />
      </Section>
      <Section>
        <ContentPage title="Services">
          <Services>
            <Service>
              <Teaser
                btnTitle="Couples"
                img={couplesImage}
                imgText="Couples therapy is for any couple, dating, engaged, married, common-law who are looking for positive solutions to challenges they are facing, and creative ways to enrich their relationship. Couples therapy can also help individuals navigate the unique challenges and opportunities of divorce/separation, co-parenting, and blended families."
                imgPosition="right bottom"
              />
            </Service>
            <Service>
              <Teaser
                btnTitle="Families"
                img={familiesImage}
                imgText="Family Therapy provides an opportunity for all family members to have a voice and share their unique perspective. Family sessions will incorporate creative activities and strategies to build connections, celebrate differences, and grow understanding."
              />
            </Service>
            <Service>
              <Teaser
                btnTitle="Individuals"
                img={individualImage}
                imgText="Individual therapy is available for anyone looking to make meaningful connections, changes, or experience growth in their life. Issues may include: anxiety, depression, mental health challenges, stressful life events, family or relationship concerns."
              />
            </Service>
          </Services>
        </ContentPage>
      </Section>
      <Section>
        <ContentPage title="Quotes">
          <QuoteContainer>
            <Quote>
              Nothing grows people like love. When we love people, they blossom
              <Author>Sue Johnson</Author>
            </Quote>
            <Quote>
              Follow your heart, but take your brain with you.
              <Author>Alfred Adler</Author>
            </Quote>
            <Quote>
              How can I provide a relationship which this person can use for
              his/her own personal growth?
              <Author>Carl Rogers</Author>
            </Quote>
          </QuoteContainer>
        </ContentPage>
      </Section>

      <Section>
        <ContentPage
          title="Make an Appointment"
          subtitle="#3-781 Marine Park Drive, Salmon Arm, BC V1E2W7"
          colored
          footer="Shuswap Couple &amp; Family Therapy &copy; 2018"
        >
          <ContactForm
            action={
              'https://mailhound.twostoryrobot.com?key=' +
              process.env.STORYBOOK_MAILHOUND_KEY
            }
            showThanks={window.location.search.includes('thanks=true')}
            redirectUrl={`${redirect.url}?${queryString.stringify(
              redirect.query
            )}`}
          />
        </ContentPage>
      </Section>
    </Content>
  )
}

export default IndexPage
