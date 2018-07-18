import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Header from './Header'
import Footer from './Footer'
import Icons from './Icons'
import overlayImage from '../layouts/images/overlay.png'

const ContentPageContainer = styled.section`
  background-color: #ffffff;
  box-shadow: rgba(161, 177, 204, 0.325) 0px 14.6667px 58.6667px 1.83333px;

  ${({ colored }) =>
    colored &&
    css`
    background-image: url('${overlayImage}'), linear-gradient(45deg, #84c8da, #88a8ec);
  `};
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

  ${({ colored }) =>
    colored &&
    css`
      color: #ffffff;
      & h1 {
        font-size: 2.5rem;
      }
    `};
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

const ContentFooter = styled(Footer)`
  background: transparent;
  border-top: 1px solid #dde1eb;
`

const ContentPage = ({ title, subtitle, footer, colored, children }) => (
  <ContentPageContainer title={title} colored={colored}>
    {title && (
      <ContentHeader title={title} colored={colored}>
        {subtitle}
      </ContentHeader>
    )}
    <Content title={title}>{children}</Content>
    {footer && (
      <ContentFooter>
        <Icons />
        {footer}
      </ContentFooter>
    )}
  </ContentPageContainer>
)

ContentPage.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  footer: PropTypes.string,
  colored: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

export default ContentPage
