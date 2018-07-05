import React from 'react'
import { storiesOf } from '@storybook/react'
import Teaser from '../components/Teaser'
const img =
  'https://images.unsplash.com/photo-1518658761661-a3c568ee7b64?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ac56147bf14511bf5abaf6dc5366258a&auto=format&fit=crop&w=975&q=80'
storiesOf('Teaser', module)
  .add('Default', () => <Teaser />)
  .add('with test picture', () => <Teaser img={img} />)
