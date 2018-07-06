import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Menu, { MenuItem } from '../components/Menu'

const menuAction = () => action('Menu clicked')

storiesOf('Menu', module)
  .add('Empty', () => <Menu />)
  .add('With links', () => (
    <Menu>
      <MenuItem>Home</MenuItem>
      <MenuItem current>About</MenuItem>
      <MenuItem onClick={menuAction()}>Contact</MenuItem>
    </Menu>
  ))
  .add('With logo', () => (
    <Menu logo="Lorem Ipsum Co.">
      <MenuItem>Home</MenuItem>
      <MenuItem current>About</MenuItem>
      <MenuItem onClick={menuAction()}>Contact</MenuItem>
    </Menu>
  ))
