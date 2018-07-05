import React from 'react'
import { storiesOf } from '@storybook/react'
import host from 'storybook-host'

import Header from '../components/Header'

storiesOf('Header', module)
  .addDecorator(
    host({
      width: '90%',
    })
  )
  .add('With title', () => <Header title="Welcome" />)
  .add('With title and text', () => (
    <Header title="Welcome">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu lacus
      imperdiet, cursus erat vitae, dictum nulla. Mauris et euismod sed nunc.
      Proin vel rhoncus mauris. Quisque mattis dictum etiam.
    </Header>
  ))
