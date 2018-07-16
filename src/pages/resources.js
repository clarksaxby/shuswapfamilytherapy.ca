import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'

const ResourcesWrapper = styled.div``

const TeaserWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.75fr 1fr;
  grid-gap: 40px;
  text-align: center;
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

const Resources = () => (
  <ResourcesWrapper>
    <Header title="Winter Blues">
      January can be one of the most difficult months of the year from a mental
      health perspective. After the excitement (or stress!) of the holidays,
      broken new {`year's`} resolutions, and cold, gray skies, {`don't`} be
      surprised if you find yourself experiencing some {`"winter blues"`}. It
      can be helpful to look at the top five habits of wellness and see how you
      can integrate these habits into your daily life to build health and
      resilience. <br />
      <strong>Kendra Kieft, MAMFT, RCC</strong>
    </Header>
    <TeaserWrapper>
      <Habit1>
        <Title>Habit 1: Sleep</Title>
        Most teens/adults need between 7-9 hours of sleep each night. Remember
        you can’t “catch up” on sleep by pulling all-nighters and then sleeping
        in on the weekend. Healthy sleep habits mean a regular sleep routine,
        going to bed at the same time each night, and waking up at the same time
        each morning. Limit the use of screen-time in the hour before sleep and
        have a relaxing ritual (music, reading, praying) before you fall asleep.
      </Habit1>
      <Habit2>
        <Title>Habit 2: Exercise</Title>Exercise (any activity that has you
        moving!) can include: walks, dancing, playing sports, shoveling snow,
        household chores, skiing, skating, etc. Being outdoors while exercising
        can provide an extra mood boost. Research shows that regular exercise
        can be even more effective for depression than many anti-depressant
        medications.
      </Habit2>
      <Habit3>
        <Title>Habit 3: Nutrition</Title>
        Healthy food choices include: vegetables, fruit, whole grains, meat,
        nuts, seeds, and dairy products. Limit sugar, salt, alcohol, and highly
        processed foods. Sometimes our splurges over the holiday season
        contribute to a lower mood.
      </Habit3>
      <Habit4>
        <Title>Habit 4: Time Management</Title>
        How we manage our time is key to how we feel. If we are too busy, we can
        become frazzled and stressed out. If we are not involved in meaningful
        activities we can become bored or depressed. Learn what is a good amount
        of activity for your personality and lifestyle and practice that
        balance.
      </Habit4>
      <Habit5>
        <Title>Habit 5: Social Connections</Title>
        This is at the end of the list, however, it is one of the most important
        habits of wellness. If we have strong connections to family and friends,
        we feel better and even live longer. To have someone to talk to, spend
        time with, and share a laugh or cry together will make your life much
        richer.
      </Habit5>
    </TeaserWrapper>
  </ResourcesWrapper>
)

export default Resources
