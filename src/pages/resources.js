import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image'

import ContentPage from '../components/ContentPage'
import Content, { Section } from '../components/Content'

import cmhaLogo from './images/cmha-logo.svg'

const HabitWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.75fr 2fr 0.75fr;
  grid-gap: 40px;
  text-align: center;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    grid-template-columns: 0fr 1fr 0fr;
  }
`
const Intro = styled.div`
  grid-column: 1 / -1;
`

const Habit1 = styled.div`
  grid-column: 2 / span 1;
`
const Habit2 = styled.div`
  grid-column: 2 / span 1;
`
const Habit3 = styled.div`
  grid-column: 2 / span 1;
`
const Habit4 = styled.div`
  grid-column: 2 / span 1;
`
const Habit5 = styled.div`
  grid-column: 2 / span 1;
`

const Title = styled.h3`
  margin: 0px;
`

const ResourcesList = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`

const ResourceLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  flex: 1;
  flex-grow: 1;
  flex-basis: auto;

  color: #7a7d86;
  text-decoration: none;
  font-size: 1.5rem;

  min-width: 15rem;
  max-width: 15rem;
  width: 15rem;
  height: 15rem;
  margin-bottom: 1rem;
  padding: 1rem 2rem;

  /* border: solid 1px #dde1eb; */
  border-radius: 0.325rem;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    color: #a3a9e7;
  }
`

const ResourceGatsbyImg = styled(Img)`
  width: 100%;
`

const ResourceImg = styled.img`
  width: 200px;
`

const Resources = ({ data }) => (
  <Content>
    <Section>
      <ContentPage title="Resources">
        <ResourcesList>
          <ResourceLink
            href="https://AnxietyBC.com"
            target="_blank"
            title="AnxietyBC"
          >
            <ResourceGatsbyImg
              resolutions={data.anxietyBcLogo.childImageSharp.resolutions}
              alt="AnxietyBC"
            />
          </ResourceLink>
          <ResourceLink
            href="https://cmha.ca"
            target="_blank"
            title="Canadian Mental Health Association"
          >
            <ResourceImg
              src={cmhaLogo}
              alt="Canadian Mental Health Association"
            />
          </ResourceLink>
          <ResourceLink
            href="https://www.gottman.com"
            target="_blank"
            title="The Gottman Institute"
          >
            <ResourceGatsbyImg
              resolutions={data.gottmanLogo.childImageSharp.resolutions}
              alt="The Gottman Institute"
            />
          </ResourceLink>
          <ResourceLink
            href="https://www.shuswapcounselling.ca"
            target="_blank"
            title="Shuswap Clinical Counselling Centre"
          >
            <ResourceGatsbyImg
              resolutions={data.scccLogo.childImageSharp.resolutions}
              alt="Shuswap Clinical Counselling Centre"
            />
          </ResourceLink>
        </ResourcesList>
      </ContentPage>
    </Section>
    <Section>
      <ContentPage
        title="Winter Blues"
        subtitle="Kendra Kieft, MA, RCC"
        footer="Shuswap Couple & Family Therapy 2018"
      >
        <HabitWrapper>
          <Intro>
            January can be one of the most difficult months of the year from a
            mental health perspective. After the excitement (or stress!) of the
            holidays, broken new {`year's`} resolutions, and cold, gray skies,{' '}
            {`don't`} be surprised if you find yourself experiencing some{' '}
            {`"winter blues"`}. It can be helpful to look at the top five habits
            of wellness and see how you can integrate these habits into your
            daily life to build health and resilience.
          </Intro>
          <Habit1>
            <Title>Habit 1: Sleep</Title>
            Most teens/adults need between 7-9 hours of sleep each night.
            Remember you can’t “catch up” on sleep by pulling all-nighters and
            then sleeping in on the weekend. Healthy sleep habits mean a regular
            sleep routine, going to bed at the same time each night, and waking
            up at the same time each morning. Limit the use of screen-time in
            the hour before sleep and have a relaxing ritual (music, reading,
            praying) before you fall asleep.
          </Habit1>
          <Habit2>
            <Title>Habit 2: Exercise</Title>Exercise (any activity that has you
            moving!) can include: walks, dancing, playing sports, shoveling
            snow, household chores, skiing, skating, etc. Being outdoors while
            exercising can provide an extra mood boost. Research shows that
            regular exercise can be even more effective for depression than many
            anti-depressant medications.
          </Habit2>
          <Habit3>
            <Title>Habit 3: Nutrition</Title>
            Healthy food choices include: vegetables, fruit, whole grains, meat,
            nuts, seeds, and dairy products. Limit sugar, salt, alcohol, and
            highly processed foods. Sometimes our splurges over the holiday
            season contribute to a lower mood.
          </Habit3>
          <Habit4>
            <Title>Habit 4: Time Management</Title>
            How we manage our time is key to how we feel. If we are too busy, we
            can become frazzled and stressed out. If we are not involved in
            meaningful activities we can become bored or depressed. Learn what
            is a good amount of activity for your personality and lifestyle and
            practice that balance.
          </Habit4>
          <Habit5>
            <Title>Habit 5: Social Connections</Title>
            This is at the end of the list, however, it is one of the most
            important habits of wellness. If we have strong connections to
            family and friends, we feel better and even live longer. To have
            someone to talk to, spend time with, and share a laugh or cry
            together will make your life much richer.
          </Habit5>
        </HabitWrapper>
      </ContentPage>
    </Section>
  </Content>
)

Resources.propTypes = {
  data: PropTypes.object,
}

export default Resources

export const query = graphql`
  query ResourcesQuery {
    anxietyBcLogo: file(
      relativePath: { eq: "pages/images/anxietybc-logo.jpg" }
    ) {
      childImageSharp {
        resolutions(width: 200, quality: 100) {
          ...GatsbyImageSharpResolutions_noBase64
        }
      }
    }

    gottmanLogo: file(relativePath: { eq: "pages/images/gottman-logo.png" }) {
      childImageSharp {
        resolutions(width: 200) {
          ...GatsbyImageSharpResolutions_noBase64
        }
      }
    }

    scccLogo: file(relativePath: { eq: "pages/images/sccc-logo.png" }) {
      childImageSharp {
        resolutions(width: 100) {
          ...GatsbyImageSharpResolutions_noBase64
        }
      }
    }
  }
`
