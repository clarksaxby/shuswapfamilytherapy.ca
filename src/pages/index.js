import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import queryString from 'query-string'

import HeroBanner from '../components/HeroBanner'
import ContentPage from '../components/ContentPage'
import Teaser from '../components/Teaser'

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

const IndexPage = ({ data }) => {
  let redirect
  if (
    typeof window !== 'undefined' &&
    window.location &&
    window.location.href
  ) {
    redirect = queryString.parseUrl(window.location.href)
    redirect.query.thanks = true
  }

  return (
    <Content>
      <Section>
        <HeroBanner
          title="Discover"
          image={data.bannerImage.childImageSharp.sizes}
          subtitle="meaningful connections, creative solutions, and new possibilities"
        />
      </Section>
      <Section>
        <ContentPage title="Services">
          <Services>
            <Service>
              <Teaser
                exact
                btnTitle="Couples"
                img={data.couplesImage.childImageSharp.resolutions}
                imgText="Couples therapy is for any couple, dating, engaged, married, common-law who are looking for positive solutions to challenges they are facing, and creative ways to enrich their relationship. Couples therapy can also help individuals navigate the unique challenges and opportunities of divorce/separation, co-parenting, and blended families."
                imgPosition="right bottom"
                to="/services"
              />
            </Service>
            <Service>
              <Teaser
                exact
                btnTitle="Families"
                img={data.familiesImage.childImageSharp.resolutions}
                imgText="Family Therapy provides an opportunity for all family members to have a voice and share their unique perspective. Family sessions will incorporate creative activities and strategies to build connections, celebrate differences, and grow understanding."
                to="/services"
              />
            </Service>
            <Service>
              <Teaser
                exact
                btnTitle="Individuals"
                img={data.individualImage.childImageSharp.resolutions}
                imgText="Individual therapy is available for anyone looking to make meaningful connections, changes, or experience growth in their life. Issues may include: anxiety, depression, mental health challenges, stressful life events, family or relationship concerns."
                to="/services"
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
          subtitle="1-120 Harbourfront Drive, NE Salmon Arm, BC V1E 2T3"
          colored
          footer="Shuswap Couple &amp; Family Therapy &copy; 2018"
        >
          <ContactForm
            action="POST"
            data-netlify="true"
            showThanks={
              typeof window !== 'undefined' &&
              window.location.search.includes('thanks=true')
            }
            redirectUrl={`${typeof window !== 'undefined' &&
              redirect.url}?${queryString.stringify(
              typeof window !== 'undefined' && redirect.query
            )}`}
          />
        </ContentPage>
      </Section>
    </Content>
  )
}

IndexPage.propTypes = {
  data: PropTypes.any,
}

export const query = graphql`
  query IndexQuery {
    couplesImage: file(
      relativePath: { eq: "pages/images/couples-pricing.jpg" }
    ) {
      childImageSharp {
        resolutions(width: 300, height: 300) {
          ...GatsbyImageSharpResolutions
        }
      }
    }

    familiesImage: file(
      relativePath: { eq: "pages/images/families-pricing.jpg" }
    ) {
      childImageSharp {
        resolutions(width: 300, height: 300) {
          ...GatsbyImageSharpResolutions
        }
      }
    }

    individualImage: file(
      relativePath: { eq: "pages/images/individual-pricing.jpg" }
    ) {
      childImageSharp {
        resolutions(width: 300, height: 300) {
          ...GatsbyImageSharpResolutions
        }
      }
    }

    bannerImage: file(relativePath: { eq: "pages/images/lake.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1280) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`

export default IndexPage
