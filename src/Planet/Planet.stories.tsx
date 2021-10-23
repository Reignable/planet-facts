import { Meta } from '@storybook/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { MemoryRouter, Route } from 'react-router'
import { Planet } from './Planet'

export default {
  title: 'Planet',
  component: Planet,
  decorators: [
    Story => (
      <QueryClientProvider client={new QueryClient()}>
        <Story />
      </QueryClientProvider>
    ),
    Story => (
      <MemoryRouter initialEntries={['/earth/overview']}>
        <Route path="/:planet/:view">
          <Story />
        </Route>
      </MemoryRouter>
    ),
  ],
} as Meta

export const Default = (): JSX.Element => <Planet />
