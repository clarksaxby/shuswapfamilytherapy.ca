import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Kendra from '../layouts/images/kendra.png'

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 5fr repeat(5, 0.5fr);
  grid-gap: 20px;
`
const Image = styled.img``

const About = () => (
  <div>
    <Header title="Kendra Kieft">
      MAMFT, RCC <br />
    </Header>
    <ContentWrapper>
      <Image src={Kendra} alt="Kendra" />
      <div>
        My name is Kendra Kieft and I am a Registered Clinical Counsellor
        (#13285) with a Masters degree in Marriage and Family Therapy. I
        consider it a privilege to work with couples, children, youth, and
        families as they navigate the many stages of life and work towards
        positive growth.
      </div>

      <div>
        Growing up in a small town in Northern Alberta, I learned many life
        lessons about family, community, and the resilience of the human spirit.
        I moved to Abbotsford, BC to study counselling and caregiving and had
        the amazing opportunity to work with adults with special needs. Through
        my encounters with unique individuals I continued to learn about the
        power of relationship and story. I believe we all desire to be accepted,
        loved, and seen for who we really are. This desire for connection
        propels us into relationships; a complicated combination of hurt and
        healing. It is my desire to support individuals in creating healthy,
        supportive relationships with self and others.
      </div>
      <div>
        I have lived in the beautiful Shuswap area since 2008 with my husband
        and three lively sons. I returned to school to begin my Masters degree
        in 2012, and at the same time began working part-time as a school
        counsellor at {`King's`} Christian School in Salmon Arm. I have also
        been working at the Shuswap Family Resource & Referral Centre in Salmon
        Arm since 2015. I am committed to utilizing best practices for therapy,
        to engage in ongoing supervision and consultation, and to always be a
        lifelong learner.
      </div>
      <div>
        Common Issues I work with: Family & Couple Relationships Anxiety in
        Adults and/or Children Depression in Adults and/or Children Self-harm
        and Suicidal Ideation Self-Esteem and Self-Worth Stress Management Grief
        and Loss
      </div>
      <div>
        The clinical therapy I provide meets the high standards of the British
        Columbia Association of Clinical Counsellors (BCACC.) Please visit the
        {`BCACC's`} website for more information on Registered Clinical
        Counsellors.
      </div>
    </ContentWrapper>
  </div>
)

export default About
