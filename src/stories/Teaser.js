import React from 'react'
import { storiesOf } from '@storybook/react'
import { host } from 'storybook-host'
import Teaser from '../components/Teaser'
const img =
  'https://images.unsplash.com/photo-1518658761661-a3c568ee7b64?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ac56147bf14511bf5abaf6dc5366258a&auto=format&fit=crop&w=375&q=80'

const text =
  'Tacos lomo biodiesel hoodie. Shoreditch semiotics hella, YOLO mixtape pork belly disrupt jianbing vice selvage kinfolk. Squid brooklyn tattooed iceland photo booth.'

storiesOf('Teaser', module)
  .addDecorator(host({ width: 385, height: 800 }))
  .add('Default with no props', () => <Teaser />)
  .add('with all props', () => (
    <Teaser img={img} btnTitle="Details" imgText={text} />
  ))
