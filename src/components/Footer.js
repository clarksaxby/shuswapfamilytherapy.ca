// import React from 'react'
import styled from 'styled-components'
import overlay from '../layouts/images/overlay.png'

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 13rem;
  padding: 2rem 0;
  background-image: url('${overlay}'), linear-gradient(45deg, #84c8da, #88a8ec);
  color: #fff;
  font-family: 'Source Sans Pro', Helvetica, sans-serif;
`

export default Footer
