import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Header from './Header'
import Footer from './Footer'
import Icons from './Icons'

const ContentPageContainer = styled.section`
  background-color: #ffffff;
  box-shadow: rgba(161, 177, 204, 0.325) 0px 14.6667px 58.6667px 1.83333px;
`

const ContentHeader = styled(Header)`
  @media screen and (max-width: 1280px) {
    padding: 5rem 3rem 3rem 3rem;
  }

  @media screen and (max-width: 736px) {
    padding: 3rem 2rem 1rem 2rem;
  }

  @media screen and (max-width: 480px) {
    padding: 3rem 1.5rem 1rem 1.5rem;
  }
`

const Content = styled.div`
  padding: 6rem 6rem 4rem 6rem;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Source Sans Pro', Helvetica, sans-serif;

  @media screen and (max-width: 1280px) {
    padding: 3rem 3rem 1rem 3rem;
  }

  @media screen and (max-width: 736px) {
    padding: 2rem 2rem 0.1rem 2rem;
  }

  @media screen and (max-width: 480px) {
    padding: 2rem 1.5rem 0.1rem 1.5rem;
  }

  ${({ title }) =>
    title &&
    css`
      border-top: 1px solid #dde1eb;
    `};
`

const ContentPage = ({ title, subtitle, footer, children }) => (
  <ContentPageContainer title={title}>
    {title && <ContentHeader title={title}>{subtitle}</ContentHeader>}
    <Content title={title}>{children}</Content>
    {footer && (
      <Footer>
        <Icons />
        {footer}
      </Footer>
    )}
  </ContentPageContainer>
)

ContentPage.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  footer: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

export default ContentPage
