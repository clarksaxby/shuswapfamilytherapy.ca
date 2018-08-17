import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Router } from 'react-router'
import createMemoryHistory from 'history/createMemoryHistory'

import Teaser from '../components/Teaser'
import couplesImage from '../pages/images/couples-pricing.jpg'
const img =
  'https://images.unsplash.com/photo-1413752567787-baa02dde3c65?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=00dab0342c1b6498228d16e4a7d82ad3&auto=format&fit=crop&w=1655&q=80'
const text =
  'Tacos lomo biodiesel hoodie. Shoreditch semiotics hella, YOLO mixtape pork belly disrupt jianbing vice selvage kinfolk. Squid brooklyn tattooed iceland photo booth.'
const history = createMemoryHistory()
history.push = action('history.push')

storiesOf('Teaser', module)
  .addDecorator(story => <Router history={history}>{story()}</Router>)
  .add('Default with no props', () => (
    <Teaser img={couplesImage} to="/services" />
  ))
  .add('with all props', () => (
    <Teaser img={img} btnTitle="Details" imgText={text} to="/services" />
  ))
  .add('with large image', () => (
    <Teaser
      img={couplesImage}
      btnTitle="Couples"
      imgText={text}
      to="/services"
    />
  ))
