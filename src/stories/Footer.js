import React from 'react'
import { storiesOf } from '@storybook/react'

import Footer from '../components/Footer'
import Icons from '../components/Icons'

storiesOf('Footer', module)
  .add('With text', () => <Footer>Copyright © me 24 AD</Footer>)
  .add('With icons and copyright', () => (
    <Footer>
      <Icons />
      Copyright © me 24 AD
    </Footer>
  ))
