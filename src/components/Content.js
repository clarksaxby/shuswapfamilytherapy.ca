import styled from 'styled-components'

const Content = styled.div`
  max-width: calc(100% - 7rem);
  width: 80rem;
  padding: 6rem 0;
  margin: 0 auto;
  margin-top: 30px;

  @media screen and (max-width: 1680px) {
    padding: 3rem 0;
  }

  @media screen and (max-width: 1280px) {
    padding: 2.5rem 0;
    max-width: calc(100% - 5rem);
  }

  @media screen and (max-width: 736px) {
    padding: 2rem 0;
    max-width: calc(100% - 4rem);
  }

  @media screen and (max-width: 480px) {
    padding: 0;
    max-width: 100%;
  }
`

export const Section = styled.section`
  margin-top: 2.5rem;
`

export default Content
