import { configure } from '@storybook/react'

const req = require.context('../src/stories')

const loadStories = () => req.keys().forEach(req)

configure(loadStories, module)
