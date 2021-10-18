import { Nav } from 'Nav'

import { Meta } from '@storybook/react'
import { MemoryRouter } from 'react-router'

export default {
  title: 'Nav',
  component: Nav,
  argTypes: {
    planet: {
      defaultValue: 'earth',
      control: { type: 'select' },
      options: [
        'mercury',
        'venus',
        'earth',
        'mars',
        'jupiter',
        'saturn',
        'uranus',
        'neptune',
      ],
    },
  },
  decorators: [
    (Story, args) => (
      <MemoryRouter initialEntries={[`/${args.planet}`]}>
        <Story />
      </MemoryRouter>
    ),
  ],
} as Meta

export const Default = (): JSX.Element => <Nav />
