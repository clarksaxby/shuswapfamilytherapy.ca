import { configure } from '@storybook/react'
import '../src/layouts/index.css'

const req = require.context('../src/stories')

const loadStories = () => req.keys().forEach(req)

configure(loadStories, module)
